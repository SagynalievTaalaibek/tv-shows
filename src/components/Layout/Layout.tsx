import React from 'react';
import Navbar from '../Navbar/Navbar';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header className="mb-2 bg-primary">
        <Navbar />
      </header>
      <main className="container">{children}</main>
    </>
  );
};

export default Layout;
