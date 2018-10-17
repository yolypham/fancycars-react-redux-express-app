import React from 'react';
import CarList from './car/carList';
import CarFilter from './car/carFilter';
import NavBar from './navbar';
import Footer from './footer';

const home = () => (
  <div>
    <NavBar />
    <div className="content-section">
      <div className="album py-5 bg-light">
        <div className="container items-section">
          <CarFilter />
          <CarList />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default home;
