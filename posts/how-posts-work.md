---
title: "How Individual Posts Work"
date: "2025-06-03"
excerpt: "The individual posts in this Next.js blog are displayed with dynamic routing."
cover_image: "/img3.jpg"
---

## Introduction

In this article, we will examine how the `[slug].tsx` file works to generate unique pages for each Markdown post.

## Understanding Dynamic Routes

Next.js uses file-system-based routing where special filenames create dynamic routes:

### File Naming Convention

- Path: `pages/blog/[slug].tsx`
- Square brackets `[]` indicate a dynamic segment
- The filename pattern matches URLs like `/blog/my-post`

### How It Works

- At build time, Next.js generates static pages for all possible slugs
- The `slug` parameter becomes available in page props
- Each post gets its own statically generated HTML file

## Key Components of [slug].tsx

The dynamic post page consists of three main parts:

### 1. Page Component

```tsx
export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <div>
      <Link href="/" className="btn btn-back">
        back
      </Link>
      <div className="card card-page">
        <h1 className="post-title">{title}</h1>
        <div className="post-date">Posted on {date}</div>
        <img src={cover_image} alt="" />
        <div className="post-body">
          <MarkdownRenderer content={content} />
        </div>
      </div>
    </div>
  );
}
```

### 2. getStaticPaths

```tsx
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
```

### 3. getStaticProps

```tsx
export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
```

## The Build Process

### Step 1: Generating Paths

- `getStaticPaths` reads all Markdown files in the `posts` directory
- Creates an array of possible slugs (filename without .md extension)
- Returns these as paths for Next.js to pre-render

### Step 2: Fetching Post Data

- For each path, `getStaticProps` runs at build time
- Reads the matching Markdown file using the slug parameter
- Parses frontmatter and content using `gray-matter`

### Step 3: Page Rendering

- The page component receives frontmatter and content as props
- Renders the post title, date, cover image, and Markdown content
- Uses the `MarkdownRenderer` component to format the content

## File System Integration

### Posts Directory Structure

- All Markdown files live in the `posts` directory
- Example post: `posts/welcome-to-my-blog.md`
- Corresponding URL: `/blog/welcome-to-my-blog`

### Frontmatter Requirements

Each Markdown file must include frontmatter metadata:

```yaml
---
title: "Welcome to My Blog"
date: "2025-01-01"
cover_image: "/images/welcome.jpg"
---
```

## Error Handling

### Fallback Behavior

- `fallback: false` means 404 pages are shown for unknown slugs
- Alternative approaches could include:
  - `fallback: true` for on-demand page generation
  - `fallback: blocking` for server-side rendering of new slugs

### Missing File Handling

- Current implementation throws an error if a Markdown file is missing
- Could be enhanced with try/catch blocks for better error recovery

## Performance Considerations

### Static Generation Benefits

- Pages are pre-rendered at build time
- No server-side processing needed for page requests
- Excellent performance and SEO characteristics

### Build Time Impact

- Large numbers of posts may increase build time
- Incremental Static Regeneration could be added for frequent updates

## Conclusion

The `[slug].tsx` dynamic route provides a flexible way to generate individual post pages from Markdown files. By combining Next.js's static generation capabilities with file system operations, we create a maintainable system for blog content. Future enhancements could include on-demand revalidation or more sophisticated error handling.
