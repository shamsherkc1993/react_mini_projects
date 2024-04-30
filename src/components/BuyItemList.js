import React from 'react';
import './BuyitemList.css';
import itemDetails from './ItemDetails';
import { NavLink } from 'react-router-dom';
import SinglePage from './single/SinglePage';

const BuyItemList = () => {
  return (
    <section className='buy-item-section'>
        <div className='container'>
            <div className='row'>
             <h1>Latest <span className='product'>Products</span></h1>
                    {
                        itemDetails.map((buyItem) => {
                            return (
                                 <div className='col-sm-4'>
                                    <div class="card">
                                        <img class="card-img-top" src={buyItem.imageUrl}alt="product1-image"/>
                                        <div class="card-body">
                                            <h4 class="card-title">{buyItem.itemName}</h4>
                                            <p class="card-text">{buyItem.description} ...</p>
                                            <NavLink to="/singleproduct/id" element={<SinglePage />} className=" viewmorebtn">View Detail</NavLink>
                                        </div>
                                    </div>
                                 </div>
                            );
                        })
                    }
                   
            </div>
        </div>
    </section>
  )
}

export default BuyItemList