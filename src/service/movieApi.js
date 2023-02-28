import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const API_KEY = '48efdd88d1650cc055b0f5a157a41228';

export async function getMovies(searchQuery) {
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie?';
  try {
    Loading.pulse();
    const response = await axios.get(BASE_URL, {
      params: {
        api_key: API_KEY,
        query: searchQuery,
        page: 1,
        include_adult: false,
      },
    });
    console.log(response.data.total_results);
    if (searchQuery && response.data.total_results === 0) {
      return Notify.failure(`No movies with name ${searchQuery}`);
    }

    return response.data.results;
  } catch (e) {
    Notify.failure('Something went wrong...');
    console.log(e);
  } finally {
    Loading.remove();
  }
}

export async function getTrendMovies() {
  const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
  try {
    Loading.pulse();
    const response = await axios.get(BASE_URL, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (e) {
    Notify.failure('Something went wrong...');
    console.log(e);
  } finally {
    Loading.remove();
  }
}

export async function getFullInfo(id) {
  try {
    Loading.pulse();
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    Notify.failure('Something went wrong...');
    console.log(error);
  } finally {
    Loading.remove();
  }
}

export async function getMovieCast(id) {
  try {
    Loading.pulse();
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    Notify.failure('Something went wrong...');
    console.log(error);
  } finally {
    Loading.remove();
  }
}

export async function getMovieReviews(id) {
  try {
    Loading.pulse();
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    Notify.failure('Something went wrong...');
    console.log(error);
  } finally {
    Loading.remove();
  }
}
