---
title: "An Overview"
date: "2025-06-02"
excerpt: "The subject matter of this blog is its own implementation. The code that built it will be examined."
cover_image: "/img2.jpg"
---

## Why Next.js for a Static Blog?

Next.js allows us to use static site generation (SSG) to pre-render pages at build time. This ensures fast loading times and better search engine optimization (SEO).

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
    └── globals.css
```

### Key Files Explained

#### 1. `pages/index.tsx`

The `index.tsx` file fetches and lists all blog posts from the `posts` folder. It uses `getStaticProps` to read Markdown files and extract frontmatter, such as the title, date, and other metadata. The posts are then rendered in a grid layout for easy navigation.

#### 2. `pages/blog/[slug].tsx`

This file dynamically routes to individual blog posts using Next.js’s file-based routing system. It employs `getStaticPaths` to generate paths for all posts and `getStaticProps` to fetch the content for each post. The Markdown content is parsed using `gray-matter` and rendered with the help of the `MarkdownRenderer` component.

#### 3. `components/MarkdownRenderer.tsx`

The `MarkdownRenderer` component converts Markdown into React components using `react-markdown`. Additionally, it enhances code blocks with syntax highlighting by integrating `react-syntax-highlighter`, improving readability for technical content.

#### 4. `posts/` Folder

The `posts` folder contains all the Markdown files for the blog posts, each including frontmatter for metadata. For example, a post’s frontmatter might look like this:

```yaml
---
title: "Sample Post"
date: "2025-01-01"
excerpt: "A brief summary of the post."
cover_image: "/images/sample.jpg"
---
```

## How the Blog Works

During the build process, Next.js pre-renders all pages using `getStaticProps` and `getStaticPaths`. The Markdown files in the `posts` folder are read, and their content is parsed into HTML for rendering.

On the homepage (`index.tsx`), visitors see a list of posts sorted by date, making it easy to browse the latest content. Clicking on a post takes them to its dedicated page (`[slug].tsx`), where the full Markdown content is displayed in a clean, readable format.

Styling is managed globally through `globals.css`, ensuring a consistent look and feel across the blog. Responsive design is achieved using CSS Grid and media queries, making the blog accessible on devices of all sizes.
