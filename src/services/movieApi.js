const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const searchMovies = async (term, page = 1) => {
  try {
    const url = new URL(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${term}&page=${page}`);
    url.searchParams.append("api_key", API_KEY);
    url.searchParams.append("language", "en-US");
    url.searchParams.append("query", term);
    url.searchParams.append("page", page);
    url.searchParams.append("include_adult", false)
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movies", error);
  }
}

export const fetchTrendingMovies = async () => {
  try {
    const url = `${BASE_URL}/trending/movie/week?api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error("Fetch error", err);
  }
};

export const fetchTopRatedMovies = async () => {
  try {
    const url = `${BASE_URL}/movie/top_rated?api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error("Fetch error", err);
  }
};

export const fetchNowPlayingMovies = async () => {
  try {
    const url = `${BASE_URL}/movie/now_playing?api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error("Fetch error", err);
  }
};

