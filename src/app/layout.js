import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Cat Care",
  description: "cat care website",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
