import React, { useState } from 'react';
import moment from 'moment';
import './Calendar.scss';
import Week from '../Week/Week';
import { Modal } from '../Modal/Modal';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(moment());

  const previous = () => {
    setCurrentDate(currentDate.clone().subtract(1, 'month'));
  };

  const next = () => {
    setCurrentDate(currentDate.clone().add(1, 'month'));
  };

  const renderWeeks = () => {
    const weeks = [];
    let done = false;
    const startDate = currentDate
      .clone()
      .startOf('month')
      .add('w' - 1)
      .day('Sunday');
    let count = 0;
    let monthIndex = startDate.month();

    while (!done) {
      weeks.push(
        <Week
          key={count}
          date={startDate.clone()}
          month={currentDate.month()}
        />,
      );

      startDate.add(1, 'w');

      done = count++ > 2 && monthIndex !== startDate.month();
      monthIndex = startDate.month();
    }

    return weeks;
  };

  const renderMonthLabel = () => (
    <span className="calendar__month-label">
      {currentDate.format('MMMM YYYY')}
    </span>
  );

  return (
    <section className="calendar">
      <div className="calendar__container">
        <div className="calendar__title">
          <div
            className="calendar__arrow calendar__arrow-left"
            onClick={previous}
          />
          {renderMonthLabel()}
          <div
            className="calendar__arrow calendar__arrow-right"
            onClick={next}
          />
        </div>
        <div className="calendar__month">{renderWeeks()}</div>
        <div className="calendar__day-rows">
          <span className="calendar__days-names">S</span>
          <span className="calendar__days-names">M</span>
          <span className="calendar__days-names">T</span>
          <span className="calendar__days-names">W</span>
          <span className="calendar__days-names">T</span>
          <span className="calendar__days-names">F</span>
          <span className="calendar__days-names">S</span>
        </div>
      </div>

      <Modal />
    </section>
  );
};

export default Calendar;
