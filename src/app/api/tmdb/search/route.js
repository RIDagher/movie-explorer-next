export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");
  const page = searchParams.get("page") || 1;

  if (!query) {
    return new Response(JSON.stringify({ message: "Missing query" }), {
      status: 400,
    });
  }

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;

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
