import dateformat from 'dateformat';
import React from 'react';
import { ILocation } from '../state/forecast/types';

interface IProps {
  data: ILocation[];
}

const datesList = (data: ILocation[]) => {
  const dates = data.reduce<number[]>((acc, location) => {
    return [...acc, ...location.forecastList.map((entry) => entry.date)];
  }, []).sort((a, b) => a - b);
  const uniqueDates = Array.from(new Set(dates));
  return uniqueDates;
};

const renderTempColumns = (dates: number[], location: ILocation) => dates.map((date) => {
  const dateEntry = location.forecastList.find((entry) => entry.date === date);
  const temp = dateEntry ? dateEntry.temp : null;

  return (
    <div className="table__item" key={date}>{temp}&deg;</div>
  );
});

const renderRows = (dates: number[], data: ILocation[]) => data.map((location) => (
  <div className="table__row table__body" key={location.name}>
    <div className="table__item table__item__first">{location.name}</div>
    {renderTempColumns(dates, location)}
  </div>
));

export const ForecastList = ({ data }: IProps) => {
  const dates = datesList(data);
  return (
    <div className="table">
      <div className="table__row table__head">
        <div className="table__item table__item__first">City</div>
        {dates.map((date) => <div className="table__item" key={date}>{dateformat(date, 'ddd h tt')}</div>)}
      </div>
      {renderRows(dates, data)}
    </div>
  );
};

export default ForecastList;
