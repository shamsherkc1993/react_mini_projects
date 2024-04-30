import React, {Component} from 'react';
import './SinglePage.css';
import Header from '../common/Header';
import Footer from '../common/Footer';

const SinglePage = () => {
  
  return (
    <div className='single-page-bg-img'>
        <div className='container-fluid'>
            <div className='row'>
                <Header />
                <p>singlepage</p>
                <Footer />
               
            </div>
        </div>
    </div>
  )
}

export default SinglePage