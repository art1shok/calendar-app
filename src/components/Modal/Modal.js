import { createPortal } from 'react-dom';
import React from 'react';
import './Modal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsOpened, selectModalInputVales } from '../../store/selectors';
import { closeModal } from '../../store/actions';

export const Modal = () => {
  const isOpened = useSelector(selectIsOpened);
  const { month, day } = useSelector(selectModalInputVales);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return isOpened && createPortal(
    <div className="modal">
      <div
        className="modal__background"
        onClick={handleCloseModal}
      />
      <div
        className="modal__container"
      >
        <button
          type="button"
          className="modal__close"
          onClick={handleCloseModal}
        >
          close
        </button>
        <div className="modal__input-container">
          <label
            className="modal__label"
            htmlFor="month"
          >
            Month
            <input
              type="text"
              id="month"
              className="modal__input"
              value={month}
            />
          </label>

        </div>
        <div className="modal__input-container">
          <label
            htmlFor="day"
            className="modal__label"
          >
            Day
            <input
              type="text"
              id="day"
              value={day}
              className="modal__input"
            />
          </label>
        </div>
      </div>
    </div>, document.getElementById('modal'),
  );
};
