import React from 'react';
import { useDispatch } from 'react-redux';
import './Day.scss';
import { openModal } from '../../store/actions';

const Day = ({
  dayData: {
    date, isCurrentMonth, isToday, number,
  },
  month,
}) => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal({ month, day: date.format('Do dddd') }));
  };

  return (
    <>
      <span
        key={date.toString()}
        className={`day${isToday ? ' day--active' : ''}
      ${isCurrentMonth ? '' : ' day--another-month'}`}
        onClick={handleOpenModal}
      >
        {number}
      </span>
    </>
  );
};

export default Day;
