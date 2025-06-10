---
title: "Designing the Homepage"
date: "2025-06-05"
excerpt: "The homepage serves as the entry point to our blog, displaying its articles in an organized layout."
cover_image: "/img5.jpg"
---

## Introduction

This article explains how the post listing is implemented using Next.js and CSS Grid, including how posts are fetched, sorted, and displayed.

## Homepage Structure

### File Location

- Path: `pages/index.tsx`
- Primary responsibility: Display a grid of all blog posts

### Key Components

1. Post cards with title, excerpt, and metadata
2. Responsive grid layout
3. Sorting functionality by date

## Data Fetching Implementation

### getStaticProps Function

The homepage uses Next.js static generation to fetch post data at build time:

```tsx
export async function getStaticProps(): Promise<{ props: HomeProps }> {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta) as unknown as {
      data: Frontmatter;
    };

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
```

### Sorting Mechanism

Posts are sorted chronologically using the utility function:

```tsx
export const sortByDate = (
  a: { frontmatter: { date: string | number | Date } },
  b: { frontmatter: { date: string | number | Date } }
): number => {
  return (
    (new Date(a.frontmatter.date) as unknown as number) -
    (new Date(b.frontmatter.date) as unknown as number)
  );
};
```

## The Post Component

### File Location

- Path: `components/Post.tsx`
- Reusable component for displaying post previews

### Component Structure

```tsx
export default function Post({ post }: PostProps) {
  return (
    <div className="card">
      <Image src={post.frontmatter.cover_image} alt="cover image" />
      <div className="post-date">Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`} className="btn">
        read
      </Link>
    </div>
  );
}
```

## Layout and Styling

### Grid Implementation

The posts grid is created using CSS Grid:

```css
.posts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-top: 3rem;
}

@media (max-width: 50rem) {
  .posts {
    grid-template-columns: 1fr;
  }
}
```

### Card Design

Each post card has consistent styling:

```css
.card {
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-0.3rem);
}
```

## Responsive Considerations

### Breakpoint Strategy

- Desktop: 2-column grid
- Mobile: Single column (switches at 50rem/800px)
- Cards stack vertically on smaller screens

### Image Handling

- Images scale responsively within cards
- Fixed aspect ratio could be added for consistency
- Lazy loading implemented via Next.js Image component

## Performance Optimizations

### Static Generation Benefits

- Content is pre-rendered at build time
- No client-side data fetching required
- Fast initial page load

### Bundle Size

- Only essential components loaded
- No heavy libraries for the grid layout
- Minimal JavaScript required

## Accessibility Features

### Semantic HTML

- Proper heading hierarchy (h1 on page, h3 for post titles)
- Meaningful link text ("read" instead of "click here")
- Alt text for images

### Keyboard Navigation

- All interactive elements focusable
- Clear visual focus states
- Logical tab order

## Future Enhancements

### Possible Improvements

- Pagination for large numbers of posts
- Filtering by category or tag
- Featured posts section
- Search functionality

## Conclusion

The homepage design showcases blog content through a responsive grid layout. By using Next.js static generation and CSS Grid, our blog has both good performance and visual appeal.
