import axios from 'axios';
// import { toast } from 'react-toastify/dist/components';
const API_KEY = '48efdd88d1650cc055b0f5a157a41228';

export async function getMovies(searchQuery) {
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie?';
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        api_key: API_KEY,
        query: searchQuery,
        page: 1,
        include_adult: false,
      },
    });

    // this.totalItems = response.data.total_results;

    // if (this.totalItems === 0) {
    //   return;
    // }

    return response.data.results;
  } catch (e) {
    // toast.error('Oops... Something went wrong', {
    //   position: 'top-right',
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: 'light',
    // });
    console.log(e);
  } finally {
    // Loading.remove();
  }
}

export async function getTrendMovies() {
  const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        api_key: API_KEY,
      },
    });
    console.log(response.data.results);
    return response.data.results;
  } catch (e) {
    // toast.error('Oops... Something went wrong', {
    //   position: 'top-right',
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: 'light',
    // });
    console.log(e);
  } finally {
    // Loading.remove();
  }
}

export async function getFullInfo(id) {
  try {
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
    console.log(error);
  }
}

export async function getMovieCast(id) {
  try {
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
    console.log(error);
  }
}

export async function getMovieReviews(id) {
  try {
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
    console.log(error);
  }
}
