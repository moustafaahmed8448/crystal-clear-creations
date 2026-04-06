
# Glass Manufacturing Company Website

## Overview
A premium bilingual (Arabic/English) website for a Saudi glass manufacturing company, featuring glass-inspired UI (transparency, blur, reflections) with a neutral color palette of grays, whites, soft blues, and high-contrast accents.

## Design System
- **Colors**: Neutral transparent tones — soft grays, whites, ice blues, with sharp accent highlights (e.g., deep charcoal or steel blue for CTAs)
- **Fonts**: Cairo/Tajawal for Arabic, Poppins/Inter for English
- **RTL**: Full layout flipping for Arabic — menus, sliders, icons, text alignment
- **UI style**: Glassmorphism — frosted glass cards, subtle blur backgrounds, transparency layers, light reflections
- **Language switcher**: Toggle between AR/EN with full RTL/LTR support

## Pages

### 1. Home Page
- Hero slider with glass factory/project visuals and glassmorphic overlay text
- Company introduction section
- Services overview (4 cards with glass-effect hover)
- Featured projects gallery
- Call-to-action banner
- Client/partner logos carousel
- Testimonials slider

### 2. About Us
- Company story timeline
- Vision & mission with glass-themed icons
- Factory capabilities showcase
- Certifications grid

### 3. Services
- Glass manufacturing, custom solutions, installation, maintenance
- Each service as a detailed section with visuals

### 4. Projects / Portfolio
- Filterable grid (residential, commercial, industrial)
- Project detail pages with image gallery and specs

### 5. Products
- Product categories (tempered, laminated, etc.)
- Product detail pages with specifications

### 6. Blog
- Article listing with thumbnails
- Blog post detail page

### 7. Contact Us
- Contact form (validated, stores submissions in Supabase)
- Embedded Google Maps (Saudi Arabia location)
- Company info display

## Shared Components
- Sticky header with mega menu and language switcher
- Elegant footer with sitemap and social links
- Smooth scroll animations (intersection observer)
- Lazy-loaded images with WebP support
- Glass-effect UI elements throughout

## Backend (Supabase)
- Tables: projects, products, product_categories, services, blog_posts, testimonials, clients, contact_submissions
- Public read access via RLS for content tables
- Insert-only access for contact form submissions
- Seed with demo content for all sections

## Performance
- Preload critical fonts (Cairo, Poppins)
- Lazy loading for images
- Minimal animations (CSS-based, no heavy JS libraries)
- Optimized asset loading
