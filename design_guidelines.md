# Design Guidelines: Kem's Antiques & Collectables

## Design Approach
**Selected Approach:** Reference-Based with Vintage E-commerce Aesthetic

Drawing inspiration from successful vintage-styled online stores like Etsy's curated vintage sections, 1stDibs, and Ruby Lane, while maintaining the authentic character evident in the provided storefront image. The design balances nostalgic charm with modern e-commerce usability.

## Typography System

**Primary Font Family:** Playfair Display (Google Fonts) - elegant serif for headings and brand elements
**Secondary Font Family:** Lora (Google Fonts) - readable serif for body text and descriptions
**Accent Font:** Cormorant Garamond (Google Fonts) - decorative elements and special callouts

**Hierarchy:**
- Hero/Page Titles: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headers: text-3xl md:text-4xl, font-semibold
- Product Titles: text-2xl md:text-3xl, font-medium
- Subheadings: text-xl md:text-2xl, font-medium
- Body Text: text-base md:text-lg, font-normal, leading-relaxed
- Small Print/Labels: text-sm, uppercase tracking-wide

## Layout System

**Spacing Units:** Tailwind units of 4, 6, 8, 12, 16, 20 for consistent rhythm
**Container Widths:**
- Full content: max-w-7xl
- Product grids: max-w-6xl
- Text content: max-w-4xl
- Forms: max-w-2xl

## Homepage Structure

**Hero Section (80vh):**
- Large background featuring the storefront image provided
- Centered overlay with logo and tagline
- Primary CTA button with blur backdrop (backdrop-blur-md)
- Ornamental decorative borders/flourishes

**Featured Collections (py-20):**
- 3-column grid (lg:grid-cols-3 md:grid-cols-2 grid-cols-1)
- Category cards with vintage-framed imagery
- Decorative corner embellishments on cards

**Latest Arrivals (py-16):**
- 4-column product grid (lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2)
- Product cards with elegant borders and subtle shadows
- Hover states with gentle lift effect (transform scale-105)

**About Preview (py-20):**
- 2-column layout (image + text)
- Vintage polaroid-style image presentation
- Decorative dividers between sections

**Newsletter Signup (py-16):**
- Centered vintage postcard-style design
- Ornate border frame
- Form with classic styling

## Product Catalog Page

**Filter Sidebar (Desktop):**
- Fixed left sidebar (w-64)
- Accordion-style filter groups
- Vintage checkbox and radio styling
- Ornamental section dividers

**Product Grid:**
- 3-column layout (lg:grid-cols-3 md:grid-cols-2)
- Generous spacing (gap-8)
- Consistent card heights with aspect-ratio control
- Vintage label-style price tags

**Product Cards:**
- Polaroid-inspired frame design
- Image with subtle sepia tone overlay option
- Handwritten-style price presentation
- "View Details" link with decorative underline
- Condition badge (Excellent, Good, Fair) with vintage stamp aesthetic

## Product Detail Page

**Layout:**
- 2-column split (md:grid-cols-2)
- Left: Image gallery with main image + thumbnails
- Right: Product information, pricing, add-to-cart

**Image Gallery:**
- Large main image with vintage photo frame
- Thumbnail strip below (4-5 images)
- Lightbox capability with ornate close button

**Product Info Section:**
- Clear hierarchy with decorative dividers
- Specifications in vintage table format
- Condition report in bordered box
- Provenance/history section with script-style accent
- Related items carousel at bottom

## Shopping Cart & Checkout

**Cart Drawer/Page:**
- Vintage receipt aesthetic
- Line items with product thumbnails
- Subtotal in classic ledger style
- Decorative total box with ornate borders

**Checkout Flow:**
- Single-page checkout with progress indicator (vintage stamps/seals)
- Form fields with classic labels and borders
- Trust badges styled as vintage certification seals
- Stripe integration with branded payment elements

## Navigation

**Header:**
- Full-width with subtle border-bottom
- Logo centered or left-aligned
- Navigation menu with vintage link styling
- Search bar with ornate icon
- Cart icon with item count badge (vintage number style)
- Sticky on scroll with subtle shadow

**Footer:**
- 4-column layout (About, Shop, Contact, Newsletter)
- Decorative top border with vintage motif
- Social icons with vintage circular frames
- Copyright with classic typography

## Component Library

**Buttons:**
- Primary: Solid with decorative borders, uppercase tracking
- Secondary: Outlined with vintage frame style
- Text links: Decorative underlines on hover

**Cards:**
- Subtle box-shadow with vintage paper texture suggestion
- Rounded corners (rounded-lg) or classic square
- Ornamental corner decorations (CSS pseudo-elements)

**Forms:**
- Input fields with classic borders (border-2)
- Labels with vintage styling (uppercase, tracking-wide)
- Focus states with elegant outline
- Error messages in subtle alert boxes

**Icons:**
- Font Awesome (vintage-appropriate icons: fa-shopping-cart, fa-search, fa-heart, fa-star)
- Decorative flourishes for section breaks

## Images

**Hero Image:** The provided storefront image as full-width hero background
**Product Images:** High-quality photos of antiques with consistent aspect ratios (4:3 or 1:1)
**About Section:** Additional storefront/interior shots if available
**Category Headers:** Vintage-styled category imagery
**Decorative Elements:** Ornamental frames, flourishes, and vintage motifs throughout

**Image Treatment:**
- Subtle vignette effects on hero images
- Consistent framing/borders on product images
- Polaroid-style presentation for gallery sections

## Animations

Use sparingly for elegance:
- Smooth fade-ins for product cards on scroll
- Gentle hover lifts on interactive elements (transform translateY(-4px))
- Subtle transitions for filter/menu interactions (transition-all duration-300)

## Accessibility

- Maintain 4.5:1 contrast ratios on all text
- Form labels clearly associated with inputs
- Focus indicators visible and styled consistently
- Alt text for all product images describing the antique item

This design creates an immersive vintage shopping experience that honors the heritage of Kem's Antiques while providing modern e-commerce functionality.