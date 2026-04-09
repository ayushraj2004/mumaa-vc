import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { checkRateLimit } from '@/lib/rate-limit';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const all = searchParams.get('all');
    const skill = searchParams.get('skill');
    const search = searchParams.get('search');
    const minRating = searchParams.get('minRating');
    const language = searchParams.get('language');
    const available = searchParams.get('available');

    // ── ?all=true — Simple list of all nannies for dropdowns ───────
    if (all === 'true') {
      const nannies = await db.user.findMany({
        where: { role: 'NANNY', isActive: true },
        select: { id: true, name: true, email: true },
        orderBy: { name: 'asc' },
      });
      return NextResponse.json({ nannies });
    }

    // Rate limiting check (search: 30 req/min per IP)
    const { success, headers } = await checkRateLimit(req, 'search');
    if (!success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers }
      );
    }

    const where: any = {
      user: { isActive: true },
    };

    if (available === 'true') {
      where.isAvailable = true;
    }

    if (minRating) {
      where.rating = { gte: parseFloat(minRating) };
    }

    if (skill) {
      where.skills = { contains: skill };
    }

    if (language) {
      where.languages = { contains: language };
    }

    if (search) {
      where.OR = [
        { user: { name: { contains: search } } },
        { skills: { contains: search } },
      ];
    }

    const nannies = await db.nannyProfile.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
            bio: true,
            isOnline: true,
          },
        },
      },
      orderBy: { rating: 'desc' },
    });

    // Fetch live online users from socket service
    let onlineUserIds = new Set<string>()
    try {
      const socketUrl = process.env.SOCKET_API_URL || 'http://localhost:3003'
      const res = await fetch(`${socketUrl}/health`, { signal: AbortSignal.timeout(3000) })
      if (res.ok) {
        const data = await res.json()
        onlineUserIds = new Set(data.onlineList || [])
      }
    } catch {
      // fallback to DB isOnline if socket unreachable
    }

    // Merge live online status
    const nanniesWithOnline = nannies.map((n) => ({
      ...n,
      user: n.user ? {
        ...n.user,
        isOnline: onlineUserIds.size > 0 ? onlineUserIds.has(n.user.id) : n.user.isOnline,
      } : n.user,
    }))

    return NextResponse.json({ nannies: nanniesWithOnline }, { headers });
  } catch (error: any) {
    console.error('List nannies error:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
