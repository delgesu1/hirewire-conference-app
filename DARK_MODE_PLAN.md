# HireWire Conference App: Billion-Dollar Dark Mode Plan

This document outlines a comprehensive plan for implementing a high-quality dark mode for the HireWire Conference App. The plan includes strategy, component audit, page-specific checks, media considerations, accessibility, and an implementation timeline, with a tracking system for automated implementation.

## 1. Strategy & Tooling

- [ ] **Enable Tailwind's `dark` class:**
  - Modify `tailwind.config.js` to include `darkMode: 'class'`.
- [ ] **Add a theme provider:**
  - Integrate a library like `next-themes` to handle dark/light mode toggling, respect system preferences, and persist user choice to `localStorage`.
- [ ] **Establish design tokens with CSS variables:**
  - Define CSS variables in `globals.css` for key colors (backgrounds, text, borders, accents) for both light and dark themes.

  ```css
  :root {
    --bg-surface: #ffffff;
    --bg-elevated: #ffffff;
    --text-primary: #111827;
    --text-secondary: #4b5563;
    --border: #e5e7eb;
    --accent: #2563eb;
  }
  html.dark {
    --bg-surface: #0f1117;
    --bg-elevated: #161a23;
    --text-primary: #f9fafb;
    --text-secondary: #9ca3af;
    --border: #272b35;
    --accent: #3b82f6;
  }
  ```
  - Ensure all Tailwind classes reference these CSS variables (e.g., `text-[var(--text-primary)]`) to allow theme switching by toggling the `dark` class on the `<html>` element.

## 2. Component Audit & Token Mapping

- [ ] **Layout containers (`body`, pages):**
  - Apply `bg-[var(--bg-surface)]` and `text-[var(--text-primary)]`.
- [ ] **Cards / Popovers / Panels:**
  - Backgrounds: `bg-[var(--bg-elevated)]`.
  - Borders: `border-[var(--border)]`.
- [ ] **Buttons:**
  - Update variants to reference theme tokens instead of raw colors.
  - Implement subtle shadows in light mode, flat appearance in dark mode.
- [ ] **Inputs / Textareas / Search bars:**
  - Dark mode backgrounds: `bg-[#1d212d]`.
  - Placeholder colors: `text-[#6b7280]`.
- [ ] **Badges & Pills:**
  - Secondary badges: Adjust `gray-100` to `gray-800` in dark mode for softer contrast.
- [ ] **Chat (Messages screen):**
  - Own vs. other bubble colors: Light: `bg-blue-500 / gray-100` → Dark: `bg-blue-600 / gray-800`.
  - Code blocks: Switch to a dark theme (e.g., Prism “Dracula” or `#1e1e1e`).
- [ ] **Modals / Popovers (Radix UI):**
  - Ensure they use Tailwind classes for automatic token inheritance.
- [ ] **Icons (lucide-react):**
  - Verify all icons use `className="w-5 h-5 text-current"` to inherit surrounding text color.

## 3. Page-Specific Checks

- [ ] **Home (Conference selector):**
  - Gradient overlays: Adjust from `from-black/60` to `from-black/70` in dark mode.
  - Progress bar track: Change from `gray-200` to `gray-700`.
- [ ] **Events page (List & Speaker view):**
  - Card shadows: Switch to subtle inner shadow or `shadow-none` in dark mode.
  - Highlight & rating pills: Tweak contrast (e.g., `#fde047` → `#facc15`).
- [ ] **Networking swipe cards:**
  - Adjust flip card background colors.
  - Ensure emoji reactions remain vibrant.
- [ ] **Map page:**
  - Swap to a dark Leaflet tile layer (e.g., Carto “voyager_nolabels” dark).
  - Pin icons: Ensure they turn lighter in dark mode.

## 4. Media / Images

- [ ] **Header images:**
  - Add `filter brightness-90` class in dark mode if too bright.
- [ ] **Logos:**
  - Provide white versions or use `invert` CSS utility for dark mode compatibility.

## 5. Animations & Micro-interactions

- [ ] **Focus rings:**
  - Use `ring-offset-[var(--bg-surface)]` to ensure visibility.
- [ ] **Hover states:**
  - In dark mode, lighten (e.g., `bg-gray-700`) instead of darken.

## 6. Accessibility & Contrast QA

- [ ] **Maintain AA contrast:**
  - Ensure all text and interactive elements meet WCAG AA contrast ratio (4.5:1).
  - Utilize `@tailwindcss/typography` and `tailwindcss-accessibility` plugin for linting.
- [ ] **Testing:**
  - Manual testing with WCAG contrast checker.
  - Test with high-contrast mode in Windows.

## 7. Implementation Milestones (for automated tracking)

- [ ] **Phase 1: Infrastructure Setup & Tokens**
  - [ ] Enable Tailwind `darkMode: 'class'`
  - [ ] Integrate `next-themes` provider
  - [ ] Define CSS variables in `globals.css` for light & dark themes
  - [ ] Update core layout components (`body`, pages) to use tokens
- [ ] **Phase 2: Primitive Components Conversion**
  - [ ] Convert `Button` component to use theme tokens
  - [ ] Convert `Card` component to use theme tokens
  - [ ] Convert `Input` component to use theme tokens
  - [ ] Convert `Badge` component to use theme tokens
  - [ ] Convert `Popover` and `Modal` components to use theme tokens
  - [ ] Verify `lucide-react` icons use `text-current`
- [ ] **Phase 3: Page-by-Page Theme Sweep**
  - [ ] Home page: Adjust gradients and progress bar
  - [ ] Events page: Adjust card shadows, highlight/rating pills
  - [ ] Networking page: Adjust swipe card backgrounds, emoji reactions
  - [ ] Map page: Swap Leaflet tile layer, adjust pin icons
  - [ ] Messages page: Adjust chat bubble colors, code block themes
- [ ] **Phase 4: Media & Image Adjustments**
  - [ ] Implement `filter brightness-90` for header images
  - [ ] Provide dark mode compatible logos (white versions/invert)
- [ ] **Phase 5: Animations & Micro-interactions**
  - [ ] Adjust focus rings for dark mode
  - [ ] Adjust hover states for dark mode
- [ ] **Phase 6: QA & Automated Testing**
  - [ ] Manual QA pass for light/dark toggle and edge cases
  - [ ] Implement automated visual regression tests (Jest/Playwright) for both themes
  - [ ] Verify WCAG AA contrast compliance

## 8. Potential Gotchas

- [ ] Hard-coded hex colors in inline styles: Identify and replace with tokens.
- [ ] SVGs without `currentColor`: Update `stroke` / `fill` attributes.
- [ ] Third-party iframes: Investigate dark-compatible skins.
- [ ] Cached Leaflet tiles: Implement cache busting on theme switch.
- [ ] Scrollbars: Consider styling for dark theme (WebKit).

## 9. Quick MVP Timeline

- **Day 0-1:** Infrastructure & tokens
- **Day 2-3:** Primitive components
- **Day 4-5:** Page sweeps + QA
- **Day 6:** Automated testing & polish
- **Day 7:** Launch 🚀

This plan provides a clear roadmap for implementing a robust and visually appealing dark mode. Each step is designed to be trackable for automated implementation.
