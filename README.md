# 🌐 Portfolio — dndmein-rgb

A modern, responsive personal portfolio website built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**. Features smooth scroll animations, a contact form powered by EmailJS, and a clean component-based architecture.

---

## ✨ Features

- Smooth scroll animations with **Locomotive Scroll** and **GSAP**
- Animated UI transitions via **Framer Motion**
- Fully responsive — mobile, tablet, and desktop
- Contact form with **EmailJS** (no backend needed)
- Fast dev and build tooling with **Vite 7**
- Icon library via **React Icons**
- Client-side routing with **React Router DOM v7**

---

## 🛠️ Tech Stack

| Category       | Technology                        |
|----------------|-----------------------------------|
| Framework      | React 19                          |
| Build Tool     | Vite 7                            |
| Styling        | Tailwind CSS v4                   |
| Animations     | Framer Motion, GSAP               |
| Scroll         | Locomotive Scroll                 |
| Contact Form   | EmailJS (`@emailjs/browser`)      |
| Routing        | React Router DOM v7               |
| Icons          | React Icons v5                    |
| Linting        | ESLint 9                          |

---

## 📁 Project Structure

```
Portfolio/
├── public/             # Static assets (favicon, images, etc.)
├── src/                # Source code
│   ├── components/     # Reusable React components
│   ├── pages/          # Page-level components
│   ├── assets/         # Images, fonts, and other assets
│   └── main.jsx        # App entry point
├── index.html          # HTML shell
├── vite.config.js      # Vite configuration
├── eslint.config.js    # ESLint configuration
└── package.json        # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/dndmein-rgb/Portfolio.git
cd Portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 Available Scripts

| Script            | Description                              |
|-------------------|------------------------------------------|
| `npm run dev`     | Start the local development server       |
| `npm run build`   | Build for production (outputs to `dist/`)|
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Run ESLint across the project            |

---

## 🔧 Customization

All sections are component-based and commented for easy editing:

- **Personal info & bio** — update the relevant component in `src/components/` or `src/pages/`
- **Projects** — edit the projects data/component with your own work and links
- **Colors & fonts** — modify `src/index.css` or your Tailwind config
- **Animations** — each animated element uses Framer Motion or GSAP; comments in code explain the options
- **Contact form** — set your EmailJS `serviceId`, `templateId`, and `publicKey` in the contact component

---

## 🌍 Deployment

### Vercel (Recommended)

1. Push your repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import repo
3. Vercel auto-detects Vite + React — click **Deploy**

### Netlify

1. Go to [netlify.com](https://netlify.com) → **Add New Site** → Import from Git
2. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Click **Deploy Site**

---



---

