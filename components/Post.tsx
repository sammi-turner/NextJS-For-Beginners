import Link from "next/link";
import Image from "next/image";

// Define the frontmatter interface here if it's only used by the Post component
interface Frontmatter {
  title: string;
  date: string;
  excerpt: string;
  cover_image: string;
}

// Export the Post props type for use in other components
export interface PostProps {
  post: {
    slug: string;
    frontmatter: Frontmatter;
  };
}

const greyBlur: string =
  "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA=";

const Post = ({ post }: PostProps) => {
  return (
    <div className="card">
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "15rem",
          marginBottom: "3rem",
        }}
      >
        <Image
          src={post.frontmatter.cover_image}
          alt="cover image"
          fill
          style={{ objectFit: "cover" }}
          unoptimized
          placeholder="blur"
          blurDataURL={greyBlur}
        />
      </div>
      <div className="post-date">Posted on {post.frontmatter.date}</div>
      <h3>{post.frontmatter.title}</h3>
      <p>{post.frontmatter.excerpt}</p>
      <Link href={`/blog/${post.slug}`} className="btn">
        read
      </Link>
    </div>
  );
};

export default Post;
