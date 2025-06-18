import React from "react";

export async function GET(req) {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
    });
  }
}
