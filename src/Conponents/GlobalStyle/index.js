// GlobalStyle.js
import React from 'react';
import './GlobalStyle.scss'; // Nếu bạn sử dụng SCSS

const GlobalStyles = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default GlobalStyles;