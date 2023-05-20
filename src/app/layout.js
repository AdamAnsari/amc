import "./globals.css";
import Header from "@/components/header";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "AMC",
  description: "AMC Descriptions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
