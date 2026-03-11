# Fleepin - Premium PC Builder Platform

A modern, high-performance React and Vite application showcasing custom-built gaming and professional PCs.

## Features

- ⚡ **Fast Performance** — Built with React 19 and Vite for lightning-fast development and production builds
- 🎨 **Beautiful Animations** — Smooth scroll animations with AOS (Animate On Scroll)
- 💻 **Dynamic Carousel** — Brand showcase with smooth transitions and Swiper integration
- ♿ **Accessible** — Full WCAG compliance with proper ARIA labels and semantic HTML
- 📦 **Optimized Delivery** — Lazy-loaded components for reduced initial bundle size
- 🎯 **Data-Driven** — Testimonials and features managed through JSON configuration files

## Tech Stack

- **React 19** — Modern UI framework
- **Vite 7** — Next-generation build tool
- **Swiper** — Touch-enabled carousel library
- **Tsparticles** — Particle animation system
- **AOS** — Scroll animation library
- **React Icons** — Icon library
- **ESLint + Prettier** — Code quality and formatting

## Project Structure

```
src/
├── components/          # Modular React components
│   ├── Header.jsx
│   ├── Home.jsx         # Hero section with lazy-loaded RotatingPC
│   ├── RotatingPC.jsx   # Brand carousel (lazy-loaded)
│   ├── WhyChooseUs.jsx  # Feature cards
│   └── TestimonialsPage.jsx # Customer testimonials (lazy-loaded)
├── data/                # JSON config files
│   ├── testimonials.json # Customer reviews
│   ├── features.json     # Product benefits & features
│   └── brands.json       # (Ready for expansion)
├── styles/              # Component-scoped CSS
├── assets/              # Images and logos
├── App.jsx              # Main App component with Suspense boundaries
└── main.jsx             # Entry point
```

## Scripts

### Development

```bash
npm run dev          # Start Vite dev server with HMR
```

### Build & Preview

```bash
npm run build        # Create optimized production build
npm run preview      # Preview production build locally
```

### Code Quality

```bash
npm run lint         # Run ESLint to check code quality
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check if code is properly formatted
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:5173 in your browser

## Code Quality Standards

### ESLint Rules

- React best practices (hooks, display names)
- Accessibility enforcement (ARIA labels, alt text)
- Code consistency
- Prettier integration for style conflicts

### Prettier Configuration

- Print width: 100 characters
- Trailing commas: ES5
- Single quotes: Enabled
- Tab width: 2 spaces

## Performance Optimizations

### Lazy Loading

- `RotatingPC.jsx` — Heavy animation component with images
- `TestimonialsPage.jsx` — Lower-fold carousel component

Lazy components load only when needed, with graceful loading fallbacks.

### Data Organization

Content is centralized in JSON files (`src/data/`) for:

- Easy maintenance
- Future API migration
- SEO-friendly structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Run `npm run lint` before committing
2. Use `npm run format` to ensure consistent formatting
3. Keep components in `src/components/`
4. Update data files in `src/data/` for content changes

## Future Enhancements

- [ ] TypeScript migration
- [ ] Testing suite (Vitest + React Testing Library)
- [ ] E2E testing (Cypress)
- [ ] Backend API integration
- [ ] Dark mode support
- [ ] Multi-language support

## License

All rights reserved.
