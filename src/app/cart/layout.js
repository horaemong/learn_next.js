import Link from "next/link";
import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <p>현대카드 무이자이벤트중</p>
        {children}
      </body>
    </html>
  );
}
