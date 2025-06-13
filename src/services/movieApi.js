const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Text-based search
// TMDB does fuzzy and language-aware matching automatically
export const searchMovies = async (term, page = 1) => {
  try {
    const url = new URL(`${BASE_URL}/search/movie`);
    url.searchParams.append("api_key", API_KEY);
    url.searchParams.append("language", "en-US");
    url.searchParams.append("query", term);
    url.searchParams.append("page", page);
    url.searchParams.append("include_adult", false);

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    // log full data
    console.log("Full Data:", data);

    return data;
  } catch (error) {
    console.error("Error fetching movies", error);
  }
};

// Filter-based search using TMDB's built-in filtering engine called /discover
// TMDB applies the filters directly at their server-side database level before sending the data to the client
export const discoverMovies = async (filters = {}, page = 1) => {
  try {
    const url = new URL(`${BASE_URL}/discover/movie`);
    url.searchParams.append("api_key", API_KEY);
    url.searchParams.append("language", "en-US");
    url.searchParams.append("page", page);
    url.searchParams.append("include_adult", false);

    if (filters.genres) {
      url.searchParams.append("with_genres", filters.genres);
    }
    if (filters.year) {
      url.searchParams.append("primary_release_year", filters.year);
    }
    if (filters.rating) {
      url.searchParams.append("vote_average.gte", filters.rating); // to get movies with average rating greater than or equal to the specified rating
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movies", error);
  }
};

// Language support using TMDB /configuration/languages API
export const fetchLanguages = async () => {
  try {
    const url = new URL(`${BASE_URL}/configuration/languages`);
    url.searchParams.append("api_key", API_KEY);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching languages", error);
  }
};

export const fetchTrendingMovies = async () => {
  try {
    const url = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error("Fetch error", err);
  }
};

export const fetchTopRatedMovies = async () => {
  try {
    const url = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error("Fetch error", err);
  }
};

export const fetchNowPlayingMovies = async () => {
  try {
    const url = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error("Fetch error", err);
  }
};

export const fetchPopularMovies = async (page = 1) => {
  try {
    const url = new URL(`${BASE_URL}/movie/popular`);
    url.searchParams.append("api_key", API_KEY);
    url.searchParams.append("language", "en-US");
    url.searchParams.append("page", page);
    url.searchParams.append("include_adult", false);

    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error("Fetch error", err);
  }
};
