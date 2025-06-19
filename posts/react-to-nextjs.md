---
title: "From React To NextJS"
date: "2025-06-01"
excerpt: "NextJS builds on top of React, adding features that simplify the development of modern web applications."
cover_image: "/img1.jpg"
---

## File-Based Routing

In React, routing is typically handled by libraries like React Router, where you define routes in a JavaScript or TypeScript file. NextJS simplifies this with file-based routing. Every file in the `pages` directory becomes a route automatically. For example, `pages/about.js` maps to `/about`. Nested routes are created using subdirectories, and dynamic routes use square brackets (e.g., `pages/posts/[id].js`).

## Server-Side Rendering (SSR) and Static Site Generation (SSG)

React applications usually render entirely on the client side, which can impact SEO and initial load performance. NextJS introduces SSR and SSG out of the box. With `getServerSideProps`, you can fetch data on the server before sending the page to the client. For static content, `getStaticProps` generates pages at build time, offering blazing-fast performance.

## API Routes

NextJS includes a built-in way to create API endpoints without a separate backend server. Any file inside `pages/api` becomes an API route. This is useful for handling form submissions, authentication, or any server-side logic while keeping everything in one codebase.

## Built-In CSS and Sass Support

While React often requires additional configuration for CSS modules or Sass, NextJS supports them natively. Just name your file with `.module.css` or `.module.scss`, and the styles are automatically scoped to the component. Global styles can be imported directly in `_app.js`.

## Image Optimization

The `next/image` component optimizes images automatically. It handles lazy loading, resizing, and serving modern formats like WebP, improving performance without extra effort. This is a significant upgrade over manually optimizing images in a React app.

## Zero Config by Default

NextJS reduces the need for complex configuration. It comes with sensible defaults for Babel, webpack, and other tools. You can still customize if needed, but most projects work great without touching a config file.

## Getting Started

To try NextJS, run `npx create-next-app` and explore the generated project. You’ll find a familiar React environment with all the added benefits of NextJS. If you’re used to React, NextJS will feel like a natural progression. It removes many pain points while retaining React's flexibility.
