import { LangContextProvider } from "@/context/lang.context";
import { textBundle } from "@/util/format.util";
import "./globals.scss";

export const metadata = {
  title: textBundle().logo.title,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: textBundle().logo.title,
    description: "타불라라싸 프로젝트",
    // url: "http://localhost:3000",
    // siteName: textBundle().logo.title,
    images: [
      {
        // url: "https://nextjs.org/og.png",
        url: "/opengraph.png",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LangContextProvider>{children}</LangContextProvider>
      </body>
    </html>
  );
}
