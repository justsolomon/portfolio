import React from 'react';
import '../../assets/scss/main.scss';

import Header from './Header';

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default Layout;
