import React, { useState, useContext } from "react";
import "./SinglePage.css";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useParams } from "react-router-dom";
import { AllFakeData } from "../../index";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SinglePage = () => {
  const allData = useContext(AllFakeData);
  console.log(allData);
  const [allDetails, setAllDetails] = useState(allData);
  const { id } = useParams();

  return (
    <div>
      <Header />

      <div className="container-fluid singleimage">
        <br />
        <br />
        <br />
        <div className="row">
          {allDetails.map((value) => {
            return id == value.id ? (
              <>
                <div className="col-sm-6">
                  <img src={value.image} alt="single-product-image"></img>
                </div>
                <div className="col-sm-6 dtail-8">
                  <h4>Product Description</h4>
                  <p>
                    <span className="all-span">Item Name:</span> {value.title}{" "}
                  </p>
                  <p>
                    <span className="all-span">Item Description: </span>
                    {value.description}
                  </p>
                  <p>
                    <span className="all-span">category:</span> {value.category}{" "}
                  </p>
                  <p>
                    <span className="all-span">Rating: </span>
                    {value.rating.rate} <FontAwesomeIcon icon={faStar} />
                  </p>
                  <p>
                    <span className="all-span">Price: </span>
                    {value.price}
                  </p>
                </div>
              </>
            ) : null;
          })}
        </div>
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default SinglePage;
