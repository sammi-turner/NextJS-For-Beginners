---
title: "The Layout, Header and Footer"
date: "2025-06-03"
excerpt: "The layout of a blog plays a crucial role in how it is navigated by its visitors."
cover_image: "/img3.jpg"
---

## The Header Component

The header serves as the top navigation bar and branding element for the blog. It is implemented as a simple React component located at `components/Header.tsx`.

Here's the code structure for the header:

```tsx
const Header = () => {
  return (
    <header className="container">
      <a
        href="https://github.com/sammi-turner/NextJS-For-Beginners"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>NextJS For Beginners</h2>
      </a>
    </header>
  );
};

export default Header;
```

The component uses a semantic `<header>` tag for accessibility with the shared `container` class to maintain consistent width and padding. It displays a title that is also an external link to the "NextJS For Beginners" GitHub repo.

## The Footer Component

The footer appears at the bottom of every page, containing authorship info and a link back to the top of the homepage. It is located at `components/Footer.tsx` and uses Next.js's built-in `Link` component for client-side navigation.

```tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container">
      <Link href="/" passHref>
        <h3>Sammi Turner (2025)</h3>
      </Link>
    </footer>
  );
};

export default Footer;
```

Like the header, the footer uses a semantic `<footer>` tag and the `container` class for alignment. The content is minimal but could be expanded with additional features like social media links or a sitemap.

The `container` class ensures a consistent max-width and responsive padding across all components, creating a unified layout.

## Integration in the App

The header and footer are integrated into the layout through `_app.tsx`, which wraps every page with these components:

```tsx
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Header />
      <main className="container">
        <Component {...pageProps} />
        <Analytics />
      </main>
      <Footer />
    </div>
  );
};

export default MyApp;
```

This setup ensures the header and footer appear on every page while maintaining consistent styling. The main content also uses the `container` class for alignment.

## Potential Enhancements

While the current implementation is simple, there are opportunities for improvement. The header could include navigation links, a theme toggle. The footer might benefit from social media links, a newsletter signup, or additional site information.
