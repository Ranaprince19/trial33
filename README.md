<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# 🏥 AuraCare — Next-Gen Hospital Management Website

> A modern, dark-themed hospital landing page built with pure HTML, CSS, and JavaScript.

---

## 📋 Overview

**AuraCare** is a sleek, single-page hospital management website designed to showcase premium healthcare services. It features a fully responsive layout, smooth animations, an appointment booking form, doctor profiles, and a glassmorphism-inspired UI aesthetic.

---

## 🗂️ Project Structure

```
trial1/
├── index.html       # Main HTML — page structure & content
├── style.css        # Styling — dark theme, glassmorphism, responsive grid
├── main.js          # JavaScript — scroll effects, animations, form handling
└── assets/
    ├── hero.png     # Hero section background image
    ├── doc1.png     # Doctor profile photo (Dr. James Wilson / Dr. Michael Ross)
    └── doc2.png     # Doctor profile photo (Dr. Sarah Chen)
```

---

## ✨ Features

- **Sticky Navigation** — Navbar becomes frosted glass on scroll
- **Hero Section** — Full-viewport header with CTA buttons and a hero image
- **Services Section** — Three specialty cards: Cardiology, Neurology, Diagnostics
- **Appointment Booking Form** — Collects name, email, and department; shows a confirmation alert
- **Doctors Section** — Profile cards for three medical specialists
- **Scroll Animations** — Elements fade in using the Intersection Observer API
- **Smooth Scrolling** — Anchor links scroll smoothly to their target sections
- **Fully Responsive** — Adapts from 3-column desktop to single-column mobile layout

---

## 🎨 Tech Stack

| Layer      | Technology                                      |
|------------|-------------------------------------------------|
| Markup     | HTML5                                           |
| Styling    | CSS3 (Custom Properties, Grid, Flexbox, Media Queries) |
| Scripting  | Vanilla JavaScript (ES6+)                       |
| Icons      | [Lucide Icons](https://lucide.dev/) via CDN     |
| Fonts      | [Outfit](https://fonts.google.com/specimen/Outfit) via Google Fonts |

---

## 🎨 Design Tokens

| Variable         | Value                        | Usage                   |
|------------------|------------------------------|-------------------------|
| `--primary`      | `#007AFF`                    | Buttons, accents, icons |
| `--secondary`    | `#00D2FF`                    | Gradient end color      |
| `--bg`           | `#030712`                    | Page background         |
| `--bg-alt`       | `#0F172A`                    | Appointment section     |
| `--text-muted`   | `#94A3B8`                    | Subtext, labels         |

---

## 📄 Page Sections

| Section        | ID              | Description                              |
|----------------|-----------------|------------------------------------------|
| Navigation     | `#navbar`       | Fixed top bar with logo and nav links    |
| Hero           | `#home`         | Full-screen intro with CTA               |
| Services       | `#services`     | 3 specialty service cards                |
| Appointment    | `#appointment`  | Booking form with contact info           |
| Doctors        | `#doctors`      | Team cards with photo and specialty      |
| Footer         | —               | Copyright info and logo                  |

---

## 🚀 Getting Started

No build tools or dependencies required. Just open the project in a browser:

```bash
# Clone the repository
git clone https://github.com/Ranaprince19/trial33.git
cd trial33

# Open in browser
open index.html
# or on Linux:
xdg-open index.html
```

---

## 📱 Responsive Breakpoints

| Breakpoint    | Layout Change                                      |
|---------------|----------------------------------------------------|
| `> 1024px`    | Full 3-column grid, hero two-column layout         |
| `≤ 1024px`    | 2-column service grid, stacked hero and form       |
| `≤ 768px`     | Single-column layout, nav links hidden             |

---

## 🧠 JavaScript Behaviour

- **Navbar scroll effect** — Adds `.scrolled` class (blur + border) after 50px of scroll
- **Intersection Observer** — Triggers `.visible` class on `.animate-on-scroll` elements at 10% threshold
- **Booking form** — Simulates a 1.5s async submission then resets the form
- **Smooth anchor links** — All `href="#..."` links scroll with an 80px offset for the fixed nav

---

## 🏥 Doctors Featured

| Name               | Specialty             | Experience                          |
|--------------------|-----------------------|-------------------------------------|
| Dr. James Wilson   | Senior Cardiologist   | 15+ years in cardiovascular surgery |
| Dr. Sarah Chen     | Chief Neurologist     | Pioneer in neuro-rehabilitative therapy |
| Dr. Michael Ross   | Pediatric Specialist  | Expert in developmental pediatrics  |

---

## 📌 Notes

- The booking form currently uses a `setTimeout` mock — connect it to a real backend or email service (e.g., Formspree, EmailJS) for production use.
- The nav links hide on mobile (`≤ 768px`) — consider adding a hamburger menu for full mobile navigation.
- Doctor images reuse `doc1.png` for two profiles — replace with unique images for production.

---

## 📜 License

© 2026 AuraCare Medical Center. All rights reserved.
>>>>>>> 4f4ed6f7dc87c498bf20ad9749b64ecc110baa70
