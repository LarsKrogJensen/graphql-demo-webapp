import React from 'react';
import './SuperComponent.css';

export default ({ children = 'DEFAULT TEXT'}) => (
  <div className="main">
    <div className="title">
      This is my super component
    </div>
    {children}
  </div>
);
