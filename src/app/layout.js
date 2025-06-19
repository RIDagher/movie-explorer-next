import Providers, { SessionProvider } from "./components/Providers";
import Navbar from "./components/Navbar";
import { FavoritesProvider } from "./context/FavoritesContext";
import { SearchProvider } from "./context/SearchContext";

import "./styles/globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: " MovieExplorer",
  description: "Discover and explore movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-dark text-light font-sans">
        <Providers>
          <SearchProvider>
            <FavoritesProvider>
              <Navbar />
              <main className="pt-24 p-6 space-y-12">{children}</main>
              <Toaster position="top-center" reverseOrder={false} />
            </FavoritesProvider>
          </SearchProvider>
        </Providers>
      </body>
    </html>
  );
}
