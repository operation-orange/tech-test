import axios from 'axios';
import { IForecast } from '../state/forecast/types';

const client = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5',
});

interface IMain {
  temp: number;
}

interface IForecastRecord {
  dt: number;
  main: IMain;
}

interface IForecastResponse {
  list: IForecastRecord[];
}

const transformResponse = (data: IForecastRecord[]): IForecast[] => {
  const now = new Date().getTime();

  return data.reduce<IForecast[]>((acc, item) => {
    const itemTime = item.dt * 1000;

    if (itemTime - now <= 86400000) {
      acc.push({
        date: new Date(itemTime),
        temp: item.main.temp,
      });
    }

    return acc;
  }, []);
};

const getForecast = (location: string) => client.get<IForecastResponse>('/forecast', {
  params: {
    APPID: 'd54e1e446543e2febf6218640168e912',
    q: `${location},gb`,
  },
}).then((response) => transformResponse(response.data.list));

export default {
  getForecast,
};
