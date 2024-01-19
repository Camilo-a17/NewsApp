// api.js
import axios from 'axios';

const apiKey = '2a395fe5459f4348a8ca8e2bbdb7290b';
const apiUrl = 'https://newsapi.org/v2/top-headlines';

const getNews = async (country = 'co', category = 'general') => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        country: country,
        category: category,
        apiKey: apiKey,
      },
    });

    console.log('Respuesta de la API:', response.data);

    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

export { getNews };
