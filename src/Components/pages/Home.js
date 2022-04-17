import React from 'react';
import Carousel from '../Carousel';
import ItemListContainer from "../ItemListContainer";
import Footer from '../Footer';
import '../../App.css';

function Home() {
  return (
    <>
      <Carousel />
      <ItemListContainer />
      <Footer />
    </>
  )
}

export default Home