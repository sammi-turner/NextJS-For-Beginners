import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container">
      <Link href="/" passHref>
        <h3>Sammi Turner (2025)</h3>
      </Link>
    </footer>
  );
};

export default Footer;
