import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { sortByDate } from "../utils";
import Post from "@/components/Post";

// Define types for your frontmatter data
interface Frontmatter {
  title: string;
  date: string;
  excerpt?: string;
  cover_image?: string;
}

export interface PostProps {
  post: {
    slug: string;
    frontmatter: Frontmatter;
  };
}

// Define props for the Home component
interface HomeProps {
  posts: PostProps["post"][]; // Array of posts matching the Post component's expected type
}

export default function Home({ posts }: HomeProps) {
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
      </Head>

      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

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
