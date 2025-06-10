---
title: "Styling the Blog"
date: "2025-06-06"
excerpt: "The visual consistency of this blog is maintained through a global CSS file."
cover_image: "/img6.jpg"
---

## Introduction

This article examines this blog's `globals.css` implementation, explaining how global styles are structured and how they contribute to the blog's responsive design system.

## File Structure Overview

### Location and Scope

- Path: `styles/globals.css`
- Imported in `_app.tsx` to apply globally
- Contains all fundamental styles for the application

### CSS Methodology

- Flat specificity structure (no nesting)
- Mobile-first approach where applicable
- Semantic class naming conventions

## Core Style Categories

### Base Element Styles

Sets default styles for raw HTML elements:

```css
body {
  font-family: "Tahoma", sans-serif;
  font-weight: normal;
  background: #f9f9f9;
}

h2,
h3,
h4 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

img {
  width: 100%;
  border-radius: 1rem;
}
```

### Layout Components

Styles for structural elements:

```css
.container {
  max-width: 76rem;
  margin: auto;
  overflow: auto;
  padding: 0 1rem;
}

header,
footer {
  background: #36445f;
  color: #f9f9f9;
  padding: 1rem;
}
```

### Utility Classes

Reusable utility patterns:

```css
.btn {
  display: inline-block;
  background: steelblue;
  color: #fff;
  padding: 0.5rem 0.7rem;
  border-radius: 0.3rem;
  transition: transform 0.2s ease;
}

.btn:hover {
  transform: scale(0.98);
}
```

## Typography System

### Font Stack

- Primary typeface: Tahoma
- Fallback to system sans-serif
- Consistent font-weight normalization

### Vertical Rhythm

- Base spacing unit: 1rem
- Paragraph margins: 1rem bottom
- Heading margins: 2rem top and bottom

## Color Palette

### Defined Colors

- Primary background: `#f9f9f9` (light gray)
- Header background: `#36445f` (dark blue)
- Accent color: `steelblue`
- Text colors: Near-black on light, near-white on dark

### Usage Patterns

- Backgrounds use semantic names
- Text colors adapt to background
- Consistent button styling

## Responsive Design

### Breakpoint Strategy

Single mobile breakpoint at 50rem (800px):

```css
@media (max-width: 50rem) {
  .posts {
    grid-template-columns: 1fr;
  }
}
```

### Fluid Elements

- Container uses max-width with auto margins
- Images scale proportionally
- Padding adjusts based on viewport

## Component-Specific Styles

### Card Components

Styles for post cards and page cards:

```css
.card {
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2);
}

.card-page {
  padding: 1.5rem 3rem;
}
```

### Post Elements

Specialized post content styles:

```css
.post-date {
  background: #e5e4e2;
  padding: 0.3rem 1rem;
  border-radius: 1rem;
}

.post-body pre {
  padding: 2rem;
  margin: 2rem 0;
  line-height: 2.3;
}
```

## Performance Considerations

### CSS Efficiency

- Minimal selector complexity
- Limited use of expensive properties
- Small overall file size (under 5KB)

### Render Optimization

- Properties with GPU acceleration where needed
- Appropriate will-change declarations
- Efficient repaint boundaries

## Maintenance Strategy

### Organization Principles

- Logical grouping of related styles
- Clear section comments
- Alphabetical property ordering within rulesets

### Future Scalability

- Easy to add new global styles
- Simple to extend color system
- Straightforward to add new utilities

## Browser Support

### Targeted Compatibility

- Modern evergreen browsers
- IE11 not supported
- Progressive enhancement approach

### Vendor Prefixing

- Autoprefixer used in build process
- Manual prefixes only where essential
- Balanced support vs. bundle size

## Conclusion

The `globals.css` file provides a solid foundation for the blog's visual presentation while maintaining excellent performance characteristics. Its thoughtful organization and restrained design choices create a cohesive user experience across all pages. Future styling needs can be accommodated within this established system while preserving the design consistency.
