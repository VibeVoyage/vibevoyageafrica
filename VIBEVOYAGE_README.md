# VibeVoyage - Travel Platform

## Brand Identity
- **Logo**: Sun + Palm Trees + Waves with "VibeVoyage" script
- **Tagline**: "Explore Your Paradise"
- **Location**: Cotonou, Benin Republic
- **Contact**: +234 701 661 0709 | vibevoyage.cgi@gmail.com

## Color Palette
- **Deep Teal**: #1a5c5a
- **Gold**: #c9a84c
- **Sunset Orange**: #e8834a
- **Cream/Beige**: #f5ede0
- **Navy**: #0d2535

## Typography
- **Headings**: Cormorant Garamond (serif)
- **Body**: DM Sans (sans-serif)

## Pages Built

### Public Pages
1. **Homepage** (`/`)
   - Hero section with background image
   - Stats bar (2,400+ trips, 47 countries, 98% satisfaction, 24/7 support)
   - 6 services (Flight, Hotels, Car, Personal, Hospitality, Yacht)
   - Popular destinations grid
   - Why Choose Us section
   - CTA section

2. **Destinations** (`/destinations`)
   - Filter buttons (All, Nature, Business, Luxury, Budget, Honeymoon, Group)
   - 9 destination cards with images
   - Package count display
   - Responsive grid layout

3. **Packages** (`/packages`)
   - Category filters (All, Luxury, Adventure, Business, Honeymoon, Budget, Group)
   - Package cards with:
     - Price and duration
     - Rating and reviews
     - Highlights tags
     - Category badges
   - 9 sample packages

### Authentication Pages
4. **Login** (`/auth/login`)
   - Email and password fields
   - Show/hide password toggle
   - Remember me checkbox
   - Forgot password link
   - Sign up link

5. **Register** (`/auth/register`)
   - Name, email, country, password fields
   - Country dropdown with 13 countries
   - Password confirmation
   - Terms & conditions checkbox

### User Dashboards
6. **User Dashboard** (`/dashboard/user`)
   - 4 stat cards (Total Trips, Completed, Upcoming, Spent)
   - Quick action buttons
   - Recent bookings list with status badges
   - Booking details (date, travelers, price)

7. **Admin Dashboard** (`/dashboard/admin`)
   - 4 KPI cards (Revenue, Bookings, Users, Completion Rate)
   - Management buttons
   - Pending bookings table
   - Approve/Reject/View actions
   - Pagination controls

## Component Structure
- **Navbar**: Sticky, responsive with mobile menu
- **Footer**: Multi-column layout with contact info & social links

## Features
- ✓ Full responsive design (mobile-first)
- ✓ Custom brand colors and typography
- ✓ Gradient buttons with hover effects
- ✓ Image carousel on destinations
- ✓ Filterable package grid
- ✓ Interactive table with actions
- ✓ Form validation
- ✓ Accessibility best practices

## Technologies
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)

## Deployment
Ready to deploy to Vercel with `npm run build` producing zero errors.

All pages use Pexels stock photos for demo images.
