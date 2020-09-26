import React from 'react';
import Calendar from '../Calendar/Calendar';
import './HomePage.scss';

const HomePage = () => (
  <div className="home-page">
    <div className="home-page__container">
      <div className="home-page__left">
        <div className="home-page__text-container">
          <h1 className="home-page__title">
            Choose the day
            <br />
            for the meeting
          </h1>

          <p className="home-page__text">
            We encourage you to book your
            <br />
            appointment online.
            <br />
            This will save you time.
          </p>
        </div>
      </div>

      <Calendar />
    </div>
  </div>
);

export default HomePage;
