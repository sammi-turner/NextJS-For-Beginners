import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
};

export default MyApp;
