import React from "react";

const apiKey = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

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
