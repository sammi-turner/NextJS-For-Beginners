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
