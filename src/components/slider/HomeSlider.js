import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomeSlider.css'
import itemDetails from "../ItemDetails";


const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false
  };

  return ( 
   <>
    <div className='container-fluid'>
      <div className='row homeslider-row'>
        <Slider {...settings}>
            {
              itemDetails.map((newDetail) => {
                return (
                <div className="slider-div">
                  <img src={newDetail.imageUrl} className="img-fluid"></img>
                  <p>{newDetail.sliderDescription}</p>
                </div>);  
              })
            }
         </Slider>
      </div>
    </div> 
   </>  
  );
}
export default HomeSlider;
