import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import ScrollAnimations from "@/components/ScrollAnimations";
import "./globals.css";

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingFont = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oluwaferanmi Sokunbi — Frontend & Web Developer",
  description:
    "Frontend and web development for businesses and teams. Based in Abeokuta, Nigeria; available for freelance and agency projects.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body>
        <MotionProvider>
          <ScrollAnimations />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
