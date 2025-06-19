---
title: "How Individual Posts Work"
date: "2025-06-03"
excerpt: "The individual posts in this Next.js blog are displayed with dynamic routing."
cover_image: "/img3.jpg"
---

## Dynamic Routing

Next.js employs file-system-based routing where special filenames create dynamic routes. The file `pages/blog/[slug].tsx` uses square brackets `[]` to indicate a dynamic segment. This filename pattern automatically matches URLs following the structure `/blog/my-post`, where "my-post" represents the slug of an individual blog post.

During the build process, Next.js generates static pages for all possible slugs. The slug parameter becomes available in the page props, allowing each post to receive its own statically generated HTML file.

## Key Components of the Dynamic Post Page

The `[slug].tsx` file consists of three essential parts that work together to render individual posts.

### The Page Component

The React component displays the post content by receiving frontmatter and content as props:

```tsx
const greyBlur: string =
  "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA=";

const PostPage: React.FC<PostPageProps> = ({
  frontmatter: { title, date, cover_image },
  content,
}) => {
  return (
    <div>
      <Link href="/" className="btn btn-back">
        back
      </Link>
      <div className="card card-page">
        <h1 className="post-title">{title}</h1>
        <div className="post-date">Posted on {date}</div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "15rem",
            marginBottom: "2rem",
          }}
        >
          <Image
            src={cover_image}
            alt="post image"
            fill
            style={{ objectFit: "cover", borderRadius: "1rem" }}
            unoptimized
            placeholder="blur"
            blurDataURL={greyBlur}
          />
        </div>
        <div className="post-body">
          <MarkdownRenderer content={content} />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
```

### Generating Static Paths

The `getStaticPaths` function identifies all possible post paths by reading Markdown files:

```tsx
export const getStaticPaths: GetStaticPaths = async () => {
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
};
```

### Fetching Post Data

For each path, `getStaticProps` retrieves the corresponding post content:

```tsx
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
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
};
```

## Understanding the Build Process

The static generation process occurs in three distinct phases. First, `getStaticPaths` scans the posts directory and creates an array of all possible slugs by removing the .md extension from filenames. These slugs become the paths that Next.js will pre-render.

Next, for each identified path, `getStaticProps` executes during build time. It locates the matching Markdown file using the slug parameter and processes it using the gray-matter library to separate the frontmatter metadata from the content.

Finally, the page component receives the parsed frontmatter and content as props. It renders the post title, publication date, cover image, and converts the Markdown content into properly formatted HTML using a MarkdownRenderer component.

## File System Structure and Requirements

All blog post content resides in a dedicated posts directory, with each Markdown file representing one post. For example, a file named `posts/welcome-to-my-blog.md` automatically becomes accessible at the URL `/blog/welcome-to-my-blog`.

Each Markdown file must include specific frontmatter metadata at the beginning of the file. This YAML-formatted section provides essential information for the post:

```yaml
---
title: "Welcome to My Blog"
date: "2025-01-01"
cover_image: "/images/welcome.jpg"
---
```

## Error Handling and Fallback Options

The current implementation sets `fallback: false`, which directs Next.js to show 404 pages for any unknown slugs that don't match existing Markdown files. Alternative approaches could implement `fallback: true` for on-demand page generation or `fallback: blocking` for server-side rendering of new slugs.

The system currently throws an error when attempting to access a non-existent Markdown file. This behavior could be improved by implementing try/catch blocks around file operations, allowing for more graceful error recovery and user feedback.

## Performance Characteristics

Static generation offers significant performance advantages. By pre-rendering pages at build time, the system eliminates the need for server-side processing during page requests, resulting in excellent load times and SEO benefits.

As the number of posts grows, build times may increase accordingly. For blogs with frequent content updates, implementing Incremental Static Regeneration could provide a balance between performance and freshness by allowing periodic revalidation of static content.
