import "./globals.css";

export const metadata = {
  title: "Fintrix",
  description: "Spend Smarter, Save Better",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
