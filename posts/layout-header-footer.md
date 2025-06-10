---
title: "The Layout, Header and Footer"
date: "2025-06-02"
excerpt: "The layout of a blog plays a crucial role in user experience and visual consistency."
cover_image: "/img2.jpg"
---

## Introduction

This article explores how the header and footer components are structured and styled in this Next.js static blog.

## The Header Component

The header serves as the top navigation bar and branding element for the blog. Here's how it's implemented:

### File Location

- Path: `components/Header.tsx`
- Simple React component with no props or state.

### Code Structure

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

### Key Features

- Wrapped in a semantic `<header>` tag.
- Uses the shared `container` class for consistent width and padding.
- Displays a static title, but could easily be extended to include navigation links.

## The Footer Component

The footer appears at the bottom of every page and contains copyright information:

### File Location

- Path: `components/Footer.tsx`
- Includes a link back to the top of the page.

### Code Structure

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

### Key Features

- Uses Next.js `Link` for client-side navigation.
- Semantic `<footer>` tag for accessibility.
- Simple text content that could be expanded with additional links or information.

## Styling the Layout

Both components share styling from the global CSS file:

### Global Styles

- Path: `styles/globals.css`
- Contains shared styles for header and footer:

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

### Design Decisions

- Dark background (#36445f) and light text (#f9f9f9) for the header
- Consistent padding and spacing
- Responsive container width (76rem max)

## Integration in the App

The components are integrated through `_app.tsx`:

```tsx
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
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

### Key Integration Points

- Wraps every page with consistent header and footer
- Main content uses the same `container` class for alignment
- Global styles are imported once at the app level

## Potential Enhancements

While the current implementation is simple and effective, here are some possible improvements:

### For the Header

- Add navigation links to important pages
- Include a dark/light mode toggle
- Make the title dynamic based on configuration

### For the Footer

- Add social media links
- Include a sitemap or quick links
- Add a newsletter signup form

## Conclusion

The header and footer components provide a consistent frame for all blog content. Their simple implementation demonstrates how basic React components can be combined with Next.js features and CSS to create an effective layout foundation. In future articles, we'll explore more complex aspects of the blog's architecture.
