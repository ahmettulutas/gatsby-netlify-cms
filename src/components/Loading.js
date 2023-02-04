import React from 'react';

export const Loading = ({ type = 'green', size = '' }) => (
  <div className={`loader-container ${type} ${size}`}>
    <span className="dot"></span>
    <span className="dot"></span>
    <span className="dot"></span>
    <span className="dot"></span>
  </div>
);
