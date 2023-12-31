import axios from 'axios';

export async function fetchImages(search, page) {
  const API_KEY = '37793380-846502e5eebe78c5507a83779';
  const URL = `https://pixabay.com/api?q=${search}&key=${API_KEY}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`;

  try {
    const response = await axios.get(URL);
    const data = await response.data;

    return response.data;
  } catch (err) {
    return console.log(err);
  }
}
