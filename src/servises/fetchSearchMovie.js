import axios from 'axios';

// const fetchLinks = {
//   URL: 'https://api.themoviedb.org/3/search/movie',
//   KEY: '39009e1fbdefdc1ea3efc46fca7ed6e3',
// };

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTAwOWUxZmJkZWZkYzFlYTNlZmM0NmZjYTdlZDZlMyIsInN1YiI6IjY0N2NkMjBiMjYzNDYyMDBmOTI5NWRkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LAF8CyGvOhHBE3e-x8-tvz8nNI4gXsXcDzwmj4Y_YN0',
//   },
// };

export const fetchSearchMovie = async () => {
  const response = await axios
    .get(`${fetchLinks.URL}?query=${query}&api_key=${fetchLinks.KEY}`, options)
    .catch(function (error) {
      if (error.response.status !== 200) {
        return alert(error.response.data.status_message);
      }
    });
  return response;
};
