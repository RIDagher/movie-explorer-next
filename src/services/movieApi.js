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
