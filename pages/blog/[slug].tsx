import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import Image from "next/image";

// Define types for the frontmatter data
interface Frontmatter {
  title: string;
  date: string;
  cover_image: string;
}

// Define types for the component props
interface PostPageProps {
  frontmatter: Frontmatter;
  content: string;
  slug: string;
}

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
        <Image src={cover_image} alt="" />
        <div className="post-body">
          <MarkdownRenderer content={content} />
        </div>
      </div>
    </div>
  );
};

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

export default PostPage;
