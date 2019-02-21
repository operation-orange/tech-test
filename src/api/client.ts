import axios from 'axios';

const client = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5',
});

export default {
  getForecast: (location: string) => client.get('/forecast', {
    params: {
      APPID: 'd54e1e446543e2febf6218640168e912',
      q: `${location},gb`,
    },
  }),
};
