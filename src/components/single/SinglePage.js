import React, {Component} from 'react';
import './SinglePage.css';
import img11 from './images/11.jpeg'
import img12 from './images/12.jpeg'

const SinglePage = () => {
  const laptopImage = [
    {

        id : 1,
        imageUrl : img11
    },

    {
        id : 2,
        imageUrl : img12

    }

];
  return (
    <div className='single-page-bg-img'>
        <div className='container'>
            <div className='row'>
                <h1>Hi</h1>
               
            </div>
        </div>
    </div>
  )
}

export default SinglePage