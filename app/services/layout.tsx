import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StickyMobileCTA from "../components/StickyMobileCTA";

export const metadata: Metadata = {
  description:
    "Doctor HVACR service detail pages — AC repair, heating, electrical, and plumbing services in Cherry Hill, NJ.",
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
