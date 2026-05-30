# 🚀 Premium Futuristic Developer Portfolio

A world-class, production-ready personal portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- 🌑 Dark futuristic theme with neon blue, purple & cyan gradients
- 🔮 Glassmorphism cards with glowing borders
- 🎬 Smooth scroll-triggered animations (Framer Motion)
- ⌨️ Typing animation in hero section
- 📊 Animated skill bars with category filtering
- 🗓️ Vertical timeline for experience
- 💼 Project showcase with hover effects
- 📬 Contact form with validation & state feedback
- 📱 Fully responsive (mobile, tablet, desktop)
- 🖱️ Custom cursor glow effect
- 📈 Scroll progress indicator
- 🌊 Floating animated background blobs
- ⚡ Section reveal animations on scroll
- 🔤 Loading screen animation

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 | React framework with App Router |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations & transitions |
| Lucide React | Icons |
| react-type-animation | Typing effect |
| react-intersection-observer | Scroll reveal |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles, utilities, animations
│   ├── layout.tsx         # Root layout with fonts & metadata
│   └── page.tsx           # Main page — assembles all sections
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     # Sticky navbar with mobile drawer
│   │   └── Footer.tsx     # Minimal footer
│   │
│   ├── sections/
│   │   ├── Hero.tsx       # Cinematic hero with typing animation
│   │   ├── Skills.tsx     # Interactive bento grid + skill bars
│   │   ├── Experience.tsx # Vertical timeline
│   │   ├── Projects.tsx   # Project showcase cards
│   │   ├── Education.tsx  # Education + certifications
│   │   └── Contact.tsx    # Contact form + info
│   │
│   └── ui/
│       ├── LoadingScreen.tsx   # Animated loading screen
│       ├── CursorGlow.tsx      # Mouse-following glow
│       ├── ScrollProgress.tsx  # Top scroll progress bar
│       ├── BackgroundBlobs.tsx # Floating gradient blobs
│       ├── SectionReveal.tsx   # Scroll-triggered reveal wrapper
│       └── SectionHeader.tsx   # Reusable section title
│
├── hooks/
│   └── useScrollReveal.ts  # Scroll + magnetic button hooks
│
└── lib/
    ├── data.ts             # ⭐ ALL YOUR CONTENT IS HERE
    └── utils.ts            # cn() utility
```

## ✏️ Customization

### 1. Update Your Info
Edit **`src/lib/data.ts`** — this is the single source of truth for all content:

```typescript
export const personalInfo = {
  name: "Your Name",
  email: "your@email.com",
  github: "https://github.com/yourusername",
  // ...
};
```

### 2. Add Your Photo
Replace the initials placeholder in `Hero.tsx` with Next.js `<Image>`:

```tsx
import Image from "next/image";

// Replace the initials div with:
<Image
  src="/images/profile.jpg"
  alt="Your Name"
  fill
  className="object-cover"
  priority
/>
```
Place your photo at `public/images/profile.jpg`.

### 3. Add Resume
Place your PDF at `public/resume.pdf`.

### 4. Project Thumbnails
Add project images to `public/images/project1.jpg`, etc., and update the image paths in `src/lib/data.ts`. Then update `Projects.tsx` to use `<Image>` instead of the gradient placeholder.

### 5. Colors
Color tokens are in `tailwind.config.ts` under `theme.extend.colors`:

```typescript
neon: {
  blue: "#00D4FF",    // Primary accent
  purple: "#8B5CF6",  // Secondary
  cyan: "#06FFC8",    // Tertiary
}
```

## 🌐 Deployment

### Vercel (Recommended — one click)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the .next folder or connect your GitHub repo
```

## 📄 License

MIT — free to use and customize for your personal portfolio.

---

**Built with ❤️ — Star this repo if you find it useful!**
