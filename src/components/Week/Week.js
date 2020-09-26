import React from 'react';
import Day from '../Day/Day';
import './Week.scss';

const Week = ({
  date, month,
}) => {
  const days = [];
  let newDate = date.clone();

  for (let i = 0; i < 7; i++) {
    const dayData = {
      number: newDate.format('DD'),
      isCurrentMonth: newDate.month() === month,
      isToday: newDate.isSame(new Date(), 'day'),
      date: newDate,
    };

    days.push(
      <Day
        key={i}
        dayData={dayData}
        month={newDate.format('MMMM')}
      />,
    );

    newDate = newDate.clone();
    newDate.add(1, 'day');
  }

  return (
    <div className="week__row" key={days[0]}>
      {days}
    </div>
  );
};

export default Week;
