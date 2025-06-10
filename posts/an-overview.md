---
title: "An Overview"
date: "2025-06-01"
excerpt: "This article explains how this static blog was built using Next.js."
cover_image: "/img1.jpg"
---

## Introduction

The blog renders date-stamped articles written in Markdown, with a focus on simplicity and performance. Below, we’ll explore the core concepts and structure of the project.

## Why Next.js for a Static Blog?

Next.js is a powerful framework for building static and server-rendered React applications. For this blog, we leverage its static site generation (SSG) capabilities to pre-render pages at build time. This ensures fast loading times, better SEO, and a seamless developer experience.

## Project Structure

Here’s a breakdown of the key files and folders in the project:

```
.
├── components/
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── MarkdownRenderer.tsx
│   └── Post.tsx
├── pages/
│   ├── blog/
│   │   └── [slug].tsx
│   ├── _app.tsx
│   └── index.tsx
├── posts/
│   └── (Markdown files with frontmatter)
├── public/
│   └── (Static assets like images)
├── styles/
│   └── globals.css
└── utils/
    └── index.ts
```

### Key Files Explained

#### 1. `pages/index.tsx`

- Fetches and lists all blog posts from the `posts` folder.
- Uses `getStaticProps` to read Markdown files and extract frontmatter (metadata like title, date, etc.).
- Renders posts in a grid layout.

#### 2. `pages/blog/[slug].tsx`

- Dynamically routes to individual blog posts using Next.js’s file-based routing.
- Uses `getStaticPaths` to generate paths for all posts and `getStaticProps` to fetch the content for each post.
- Parses Markdown content with `gray-matter` and renders it using `MarkdownRenderer`.

#### 3. `components/MarkdownRenderer.tsx`

- Converts Markdown to React components using `react-markdown`.
- Adds syntax highlighting for code blocks with `react-syntax-highlighter`.

#### 4. `posts/` Folder

- Contains Markdown files with frontmatter (metadata) and content.
- Example frontmatter:
  ```yaml
  ---
  title: "Sample Post"
  date: "2025-01-01"
  excerpt: "A brief summary of the post."
  cover_image: "/images/sample.jpg"
  ---
  ```

## How the Blog Works

1. **Build Process**:

   - Next.js pre-renders all pages at build time using `getStaticProps` and `getStaticPaths`.
   - Markdown files are read from the `posts` folder, and their content is parsed into HTML.

2. **Rendering**:

   - The homepage (`index.tsx`) displays a list of posts sorted by date.
   - Clicking a post navigates to its dedicated page (`[slug].tsx`), where the Markdown content is rendered.

3. **Styling**:
   - Global styles are defined in `globals.css`, ensuring consistency across the blog.
   - Responsive design is achieved with CSS Grid and media queries.

## Conclusion

This overview covers the foundational setup of the blog. In future articles, we’ll dive deeper into topics like dynamic routing, Markdown rendering, and styling. By leveraging Next.js and static site generation, this blog achieves performance and simplicity while remaining easy to maintain.
