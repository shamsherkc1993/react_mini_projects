import React from 'react';
import Header from './common/Header';
import HomeSlider from './slider/HomeSlider';
import BuyItemList from './BuyItemList';
import Footer from './common/Footer';

function Home() {

  return (
    <section>
        <Header/>
       <HomeSlider />
       <BuyItemList />
       <Footer />
    </section>
  )
}

export default Home;