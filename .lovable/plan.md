

# Changes Required

## 1. Rename company to "Rwaq Glass" / "رواق للزجاج"
- Update `translations.ts`: Change `footer.company` to "Rwaq Glass" (EN) and "رواق للزجاج" (AR)
- Update all related text (footer.desc, contact email, etc.)
- Update Header logo letter from "G" to "R"

## 2. Animated counting stats (0 → target)
- Update stats values: 3 factories, 1500 projects, 2839+ clients, 500+ team members
- Add a new translation key `intro.team_members` for "Team Members" / "أعضاء الفريق"
- Create a `useCountUp` hook using `useEffect` + `requestAnimationFrame` + Intersection Observer (only animate when visible)
- Replace static stat values with animated counters

## 3. Scroll-to-top on page navigation
- Add a `ScrollToTop` component in `App.tsx` that calls `window.scrollTo(0, 0)` on route change using `useLocation`

## 4. Testimonials: show multiple cards with sliding
- Replace the single-card testimonial with a grid/row showing 3 cards at once on desktop (1 on mobile)
- Add auto-sliding and manual navigation arrows
- Add more testimonials for variety

## 5. Floating WhatsApp button
- Add a fixed-position WhatsApp icon (bottom-right for LTR, bottom-left for RTL) that links to `https://wa.me/<phone_number>`
- Green circular button with WhatsApp icon, hover scale effect

## Files to modify
- `src/i18n/translations.ts` — company name, new team key
- `src/pages/Index.tsx` — stats data, count-up animation, testimonials grid
- `src/App.tsx` — ScrollToTop component
- `src/components/layout/Header.tsx` — logo letter "R"
- `src/components/layout/Layout.tsx` — add WhatsApp floating button

