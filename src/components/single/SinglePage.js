import React, {Component, useState} from 'react';
import './SinglePage.css';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { useFetcher, useParams, useLocation } from 'react-router-dom';
import jsonDetail from '../FakeJson';


const SinglePage = (props) => {
  const [allDetails, setAllDetails] = useState(jsonDetail);
  const location = useLocation();
  const {id} = useParams();
 
  return (
    <div className='single-page-bg-img'>
        <div className='container-fluid'>
            <div className='row'>
                <Header />
                {/* <p>singlepage: {id}</p> */}
                {/* {(newid === newid) ? <p>Hello</p> : <p>reject</p>} */}
                {
                  // allDetails.map((value) => {
                  //   return <p>{value.id} price is: {value.price}</p>
                  // })

                 allDetails.map((value) => {
                  return (
                    (id==value.id) ?
                    <div className='container'>
                      <div className='row singleimage'>
                        <div className="col-sm-4">
                          <img src={value.image} alt="single-product-image"></img>
                        </div>
                        <div className="col-sm-8 dtail-8">
                          <h4>Product Description</h4>
                          <p><span className='all-span'>Item Name:</span> {value.title} </p>
                          <p><span className='all-span'>Item Description: </span>{value.description}</p>
                          <p><span className='all-span'>category:</span> {value.category} </p>
                          <p><span className='all-span'>Rating: </span>{value.rating.rate}</p>
                          <p><span className='all-span'>Price: </span>{value.price}</p>
                        </div>

                      </div>
                    </div> : ""
                  );
                 })
                  
                  
                  

                }
                <Footer />
               
            </div>
        </div>
    </div>
  )
}

export default SinglePage