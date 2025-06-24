import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Header />
      <main className="container">
        <Component {...pageProps} />
        <Analytics />
      </main>
      <Footer />
    </div>
  );
};

export default MyApp;
