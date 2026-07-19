# Dev Events

[![GitHub stars](https://img.shields.io/github/stars/MUHAMMADSabbirHossain/javascript-mastery?style=social)](https://github.com/MUHAMMADSabbirHossain/javascript-mastery)

[![Application Live Demo](https://coruscating-bienenstitch-df3a93.netlify.app/_next/image?url=%2Ficons%2Flogo.png&w=32&q=75)](https://coruscating-bienenstitch-df3a93.netlify.app/) [Application Live Demo](https://coruscating-bienenstitch-df3a93.netlify.app/)

## 📘 Overview

This repository contains advanced Next.js learning projects. It includes:

- `nextjs-crash-course`: a full event hub experience with server actions, MongoDB, Cloudinary image upload, and PostHog analytics.

The goal is to showcase modern Next.js 16 patterns, full-stack workflows, and clean UI/UX design.

## 📋 Table of Contents

- Overview
- ✨ Features
- 🚀 Getting Started
- 🏗️ Architecture
- 💻 Tech Stack
- 📁 Project Structure
- 🔌 API Documentation
- 🗄️ Database Schema
- 🐛 Major Issues Solved
- 🔄 API Data Flow
- 🎨 UI/UX Improvements
- 🎯 Custom Styling
- 📱 Responsive Design
- 📜 Available Scripts
- 🤝 Contributing
- 📄 License

## ✨ Features

- Event listing and event detail pages
- Event booking form with server actions
- MongoDB + Mongoose event and booking models
- Cloudinary image uploads for event assets
- PostHog analytics instrumentation
- Next.js App Router with nested layouts
- Custom Tailwind CSS theme and visual effects
- Event recommendations based on shared tags

## 🚀 Getting Started

### 1. Clone this repository

```bash
git clone https://github.com/MUHAMMADSabbirHossain/javascript-mastery
cd javascript-mastery
```

### 2. Run the crash course app

```bash
cd adv-nextjs-dev-course/nextjs-16-full-course/nextjs-crash-course
npm install
```

### 3. Required environment variables

Create a `.env.local` file and add:

```bash
MONGODB_URI=your-mongodb-connection-string
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN=your-posthog-project-token
NEXT_PUBLIC_POSTHOG_HOST=https://eu.posthog.com
CLOUDINARY_URL=your-cloudinary-url
```

### 4. Start the app

```bash
npm run dev
```

### 5. Run the demo app

```bash
cd ../nextjs-demo
npm install
npm run dev
```

## 🏗️ Architecture

The repository is split into two sample apps:

- `nextjs-crash-course`: a feature-rich event hub and booking app

### Key architecture patterns

- Next.js App Router
- Server components for data fetching
- Client components for forms and analytics
- API routes for event CRUD operations
- Shared Mongoose models and database connection caching
- Tailwind CSS with custom utility classes

## 💻 Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- MongoDB + Mongoose
- Cloudinary
- PostHog analytics
- Shadcn / Base UI / Lucide icons
- `class-variance-authority`, `clsx`, `tailwind-merge`

## 📁 Project Structure

```text
adv-nextjs-dev-course/
  nextjs-16-full-course/
    nextjs-crash-course/
      app/
        api/events/route.ts
        api/events/[slug]/route.ts
        globals.css
        layout.tsx
        page.tsx
      components/
        BookEvent.tsx
        EventCard.tsx
        EventDetails.tsx
        ExploreBtn.tsx
        LightRays.tsx
        Navbar.tsx
      database/
        booking.model.ts
        event.model.ts
        index.ts
      lib/
        actions/
          booking.actions.ts
          event.actions.ts
        mongodb.ts
        posthog-server.ts
        utils.ts
      public/
        icons/
        images/
```

## 🔌 API Documentation

### `GET /api/events`

Retrieve all events.

Response:

```json
{
  "message": "Events fetched successfully",
  "events": [
    /* event objects */
  ]
}
```

### `POST /api/events`

Create a new event with image upload.
Accepts `multipart/form-data`:

- `title`
- `description`
- `overview`
- `location`
- `venue`
- `date`
- `time`
- `mode`
- `audience`
- `organizer`
- `tags` (JSON string)
- `agenda` (JSON string)
- `image` (file)

Response:

```json
{
  "message": "Event created successfully",
  "event": {
    /* created event */
  }
}
```

### `GET /api/events/[slug]`

Fetch event details by slug.

Response:

```json
{
  "message": "Event fetched successfully",
  "event": {
    /* single event object */
  }
}
```

## 🗄️ Database Schema

### Event model

- `title` (string)
- `slug` (string, unique)
- `description` (string)
- `overview` (string)
- `image` (string)
- `venue` (string)
- `location` (string)
- `date` (string)
- `time` (string)
- `mode` (`online` | `offline` | `hybrid`)
- `audience` (string)
- `agenda` (string[])
- `organizer` (string)
- `tags` (string[])
- `createdAt`, `updatedAt`

### Booking model

- `eventId` (ObjectId ref `Event`)
- `email` (string)
- `createdAt`, `updatedAt`
- unique index on `eventId + email`

## 🐛 Major Issues Solved

- Built event listing and booking flow using server actions
- Configured Cloudinary image upload from a Next.js API route
- Added analytics capture for CTA clicks and booking events
- Implemented Mongoose schema normalization and unique indexing
- Cached MongoDB connections to avoid duplicate connections during development
- Managed remote image loading with Next.js remotePatterns

## 🔄 API Data Flow

1. Homepage fetches `GET /api/events`
2. Event cards render with images, title, date, and location
3. Clicking a card leads to `/events/[slug]`
4. Event details page fetches `GET /api/events/[slug]`
5. Booking form submits through a server action to save a booking
6. Analytics fire for button clicks and bookings

## 🎨 UI/UX Improvements

- Interactive event cards with icons for calendar, clock, location
- LightRays background animation for visual depth
- Sticky glassmorphism navbar
- Clear event overview, agenda, and organizer sections
- Booking side-panel to highlight user actions

## 🎯 Custom Styling

- Tailwind CSS theme variables
- Custom utilities: `glass`, `text-gradient`, `card-shadow`
- Dark palette with accent colors and responsive spacing
- Custom font loading using `next/font/google`

## 📱 Responsive Design

- Mobile-first grid layout for event cards
- Flexible event detail layout with `lg:flex-row`
- Form and CTA styling that scales across screen sizes
- Sticky header and fluid container widths

## 📜 Available Scripts

Run from each app folder:

- `npm install`
- `npm run dev`
- `npm run build`
- `npm start`
- `npm run lint`

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch
3. Open a PR with a clear description
4. Add an `.env.example` file if you add new environment variables

## 📄 License

No license is currently specified in this repository. Add a `LICENSE` file to define reuse terms.

## 🙏 Acknowledgments

Thanks to [nextjs-crash-course](https://github.com/bradtraversy/nextjs-crash-course) for the original course.
