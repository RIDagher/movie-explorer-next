// src/app/api/movies/[id]/route.js

export const dynamic = "force-dynamic"; //  Required to avoid static optimization warning
export const fetchCache = "force-no-store"; //  disables fetch caching — which is needed for truly dynamic params like id

export async function GET(req, context) {
  const { params } = context;
  const id = params.id;

  const apiKey = process.env.TMDB_API_KEY;

  if (!apiKey) {
    return new Response("TMDB API key not found", { status: 500 });
  }

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    );

    if (!res.ok) {
      return new Response("Failed to fetch movie details", {
        status: res.status,
      });
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (err) {
    console.error("Fetch Error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
