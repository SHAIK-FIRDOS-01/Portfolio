<div align="center">

# ⚡ Shaik Firdos — Portfolio

### AI-Native Full-Stack Engineer

A developer portfolio built with cutting-edge web technologies — featuring a **live interactive terminal**, **WebGL particle background**, **scroll-driven project showcases**, and a **serverless contact form** powered by Resend.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

---

## ✨ Highlights

| Feature | What Makes It Special |
|---|---|
| 🖥️ **Interactive Terminal** | A fully functional CLI embedded in the hero — type `help`, `whoami`, `skills`, or `sudo hire firdos` to explore |
| 🎆 **Confetti Easter Egg** | Running `sudo hire firdos` triggers a canvas-confetti explosion and auto-opens the contact form |
| 🌌 **WebGL Particle Background** | 5,000 particles rendered in a Three.js sphere with continuous rotation via `@react-three/fiber` |
| 📜 **Scroll-Synced Case Studies** | A sticky sidebar that highlights the active project with a spring-animated glowing indicator as you scroll |
| ✉️ **Serverless Contact Form** | Gmail-style compose modal powered by a Vercel Serverless Function + Resend API — no backend needed |
| 🧲 **Magnetic Buttons** | CTA buttons follow your cursor with elastic GSAP physics via a custom `useMagnetic` hook |
| ⌨️ **Typewriter Effect** | The hero headline cycles through roles with a character-by-character typing/deleting animation |
| 🎵 **Floating Vinyl Player** | A decorative spinning vinyl record component with circular SVG text and audio wave micro-animations |
| 🌊 **Data Stream Rain** | Ambient falling light streaks across the viewport for a cyberpunk-inspired atmosphere |
| 🧈 **Lenis Smooth Scroll** | Buttery-smooth scrolling across the entire page via the Lenis library |

---

## 🏗️ Architecture

```
Portfolio/
├── api/
│   └── send.ts                  # Vercel Serverless Function (Resend email API)
├── public/
│   ├── SHAIK_FIRDOS.pdf         # Downloadable resume
│   ├── avatar.png               # Profile avatar image
│   ├── favicon.svg              # Custom SVG favicon
│   └── icons.svg                # Icon sprite sheet
├── src/
│   ├── components/
│   │   ├── AvatarPlayer.tsx     # Floating avatar with spinning vinyl record
│   │   ├── ContactModal.tsx     # Gmail-style compose modal (Framer Motion)
│   │   ├── DataStream.tsx       # Ambient falling light-stream rain effect
│   │   ├── Footer.tsx           # Site footer with scroll-to-top
│   │   ├── GlassCard.tsx        # Reusable glassmorphism card component
│   │   ├── Navbar.tsx           # Fixed nav with blur backdrop + social links
│   │   ├── TerminalContent.tsx  # Interactive CLI with command parsing
│   │   ├── Typewriter.tsx       # Multi-word typing/deleting animation
│   │   └── WebGLBackground.tsx  # Three.js particle sphere (5000 points)
│   ├── hooks/
│   │   └── useMagnetic.ts       # GSAP-powered magnetic cursor-follow hook
│   ├── sections/
│   │   ├── Hero.tsx             # Landing section with terminal + CTAs
│   │   ├── About.tsx            # Bento grid bio + education cards
│   │   ├── Skills.tsx           # 6-category technical skills grid
│   │   ├── Experience.tsx       # Career timeline with tagged skills
│   │   └── Projects.tsx         # Scroll-synced sticky sidebar case studies
│   ├── App.tsx                  # Root layout with Lenis smooth scroll
│   ├── App.css                  # Legacy/utility styles
│   ├── index.css                # Design system tokens + Tailwind components
│   └── main.tsx                 # React 19 entry point
├── index.html                   # HTML shell with Google Fonts + Font Awesome 7
├── vite.config.ts               # Vite + React + Tailwind + custom API middleware
├── package.json
└── tsconfig.json
```

---

## 🛠️ Tech Stack

### Core
| Technology | Version | Purpose |
|---|---|---|
| **React** | 19 | UI framework with latest features |
| **TypeScript** | 6.0 | End-to-end type safety |
| **Vite** | 8 | Lightning-fast HMR and build tooling |
| **Tailwind CSS** | 4 | Utility-first styling with `@theme` design tokens |

### Animation & 3D
| Technology | Purpose |
|---|---|
| **Framer Motion** | Page transitions, scroll-triggered reveals, spring physics |
| **GSAP** | Elastic magnetic cursor-follow animations |
| **Three.js** + **@react-three/fiber** + **@react-three/drei** | WebGL particle system background |
| **canvas-confetti** | Confetti burst easter egg in the terminal |
| **Lenis** | GPU-accelerated smooth scrolling |

### Backend & Email
| Technology | Purpose |
|---|---|
| **Resend** | Transactional email API for the contact form |
| **Vercel Serverless Functions** | `/api/send` endpoint — zero-config deployment |
| **Custom Vite API Middleware** | Local dev server proxying for `/api/*` routes |

### Design & UX
| Technology | Purpose |
|---|---|
| **Google Fonts (Inter)** | Premium typographic system |
| **Font Awesome 7** | GitHub & LinkedIn social icons |
| **Lucide React** | Consistent, tree-shakeable icon library |
| **clsx + tailwind-merge** | Conditional and conflict-free class composition |

---

## 🚀 Special Features — Deep Dive

### 🖥️ Interactive Terminal (`TerminalContent.tsx`)
Not just a visual decoration — this is a **real command-line interface** built into the hero section. It simulates a boot sequence on page load and accepts typed commands:

| Command | Output |
|---|---|
| `help` | Lists all available commands |
| `whoami` | Displays developer identity |
| `skills` | Lists core tech stack |
| `projects` | Prompts user to scroll to projects |
| `sudo hire firdos` | 🎉 Fires confetti + auto-opens the contact modal |
| `clear` | Clears the terminal history |

### 🌌 WebGL Particle Sphere (`WebGLBackground.tsx`)
A full-viewport Three.js canvas renders **5,000 particles** distributed uniformly within a sphere using proper spherical coordinate math (`Math.cbrt` for uniform volume distribution). The sphere rotates continuously on two axes, creating a subtle, mesmerizing depth effect.

### 📜 Scroll-Synced Projects (`Projects.tsx`)
A **sticky sidebar** on desktop displays all project titles. As you scroll through the right-side project cards, Framer Motion's `useInView` hook detects which project is centered in the viewport and:
- Highlights the corresponding sidebar title (with `translate-x` shift)
- Animates a glowing white indicator bar with spring physics
- Clicking a sidebar title smooth-scrolls to the corresponding project

### 🧲 Magnetic Cursor Effect (`useMagnetic.ts`)
A custom React hook that uses GSAP's `quickTo` utility with elastic easing (`elastic.out(1, 0.3)`) to make buttons subtly follow the cursor on hover and spring back on leave. Applied to the hero CTAs.

### ✉️ Serverless Contact Form
The contact modal mimics a **Gmail compose window** with minimize/maximize/close controls. On submit, it POSTs to `/api/send` which invokes a Vercel Serverless Function using the **Resend SDK** to deliver formatted HTML emails directly to the developer's inbox.

### 🎵 Floating Vinyl Player (`AvatarPlayer.tsx`)
A decorative component featuring:
- A **continuously spinning vinyl record** with concentric groove lines
- **Circular SVG text** rendered along a path around the record label
- **Audio wave bars** animated with staggered Framer Motion transitions
- The entire component **floats** with a looping vertical animation

---

## 📦 Getting Started

### Prerequisites
- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/SHAIK-FIRDOS-01/Portfolio.git
cd Portfolio

# Install dependencies
npm install
```

### Environment Setup

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=your_resend_api_key_here
```

> **Note:** The contact form requires a [Resend](https://resend.com/) API key. Sign up for free to get one.

### Development

```bash
npm run dev
```

The dev server starts at `http://localhost:5173` with hot module replacement. The custom Vite middleware automatically routes `/api/*` requests to the serverless functions locally.

### Production Build

```bash
npm run build
npm run preview
```

---

## 🌐 Deployment

This project is optimized for **Vercel**:

1. Push the repository to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Add the `RESEND_API_KEY` environment variable in Vercel's dashboard
4. Deploy — Vercel auto-detects Vite and the `/api` serverless functions

---

## 📊 Design System

The portfolio uses a carefully curated **monochromatic dark theme** with a blue accent, defined as Tailwind CSS v4 `@theme` tokens:

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#ffffff` | Headings, primary text |
| `--color-secondary` | `#a1a1aa` | Body text, muted labels |
| `--color-background` | `#030303` | Page background |
| `--color-panel` | `#0a0a0a` | Card/panel backgrounds |
| `--color-border` | `#27272a` | Borders, dividers |
| `--color-accent` | `#3b82f6` | CTAs, highlights, links |

Custom component classes (`spatial-card`, `spatial-btn`, `nav-blur`) are defined in the `@layer components` block for reusability.

---

## 📬 Contact

- **GitHub:** [SHAIK-FIRDOS-01](https://github.com/SHAIK-FIRDOS-01)
- **LinkedIn:** [shaikfirdos01](https://www.linkedin.com/in/shaikfirdos01)

Or just type `sudo hire firdos` in the terminal 😉

---

<div align="center">

**Built with ❤️ by Shaik Firdos**

</div>
