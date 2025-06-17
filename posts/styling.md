---
title: "Styling the Blog"
date: "2025-06-06"
excerpt: "This blog is styled with both a global CSS file and JSX scoped styles."
cover_image: "/img6.jpg"
---

## Global Stylesheet

Our global CSS file at `styles/globals.css` and imported in `_app.tsx` ensures app-wide coverage. The CSS follows a flat structure without nesting, making it easier to maintain and reason about. A mobile-first approach guides the responsive design implementation, and semantic class naming conventions help developers understand style purposes at a glance.

## Core Style Categories

### Base Element Styles

The stylesheet begins by establishing sensible defaults for raw HTML elements. The body element sets the foundation with the Tahoma font, an off-white background and off-black foreground.

Headings receive consistent vertical spacing with 2rem margins on both top and bottom, creating a content hierarchy. Images are styled to have rounded corners.

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Tahoma", sans-serif;
  font-weight: normal;
  line-height: normal;
  color: #301934;
  background: #f9f9f9;
}

h2,
h3,
h4 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

img {
  border-radius: 1rem;
}
```

### Layout Components

The header and footer share the same styling. The container class establishes a centered content area with appropriate padding and overflow handling.

```css
header,
footer {
  border-radius: 1rem;
  margin-top: 1rem;
  margin-bottom: 1 rem;
  box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2);
  text-align: center;
}

.container {
  max-width: 80rem;
  margin: auto;
  overflow: auto;
  padding: 0 1rem;
}
```

## Responsive Design

The responsive implementation uses a single mobile breakpoint at 50rem to adjust layouts for smaller screens. Elements like the posts grid switch to a single-column layout below this breakpoint. This ensures container elements, images, and spacing adapt smoothly across different viewport sizes.

```css
@media (max-width: 50rem) {
  .posts {
    grid-template-columns: 1fr;
  }
}
```

## Component-Specific Styles

### Button Styling

The `btn` class has the bulk of the button styling, but is supplemented with classes that cover user interactions with the button and how the back button is displayed above individual posts.

```css
.btn {
  margin-top: 0.6rem;
  display: inline-block;
  background: steelblue;
  color: #fff;
  border: none;
  padding: 0.5rem 0.7rem;
  border-radius: 0.3rem;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  font-family: "Tahoma", sans-serif;
}

.btn:focus {
  outline: none;
}

.btn:hover {
  transform: scale(0.98);
}

.btn-back {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
```

### Card Styles

Card elements receive special styling to create visual hierarchy. Both regular cards and page cards feature rounded corners and subtle shadows, with page cards having additional padding to better frame their content.

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

Post elements like the title, date and post body have their own custom classes:

```css
.posts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2);
}

.post-title {
  margin: 1rem 0;
}

.post-date {
  border-radius: 1rem;
  background: #e5e4e2;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  padding: 0.3rem 1rem;
}

.post-body pre {
  padding: 2rem;
  margin: 2rem 0;
  line-height: 2.3;
}
```

## JSX Scoped Styles

These JSX code blocks define scoped styles in the `pages/blog/[slug].tsx` file.

```jsx
style={{
  position: "relative",
  width: "100%",
  height: "15rem",
  marginBottom: "2rem",
}}
```

```jsx
<Image
  src={cover_image}
  alt="post image"
  fill
  style={{ objectFit: "cover", borderRadius: "1rem" }}
  unoptimized // Only if images are already optimized
/>
```

These JSX blocks are used in `components/Post.tsx`.

```jsx
style={{
  position: "relative",
  width: "100%",
  height: "15rem",
  marginBottom: "1.5rem",
}}
```

```jsx
<Image
  src={post.frontmatter.cover_image}
  alt="cover image"
  fill
  style={{ objectFit: "cover" }}
  unoptimized // Only if images are already optimized
/>
```
