# EVC Vedam Website Walkthrough

I have successfully built the complete, responsive, and modern website for "EVC Vedam" - the Entrepreneurship Club of Vedam School of Technology.

## Features Implemented

### 1. Core UI & Layout
- **Modern Design**: Used Tailwind CSS for a clean, startup-themed UI with a custom color palette (Indigo/Slate).
- **Responsive Navbar**: Sticky navbar with mobile menu support.
- **Footer**: Comprehensive footer with links and social icons.
- **Dark Mode Support**: The site respects system preferences for dark mode.

### 2. Home Page
- **Hero Section**: Animated background blobs and entrance animations using Framer Motion.
- **Sponsors**: Infinite horizontal scrolling marquee for sponsor logos.
- **Testimonials**: Auto-sliding testimonial cards with manual controls.
- **Vision & What We Do**: Informative sections with icons and cards.

### 3. Pages
- **Events**: Listing of upcoming and past events.
- **Event Details**: Dynamic event pages with full descriptions and registration logic.
- **Gallery**: Grid layout with a lightbox overlay for viewing images.
- **Blogs**: Article listing with category tags.
- **Team**: Responsive team member cards with hover effects.
- **About Us**: Story and mission statement.

### 4. Authentication & Backend
- **NextAuth.js**: Implemented authentication using Credentials (email/password) and Google (placeholder).
- **Prisma & SQLite**: Database schema for Users, Events, Registrations, Blogs, and Team.
- **Registration**: Full sign-up flow with password hashing (bcrypt) and validation (zod).
- **Protected Actions**: "Register Now" button on events requires login.

## How to Run

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Setup Database**:
    ```bash
    npx prisma generate
    npx prisma db push
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```

4.  **Open Browser**:
    Navigate to [http://localhost:3000](http://localhost:3000).

## Verification Steps

### Authentication
1.  Go to **Register / Login**.
2.  Click **Sign up** and create an account (e.g., `test@example.com` / `password123`).
3.  You will be redirected to Sign In. Log in with the same credentials.
4.  Verify that the Navbar shows your name and "Sign Out".

### Events
1.  Navigate to **Events**.
2.  Click on an event.
3.  If logged in, you should see **Register Now**.
4.  If logged out, you should see **Login to Register**.

### Animations
1.  Check the **Home Page** for the sponsor marquee loop.
2.  Check the **Testimonials** section for auto-sliding.
3.  Check the **Gallery** for the lightbox effect when clicking an image.

## Project Structure
- `app/`: Next.js App Router pages and API routes.
- `components/`: Reusable UI components and sections.
- `lib/`: Utilities, database client, and auth configuration.
- `prisma/`: Database schema and configuration.
