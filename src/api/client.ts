import { IForecast } from '../state/forecast/types';

export default {
  get: () => new Promise<IForecast[]>((resolve) => {
    setTimeout(() => resolve([{id: 1}]), 2000);
  }),
};
