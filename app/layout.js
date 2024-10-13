import { Libre_Bodoni } from "next/font/google";
import "./globals.css";

const libre = Libre_Bodoni({
  weight: ["400", "700"],
  variable: "--font-libre-bodoni",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Leland Takehome",
  description: "Takehome assessment - Skyler Crane",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${libre.variable} antialiased`}>{children}</body>
    </html>
  );
}
