---
title: "The Layout, Header and Footer"
date: "2025-06-02"
excerpt: "The layout of a blog plays a crucial role in its user experience."
cover_image: "/img2.jpg"
---

## The Header Component

The header serves as the top navigation bar and branding element for the blog. It is implemented as a simple React component located at `components/Header.tsx`.

Here's the code structure for the header:

```tsx
export default function Header() {
  return (
    <header>
      <div className="container">
        <h2>Next.js For Beginners</h2>
      </div>
    </header>
  );
}
```

The component uses a semantic `<header>` tag for accessibility and includes a `div` with the shared `container` class to maintain consistent width and padding. Currently, it displays a static title, but this could easily be extended to include navigation links or other dynamic elements.

## The Footer Component

The footer appears at the bottom of every page, containing copyright information and a link back to the homepage. It is located at `components/Footer.tsx` and leverages Next.js's `Link` component for smooth client-side navigation.

Here's the implementation:

```tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <Link href="/" passHref>
          <h2>Sammi Turner (2025)</h2>
        </Link>
      </div>
    </footer>
  );
}
```

Like the header, the footer uses a semantic `<footer>` tag and the `container` class for alignment. The content is minimal but could be expanded with additional features like social media links or a sitemap.

## Styling the Layout

Both components share styling from the global CSS file at `styles/globals.css`. The header features a dark background with light text for contrast, while the footer includes padding and margin for proper spacing.

Here are the relevant CSS rules:

```css
header {
  background: #36445f;
  color: #f9f9f9;
  padding: 1rem;
}

footer {
  padding: 1rem;
  margin-top: 3rem;
}

.container {
  max-width: 76rem;
  margin: auto;
  overflow: auto;
  padding: 0 1rem;
}
```

The `container` class ensures a consistent max-width and responsive padding across all components, creating a polished and unified layout.

## Integration in the App

The header and footer are integrated through `_app.tsx`, which wraps every page with these components. Here's how they are included:

```tsx
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
```

This setup ensures the header and footer appear on every page while maintaining consistent styling. The main content also uses the `container` class for alignment, creating a seamless visual flow.

## Potential Enhancements

While the current implementation is simple and effective, there are opportunities for improvement. The header could include navigation links, a theme toggle, or a dynamic title. The footer might benefit from social media links, a newsletter signup, or additional site information.
