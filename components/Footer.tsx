import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container">
      <Link href="/" passHref>
        <h2>Sammi Turner (2025)</h2>
      </Link>
    </footer>
  );
}
