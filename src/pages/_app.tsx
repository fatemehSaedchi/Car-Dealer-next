import "@/styles/globals.css";
import "@/styles/icons.css";
import type { AppProps } from "next/app";
import {Layout} from "@/components";
import {Montserrat} from "next/font/google";


const montserrat = Montserrat({
    subsets :['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
          <style jsx global>{`
              html {
                  font-family: ${montserrat.style.fontFamily};
              }
          `}</style>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </>
  );
}
