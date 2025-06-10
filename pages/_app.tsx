import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
