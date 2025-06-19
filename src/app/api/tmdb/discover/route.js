import React from "react";

export async function GET(req) {
  // console.log("Proxy Route Received", { req });
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || 1;
  const genre = searchParams.get("with_genres");
  const year = searchParams.get("primary_release_year");
  const language = searchParams.get("with_original_language");

  const url = new URL("https://api.themoviedb.org/3/discover/movie");
  console.log("Final TMDB URL", url.toString());

  url.searchParams.append("api_key", process.env.TMDB_API_KEY);
  url.searchParams.append("language", "en-US");
  url.searchParams.append("page", page);
  url.searchParams.append("include_adult", false);

  if (genre && genre.trim() !== "") {
    url.searchParams.append("with_genres", genre);
  }
  if (year && year.trim() !== "") {
    url.searchParams.append("primary_release_year", year);
  }
  if (language && language.trim() !== "") {
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
