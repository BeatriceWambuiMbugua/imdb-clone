import "./globals.css";
import Header from "@/components/Header";
import Provider from "@/app/Provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {/* Header */}
          {/* Navbar */}
          {/* SearchBar */}
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
