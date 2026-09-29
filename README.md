# Hudayriyat Island – Luxury Real Estate Web Application

A modern, high-performance, and visually stunning web application for **Hudayriyat Island** by **Modon Properties** in Abu Dhabi, UAE. Built with **Next.js 15**, **TypeScript**, and **Vanilla CSS**, featuring comprehensive SEO optimizations, dynamic community showcases, interactive maps, brochure downloads, lead CRM integration, and responsive design.

---

## 🌟 Key Features

- **Luxury Architectural Aesthetic**: Sleek dark/gold palette, glassmorphism, responsive navigation headers, and fluid micro-animations.
- **Dedicated Community Landing Pages**:
  - `Al Naseem Villas`
  - `Bashayer Residences`
  - `Bashayer Villas`
  - `Hudayriyat Golf Estates`
  - `Masyaf Plots`
  - `Nawayef East Hills`
  - `Nawayef Park Views`
  - `Nawayef Village`
  - `Wadeem Gardens`
  - `Wadeem Plots`
- **Dynamic Project Galleries**: Interactive high-resolution photo galleries with category filtering (Interior, Exterior, Community) and lightbox carousel controls.
- **SEO & OpenGraph Metadata Suite**: Full OpenGraph tags (`og:title`, `og:description`, `og:url`), canonical URLs, Structured JSON-LD Data schemas, XML sitemap generation, and robots directives.
- **Lead Capture & CRM Webhook Integration**: Automated lead transmission with form validation, instant phone input formatting, and thank-you confirmation redirection.
- **Interactive Location Maps**: Embedded satellite location maps with collapsible regional distance accordions for nearby clinics, schools, restaurants, and shopping centers.
- **Brochure & Floor Plan Modals**: Instant PDF brochure download requests and interactive unit floor plan showcases.
- **Responsive Navigation Suite**: Unified header & mobile navigation drawer linking directly to project pages, floor plans, master plans, payment plans, FAQs, and a dedicated `/contact-us` page.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS Modules with custom design tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Phone Formatting**: `react-international-phone`
- **Deployment & Tooling**: Node.js, Vercel / PM2 configuration

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/bisma794/hudayriyat-island.git

# Navigate to project directory
cd hudayriyat-island

# Install dependencies
npm install
```

### Running Locally

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Building for Production

```bash
# Run TypeScript typecheck
npx tsc --noEmit

# Build production bundle
npm run build

# Start production server
npm run start
```

---

## 📄 Page Architecture & Routes

| Route | Description |
| :--- | :--- |
| `/` | Homepage showcasing Hudayriyat Island overview, communities grid, investment potential, and FAQs. |
| `/about-us` | Company background and Abu Dhabi luxury real estate advisor profiles. |
| `/al-naseem-villas` | Al Naseem Villas luxury waterfront community landing page. |
| `/bashayer-residences` | Bashayer Residences apartments, townhomes, and penthouses. |
| `/bashayer-villas` | Bashayer Villas standalone luxury homes. |
| `/hudayriyat-golf-estates` | Golf Estates waterfront & golf course villa community. |
| `/masyaf-plots` | Masyaf freehold residential villa plots by Modon. |
| `/nawayef-east-hills` | Nawayef East Hills elevated coastal residences. |
| `/nawayef-park-views` | Nawayef Park Views central parkland homes. |
| `/nawayef-village` | Nawayef Village master-planned coastal community. |
| `/wadeem-gardens` | Wadeem Gardens premium 4–6 bedroom villas. |
| `/wadeem-plots` | Wadeem Plots freehold residential villa plots. |
| `/contact-us` | Dedicated contact page with direct communication channels and lead form. |
| `/privacy-policy` | Legal privacy policy guidelines. |
| `/terms-and-conditions` | Web platform terms of use. |
| `/thank-you` | Lead submission confirmation page. |

---

## 🔒 License

Developed for Hudayriyat Island Abu Dhabi. All rights reserved.
