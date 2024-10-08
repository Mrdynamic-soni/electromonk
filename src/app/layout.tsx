// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Head from "next/head";
// import { ThemeProvider } from "@/contexts/ThemeContext";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "electro monk",
//   description: "Generated by saurabh soni",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <Head>
//         <link rel="icon" href="/fevicon.ico" />
//       </Head>
//       <body className={inter.className}>
//         <ThemeProvider>{children}</ThemeProvider>
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { ThemeProvider } from "@/contexts/ThemeContext";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "electro monk",
  description: "Generated by Saurabh Soni",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=New+Amsterdam&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={`${nunito.className} font-new-amsterdam`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
