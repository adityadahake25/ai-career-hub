# AI Career Hub 🚀

A full-stack job listing and application management web application built using **Next.js, TypeScript, Tailwind CSS, Prisma, and PostgreSQL**.

AI Career Hub provides a platform to explore job opportunities, view job details, submit applications, and manage submitted applications through a database-backed web interface.

> **Note:** The current implementation focuses on job listings and application management. AI-powered features are not yet implemented.

---

## 📌 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Application Pages](#application-pages)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Security Considerations](#security-considerations)
- [Future Improvements](#future-improvements)
- [Author](#author)

---

## 📖 Overview

AI Career Hub is a web application designed to simplify the process of browsing job opportunities and submitting job applications.

The application uses Next.js App Router for routing, React for the user interface, and Prisma ORM to interact with a PostgreSQL database.

Job information and submitted applications are stored in related database tables, allowing application records to be displayed alongside their corresponding job details.

## ✨ Features

- **Job Listings:** Display job opportunities with details such as title, company, location, salary, experience, and description.
- **Job Details:** View the detailed information of an individual job.
- **Job Applications:** Submit applications with applicant name and email.
- **Application Management:** View submitted applications with associated job information.
- **Application Search:** Filter application records by applicant name.
- **Delete Applications:** Delete an application after confirmation.
- **Light and Dark Themes:** Switch between light and dark appearance.
- **Responsive UI:** Built with Tailwind CSS utility classes.
- **Database Integration:** Persist job and application data using PostgreSQL and Prisma.
- **API Routes:** Retrieve all jobs or a specific job through Next.js Route Handlers.
- **Server Actions:** Handle application submission and deletion.
- **Database Migrations:** Maintain database schema changes through Prisma migrations.
- **Sample Data:** Populate the database with sample job records using a seed script.
- **Error Handling UI:** Includes loading, error, and not-found pages.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | Full-stack React framework and App Router |
| React 19 | Component-based user interface |
| TypeScript | Type safety and maintainable code |
| Tailwind CSS 4 | Styling and responsive UI |
| PostgreSQL | Relational database |
| Prisma ORM 7 | Database access and schema management |
| Prisma PostgreSQL Adapter | Connect Prisma to PostgreSQL |
| `pg` | PostgreSQL driver |
| `next-themes` | Theme switching |
| ESLint 9 | Code linting |
| npm | Package management |

---

## 📄 Application Pages

| Route | Description |
|---|---|
| `/` | Home page displaying job cards |
| `/jobs` | Jobs route; currently a placeholder page |
| `/jobs/[id]` | Details of an individual job |
| `/jobs/[id]/apply` | Application form for a selected job |
| `/application-success` | Confirmation after successful application submission |
| `/applications` | Displays submitted applications, name search, and delete action |
| `/dashboard` | Dashboard route; currently a placeholder page |
| `/about` | About the project |
| `/contact` | Contact information |

---

## 📂 Project Structure

```text
ai-career-hub/
├── prisma/
│   ├── migrations/
│   │   ├── 20260604093109_init/
│   │   ├── 20260610132152_add_application_table/
│   │   ├── 20260614091156_add_relations/
│   │   └── migration_lock.toml
│   ├── schema.prisma
│   └── seed.ts
│
├── public/
│   └── Static assets
│
├── src/
│   ├── actions/
│   │   ├── application-actions.ts
│   │   └── delete-application.ts
│   │
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── api/
│   │   │   ├── jobs/
│   │   │   │   └── route.ts
│   │   │   └── job/
│   │   │       └── [id]/
│   │   │           └── route.ts
│   │   ├── application-success/
│   │   │   └── page.tsx
│   │   ├── applications/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── jobs/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       ├── page.tsx
│   │   │       └── apply/
│   │   │           └── page.tsx
│   │   ├── error.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── ApplicationTable.tsx
│   │   ├── Counter.tsx
│   │   ├── DeleteButton.tsx
│   │   ├── JobCard.tsx
│   │   ├── Navbar.tsx
│   │   └── ThemeToggle.tsx
│   │
│   ├── lib/
│   │   └── prisma.ts
│   ├── providers/
│   │   └── ThemeProvider.tsx
│   └── types/
│       └── job.ts
│
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── prisma.config.ts
├── tsconfig.json
└── README.md

---

## 🚧 Project Status

Currently in development, with new features and improvements being added continuously.
