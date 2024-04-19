import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions)

  return (
    <html
      className="
        scroll-smooth"
      suppressHydrationWarning
      lang="es"
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers
          session={session}
        >
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <WhatsappContactButton />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { WhatsappContactButton } from "@/components/WhatsappContactButton";

