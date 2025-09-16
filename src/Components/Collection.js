// components/Collection.js
import React from 'react';
import Navbar from './Navbar';

const Collection = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className="page-content">
        <h1>Our Collection</h1>
        <p>Discover our exquisite timepieces</p>
      </div>
    </div>
  );
};

export default Collection;