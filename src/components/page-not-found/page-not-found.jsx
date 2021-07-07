import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const PageNotFound = () => {
  return (
    <div className="page">
      <Header />
      <section className="page__not-found">
        <p>К сожалению, страница не найдена</p>
      </section>
      <Footer />
    </div>
  );
};

export default PageNotFound;