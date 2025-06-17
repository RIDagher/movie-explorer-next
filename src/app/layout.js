import Navbar from "./components/Navbar";
import { FavoritesProvider } from "./context/FavoritesContext";
import { SearchProvider } from "./context/SearchContext";
import SessionWrapper from "./components/SessionWrapper";
import "./styles/globals.css";

export const metadata = {
  title: "MovieExplorer",
  description: "Discover and explore movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-dark text-light font-sans">
        <SessionWrapper>
          <SearchProvider>
            <FavoritesProvider>
              <Navbar />
              <main className="pt-24 p-6 space-y-12">{children}</main>
            </FavoritesProvider>
          </SearchProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
