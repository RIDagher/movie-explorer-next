import Favorites from "../components/Favorites";
import { auth } from "../lib/auth.config";

export default async function FavoritesPage() {
  const session = await auth();

  if (!session) {
    return (
      <main>
        <p className="text-center text-gray-400 text-lg">
          You must be signed in to view favorites.
        </p>
      </main>
    );
  }
  return (
    // Added main with Top padding so it doesn't hide behind nav
    <main className="space-y-12">
      <Favorites />
    </main>
  );
}
