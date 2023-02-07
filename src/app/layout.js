import "./globals.css";
import Header from "@/components/Header";
import Provider from "@/app/Provider";
import Navbar from "@/components/Navbar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {/* Header */}

          {/* SearchBar */}
          <Header />
          <Navbar />

          {children}
        </Provider>
      </body>
    </html>
  );
}
