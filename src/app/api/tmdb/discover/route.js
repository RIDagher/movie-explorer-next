import React from "react";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || 1;
  const genre = searchParams.get("genre");
  const year = searchParams.get("year");
  const language = searchParams.get("language");

  const url = new URL("https://api.themoviedb.org/3/discover/movie");
  url.searchParams.append("api_key", process.env.TMDB_API_KEY);
  url.searchParams.append("language", "en-US");
  url.searchParams.append("page", page);
  url.searchParams.append("include_adult", false);

  if (genre) {
    url.searchParams.append("with_genres", genre);
  }
  if (year) {
    url.searchParams.append("primary_release_year", year);
  }
  if (language) {
    url.searchParams.append("with_original_language", language);
  }
  try {
    const res = await fetch(url);
    const data = await res.json();
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.error("Discoverfetch error:", error);
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
    });
  }
}
