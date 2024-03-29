import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const LayoutDefault = ({ children }) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" hideSignin={true}/>
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);

// <Banner />

export default LayoutDefault;  