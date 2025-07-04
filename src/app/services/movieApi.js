// Modified movieApi.js (client-side) to call our own backend (our proxy), not the TMDB API directly.
// const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
// const BASE_URL = "https://api.themoviedb.org/3";

// Text-based search
// TMDB does fuzzy and language-aware matching automatically
export const searchMovies = async (term, page = 1) => {
  try {
    const origin =
      typeof window !== "undefined"
        ? window.location.origin
        : "http://localhost:3000"; // or prod domain

    const url = new URL("/api/tmdb/search", origin);

    url.searchParams.append("query", encodeURIComponent(term));
    url.searchParams.append("page", page);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    // log full data
    console.log("Full Data:", data);

    return data;
  } catch (error) {
    console.error("Error fetching movies from proxy", error);
  }
};

// Filter-based search using TMDB's built-in filtering engine called /discover
// TMDB applies the filters directly at their server-side database level before sending the data to the client
export const discoverMovies = async (filters = {}, page = 1) => {
  try {
    const origin =
      typeof window !== "undefined"
        ? window.location.origin
        : "http://localhost:3000"; // or prod domain
    const url = new URL("/api/tmdb/discover", origin);
    // url.searchParams.append("api_key", API_KEY);
    // url.searchParams.append("language", "en-US");
    url.searchParams.append("page", filters.page || 1);
    // url.searchParams.append("include_adult", false);

    // if (filters.query) { // this is ignored silently by TMDB beacuse /discover/movie does not support query param
    //   url.searchParams.append("query", filters.query);
    // }
    if (filters.genre) {
      url.searchParams.append("with_genres", filters.genre);
    }
    if (filters.year) {
      url.searchParams.append("primary_release_year", filters.year);
    }
    if (filters.language) {
      url.searchParams.append("with_original_language", filters.language); // to get movies with average rating greater than or equal to the specified rating
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Discover movies", error);
    return { results: [], total_pages: 1 };
  }
};

export const fetchTrendingMovies = async () => {
  try {
    const url = new URL("/api/tmdb/trending", window.location.origin);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error("Fetch error", err);
  }
};

// export const fetchTopRatedMovies = async () => {
//   try {
//     const url = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data.results;
//   } catch (err) {
//     console.error("Fetch error", err);
//   }
// };

// export const fetchNowPlayingMovies = async () => {
//   try {
//     const url = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data.results;
//   } catch (err) {
//     console.error("Fetch error", err);
//   }
// };

export const fetchPopularMovies = async (page = 1) => {
  try {
    const url = new URL("/api/tmdb/popular", window.location.origin);
    url.searchParams.append("page", page);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error("Fetch error", err);
  }
};
