import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container">
      <Link href="/" passHref>
        <h3>Sammi Turner (2025)</h3>
      </Link>
    </footer>
  );
}
