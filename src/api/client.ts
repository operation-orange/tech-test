import axios from 'axios';
import { IForecast, ILocation } from '../state/forecast/types';

const client = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5',
});

interface IMain {
  temp: number;
}

interface ICityRecord {
  name: string;
}

interface IForecastRecord {
  dt: number;
  main: IMain;
}

interface IForecastResponse {
  list: IForecastRecord[];
  city: ICityRecord;
}

const transformResponse = (city: ICityRecord, list: IForecastRecord[]): ILocation => {
  const now = new Date().getTime();

  const forecastList = list.reduce<IForecast[]>((acc, item) => {
    const itemTime = item.dt * 1000;

    if (itemTime - now <= 86400000) {
      acc.push({
        date: itemTime,
        temp: item.main.temp,
      });
    }

    return acc;
  }, []);

  return {
    forecastList,
    name: city.name,
  };
};

const getForecast = (location: string) => client.get<IForecastResponse>('/forecast', {
  params: {
    APPID: 'd54e1e446543e2febf6218640168e912',
    q: `${location},gb`,
    units: 'metric',
  },
}).then((response) => transformResponse(response.data.city, response.data.list));

export default {
  getForecast,
};
