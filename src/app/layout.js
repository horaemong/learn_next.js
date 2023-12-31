import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div className="header">
          <Link href="/">이미지</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
