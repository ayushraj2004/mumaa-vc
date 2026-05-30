# mumaa-vc

> Connect parents with trusted childcare nannies for instant and scheduled video calls.

![GitHub stars](https://img.shields.io/github/stars/ayushraj2004/mumaa-vc?style=for-the-badge&logo=github) ![GitHub forks](https://img.shields.io/github/forks/ayushraj2004/mumaa-vc?style=for-the-badge&logo=github) ![GitHub issues](https://img.shields.io/github/issues/ayushraj2004/mumaa-vc?style=for-the-badge&logo=github) ![Last commit](https://img.shields.io/github/last-commit/ayushraj2004/mumaa-vc?style=for-the-badge&logo=github) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

## 📑 Table of Contents

- [Description](#description)
- [Key Features](#key-features)
- [Use Cases](#use-cases)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Environment Variables](#environment-variables)
- [Key Dependencies](#key-dependencies)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Development Setup](#development-setup)
- [Deployment](#deployment)
- [Contributing](#contributing)

## 📝 Description

Mumaa is a full-stack web application designed to connect parents with experienced, verified nannies for instant and scheduled video consultations. The platform bridges the gap between childcare expertise and at-home convenience, allowing parents to find available nannies, coordinate virtual sessions, and obtain professional childcare guidance in real-time.

## ✨ Key Features

- **📹 Real-time Video Consultations** — Enables instant and scheduled video calls using Socket.IO alongside WebRTC TURN server credentials for stable peer-to-peer connections.
- **🔐 Role-Based Authentication** — Secures user access with NextAuth, providing dedicated login, registration, and password recovery forms for parents and nannies.
- **💳 Stripe Payment Processing** — Manages subscriptions and billing workflows through Stripe payment configurations and secure webhook verification.
- **👥 Interactive Search & Dashboards** — Provides specialized dashboards such as ParentDashboard and FindNannies, built with TanStack Table and custom UI components.
- **🔔 Web Push and Email Alerts** — Delivers instant updates to users utilizing VAPID-based push notifications and transactional SMTP emails via Nodemailer.
- **🗄️ Robust Database Workflows** — Maintains data integrity using Prisma ORM with built-in scripts for migrations, seeding, generating, and resetting the schema.

## 🎯 Use Cases

- Deploying a specialized consultation platform matching parents with verified childcare experts for video-based guidance.
- Establishing a WebRTC-powered marketplace that requires structured billing, subscription models, and secure user management.
- Developing agency portals where independent nannies or babysitters can handle bookings and client calls online.

## 🛠️ Tech Stack

- 🐳 **Docker**
- ▲ **Next.js**
- 🔷 **Prisma**
- 🌬️ **Tailwind CSS**
- 📘 **TypeScript**

**Notable libraries:** Framer Motion, NextAuth, Nodemailer, Radix UI, React Hook Form, Socket.IO, Stripe, TanStack Query, TanStack Table, Zod, Zustand, i18n

## ⚡ Quick Start

```bash

# 1. Clone the repository
git clone https://github.com/ayushraj2004/mumaa-vc.git

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env   # then fill in the values

# 4. Start the dev server
npm run dev
```

## 🔑 Environment Variables

The following environment variables are required (see `.env.example`):

```bash
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
JWT_SECRET=
NEXT_PUBLIC_SOCKET_URL=
NEXT_PUBLIC_TURN_URL=
NEXT_PUBLIC_TURN_USERNAME=
NEXT_PUBLIC_TURN_CREDENTIAL=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
NEXT_PUBLIC_VAPID_KEY=
VAPID_PRIVATE_KEY=
VAPID_EMAIL=
```

## 📦 Key Dependencies

```
@dnd-kit/core: ^6.3.1
@dnd-kit/sortable: ^10.0.0
@dnd-kit/utilities: ^3.2.2
@hookform/resolvers: ^5.1.1
@mdxeditor/editor: ^3.39.1
@prisma/client: 6.11.1
@radix-ui/react-accordion: ^1.2.11
@radix-ui/react-alert-dialog: ^1.1.14
@radix-ui/react-aspect-ratio: ^1.1.7
@radix-ui/react-avatar: ^1.1.10
@radix-ui/react-checkbox: ^1.3.2
@radix-ui/react-collapsible: ^1.1.11
@radix-ui/react-context-menu: ^2.2.15
@radix-ui/react-dialog: ^1.1.14
@radix-ui/react-dropdown-menu: ^2.1.15
```

## 🚀 Available Scripts

- **dev** — `npm run dev`
- **build** — `npm run build`
- **start** — `npm run start`
- **lint** — `npm run lint`
- **db:push** — `npm run db:push`
- **db:generate** — `npm run db:generate`
- **db:migrate** — `npm run db:migrate`
- **db:migrate:deploy** — `npm run db:migrate:deploy`
- **db:seed** — `npm run db:seed`
- **db:reset** — `npm run db:reset`

## 🌐 API Endpoints

Detected endpoints (best-effort scan):

```
/api/admin/analytics
/api/admin/calls
/api/admin/nanny-earnings/[id]
/api/admin/payments
/api/admin/stats
/api/admin/users/[id]
/api/admin/users/[id]/status
/api/admin/users
/api/auth/admin-login
/api/auth/forgot-password
/api/auth/login
/api/auth/me
/api/auth/password
/api/auth/profile
/api/auth/reset-password
/api/auth/signup
/api/calls/[id]/end
/api/calls/[id]/review
/api/calls/[id]
/api/calls/[id]/status
```

## 📁 Project Structure

```
.
├── .env.example
├── Dockerfile
├── bun.lock
├── components.json
├── docker-entrypoint.sh
├── eslint.config.mjs
├── mini-services
│   └── socket-service
│       ├── Dockerfile
│       ├── bun.lock
│       ├── index.ts
│       └── package.json
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── prisma
│   ├── schema.prisma
│   └── seed.ts
├── public
│   ├── hero-mumaa.png
│   ├── logo.svg
│   ├── onboarding-complete.png
│   ├── onboarding-nanny.png
│   ├── onboarding-parent.png
│   ├── robots.txt
│   └── sw.js
├── render.yaml
├── src
│   ├── app
│   │   ├── api
│   │   │   ├── admin
│   │   │   │   ├── analytics
│   │   │   │   │   └── ...
│   │   │   │   ├── calls
│   │   │   │   │   └── ...
│   │   │   │   ├── nanny-earnings
│   │   │   │   │   └── ...
│   │   │   │   ├── payments
│   │   │   │   │   └── ...
│   │   │   │   ├── stats
│   │   │   │   │   └── ...
│   │   │   │   └── users
│   │   │   │       └── ...
│   │   │   ├── auth
│   │   │   │   ├── admin-login
│   │   │   │   │   └── ...
│   │   │   │   ├── forgot-password
│   │   │   │   │   └── ...
│   │   │   │   ├── login
│   │   │   │   │   └── ...
│   │   │   │   ├── me
│   │   │   │   │   └── ...
│   │   │   │   ├── password
│   │   │   │   │   └── ...
│   │   │   │   ├── profile
│   │   │   │   │   └── ...
│   │   │   │   ├── reset-password
│   │   │   │   │   └── ...
│   │   │   │   └── signup
│   │   │   │       └── ...
│   │   │   ├── calls
│   │   │   │   ├── [id]
│   │   │   │   │   └── ...
│   │   │   │   ├── instant
│   │   │   │   │   └── ...
│   │   │   │   ├── route.ts
│   │   │   │   └── schedule
│   │   │   │       └── ...
│   │   │   ├── config
│   │   │   │   └── route.ts
│   │   │   ├── email
│   │   │   │   ├── send
│   │   │   │   │   └── ...
│   │   │   │   ├── send-otp
│   │   │   │   │   └── ...
│   │   │   │   └── verify-otp
│   │   │   │       └── ...
│   │   │   ├── nannies
│   │   │   │   ├── [id]
│   │   │   │   │   └── ...
│   │   │   │   ├── availability
│   │   │   │   │   └── ...
│   │   │   │   ├── bank-details
│   │   │   │   │   └── ...
│   │   │   │   ├── profile
│   │   │   │   │   └── ...
│   │   │   │   └── route.ts
│   │   │   ├── nanny-apply
│   │   │   │   ├── [id]
│   │   │   │   │   └── ...
│   │   │   │   └── route.ts
│   │   │   ├── nanny-setup
│   │   │   │   └── route.ts
│   │   │   ├── notifications
│   │   │   │   ├── [id]
│   │   │   │   │   └── ...
│   │   │   │   ├── read-all
│   │   │   │   │   └── ...
│   │   │   │   └── route.ts
│   │   │   ├── payments
│   │   │   │   ├── checkout
│   │   │   │   │   └── ...
│   │   │   │   ├── portal
│   │   │   │   │   └── ...
│   │   │   │   ├── success
│   │   │   │   │   └── ...
│   │   │   │   ├── verify
│   │   │   │   │   └── ...
│   │   │   │   └── webhook
│   │   │   │       └── ...
│   │   │   ├── push
│   │   │   │   ├── subscribe
│   │   │   │   │   └── ...
│   │   │   │   ├── unsubscribe
│   │   │   │   │   └── ...
│   │   │   │   └── vapid-key
│   │   │   │       └── ...
│   │   │   ├── seed
│   │   │   │   └── route.ts
│   │   │   ├── subscriptions
│   │   │   │   ├── cancel
│   │   │   │   │   └── ...
│   │   │   │   ├── route.ts
│   │   │   │   └── upgrade
│   │   │   │       └── ...
│   │   │   └── upload
│   │   │       ├── delete
│   │   │       │   └── ...
│   │   │       └── route.ts
│   │   ├── global-error.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── auth
│   │   │   ├── ForgotPasswordForm.tsx
│   │   │   ├── LoginForm.tsx
│   │   │   └── SignupForm.tsx
│   │   ├── common
│   │   │   ├── ApplyAsNanny.tsx
│   │   │   ├── ConfirmDialog.tsx
│   │   │   ├── EmptyState.tsx
│   │   │   ├── LegalPages.tsx
│   │   │   ├── LoadingSkeleton.tsx
│   │   │   ├── NannySetup.tsx
│   │   │   └── StarRating.tsx
│   │   ├── dashboard
│   │   │   ├── DashboardLayout.tsx
│   │   │   ├── NannyProfileDialog.tsx
│   │   │   ├── NotificationPanel.tsx
│   │   │   ├── ReviewDialog.tsx
│   │   │   ├── ScheduleDialog.tsx
│   │   │   ├── Settings.tsx
│   │   │   ├── admin
│   │   │   │   ├── AdminAnalytics.tsx
│   │   │   │   ├── AdminApplications.tsx
│   │   │   │   ├── AdminCalls.tsx
│   │   │   │   ├── AdminDashboard.tsx
│   │   │   │   ├── AdminPayments.tsx
│   │   │   │   └── AdminUsers.tsx
│   │   │   ├── nanny
│   │   │   │   ├── NannyBankDetails.tsx
│   │   │   │   ├── NannyCalls.tsx
│   │   │   │   ├── NannyDashboard.tsx
│   │   │   │   └── NannyEarnings.tsx
│   │   │   └── parent
│   │   │       ├── FindNannies.tsx
│   │   │       ├── MyCalls.tsx
│   │   │       ├── ParentDashboard.tsx
│   │   │       ├── ScheduleCall.tsx
│   │   │       └── SubscriptionPage.tsx
│   │   ├── landing
│   │   │   ├── CTA.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── LandingPage.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Pricing.tsx
│   │   │   └── Testimonials.tsx
│   │   ├── onboarding
│   │   │   └── OnboardingFlow.tsx
│   │   ├── payment
│   │   │   └── CheckoutDialog.tsx
│   │   ├── pricing
│   │   │   └── PricingPage.tsx
│   │   ├── ui
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── aspect-ratio.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── button.tsx
│   │   │   ├── calendar.tsx
│   │   │   ├── card.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── chart.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── collapsible.tsx
│   │   │   ├── command.tsx
│   │   │   ├── context-menu.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── drawer.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── form.tsx
│   │   │   ├── hover-card.tsx
│   │   │   ├── input-otp.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── menubar.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── pagination.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── radio-group.tsx
│   │   │   ├── resizable.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   ├── select.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── slider.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── switch.tsx
│   │   │   ├── table.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── toaster.tsx
│   │   │   ├── toggle-group.tsx
│   │   │   ├── toggle.tsx
│   │   │   └── tooltip.tsx
│   │   └── videocall
│   │       ├── CallTimer.tsx
│   │       ├── ChatPanel.tsx
│   │       ├── IncomingCallDialog.tsx
│   │       ├── JitsiCall.tsx
│   │       ├── VideoCallScreen.tsx
│   │       ├── VideoPlaceholder.tsx
│   │       └── WebRTCCall.tsx
│   ├── hooks
│   │   ├── use-mobile.ts
│   │   └── use-toast.ts
│   ├── lib
│   │   ├── api.ts
│   │   ├── constants.ts
│   │   ├── db.ts
│   │   ├── email.ts
│   │   ├── export-csv.ts
│   │   ├── jitsi.ts
│   │   ├── push-client.ts
│   │   ├── push.ts
│   │   ├── rate-limit.ts
│   │   ├── ringtone.ts
│   │   ├── security-headers.ts
│   │   ├── socket-emit.ts
│   │   ├── storage.ts
│   │   ├── stripe.ts
│   │   ├── utils.ts
│   │   └── webrtc.ts
│   ├── stores
│   │   ├── app-store.ts
│   │   ├── auth-store.ts
│   │   ├── notification-store.ts
│   │   └── socket-store.ts
│   └── types
│       └── index.ts
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

## 🛠️ Development Setup

### Node.js / JavaScript
1. Install Node.js (v18+ recommended)
2. Install dependencies: `npm install` (or `yarn` / `pnpm install` / `bun install`)
3. Start the dev server: see the **Quick Start** above

### Docker
1. `docker build -t my-app .`
2. `docker run -p 3000:3000 my-app`

## 🚢 Deployment

### Docker
```bash
docker build -t mumaa-vc .
docker run -p 3000:3000 mumaa-vc
```

### Vercel

This project is configured for [Vercel](https://vercel.com). Push to the connected branch or run `vercel` locally.

## 👥 Contributing

Contributions are welcome! Here's the standard flow:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/ayushraj2004/mumaa-vc.git`
3. **Branch**: `git checkout -b feature/your-feature`
4. **Commit**: `git commit -m 'feat: add some feature'`
5. **Push**: `git push origin feature/your-feature`
6. **Open** a pull request

Please follow the existing code style and include tests for new behavior where applicable.

---
*This README was generated with ❤️ by [ReadmeBuddy](https://readmebuddy.com)*
