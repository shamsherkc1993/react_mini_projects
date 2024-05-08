import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AllFakeData } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import "./Product.css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import SinglePage from "./single/SinglePage";

const Product = () => {
  const allData = useContext(AllFakeData);
  const [allDetails, setAllDetails] = useState(allData);
  const [search, setSearch] = useState("");

  const greaterHandler = () => {
    const pricefreaterThan100FilteredData = allData.filter((key) => {
      return key.price > 100;
    });
    setAllDetails(pricefreaterThan100FilteredData);
  };

  const lessThan80Handler = () => {
    const priceLessThan80FilteredData = allData.filter((key) => {
      return key.price < 80;
    });
    setAllDetails(priceLessThan80FilteredData);
  };

  const lessThan40Handler = () => {
    const priceLessThan40FilteredData = allData.filter((key) => {
      return key.price < 40;
    });
    setAllDetails(priceLessThan40FilteredData);
  };

  const lessThan20Handler = () => {
    const priceLessThan20FilteredData = allData.filter((key) => {
      return key.price < 20;
    });
    setAllDetails(priceLessThan20FilteredData);
  };

  const viewAll = () => {
    const viewallData = allData;
    setAllDetails(viewallData);
  };

  const moreThanOrEqualFourStar = () => {
    const moreEqualFour = allData.filter((key) => {
      return key.rating.rate > 4;
    });
    setAllDetails(moreEqualFour);
  };

  const lessThanFourStar = () => {
    const lessThanFourStar = allData.filter((key) => {
      return key.rating.rate < 4;
    });
    setAllDetails(lessThanFourStar);
  };

  // const changehandler = (e) => {
  //     setSearch(e.target.value)
  // }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <br />

            {/* <button type="submit" class="btn btn-primary" onClick={greaterHandler}>100 above</button> */}

            <div className="sideProductList">
              <h2>Filter by Item Name</h2>
              <br />
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />{" "}
              <br />
              <h2>Filter by Price</h2>
              <br />
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  onClick={viewAll}
                />
                <label class="form-check-label" for="check2">
                  All Items
                </label>
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  onClick={greaterHandler}
                />
                <label class="form-check-label" for="check2">
                  greater than 100
                </label>
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  onClick={lessThan80Handler}
                />
                <label class="form-check-label" for="check2">
                  less than 80
                </label>
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  onClick={lessThan40Handler}
                />
                <label class="form-check-label" for="check2">
                  less than 40
                </label>
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  onClick={lessThan20Handler}
                />
                <label class="form-check-label" for="check2">
                  less than 20
                </label>
              </div>
              <br />
              <h2>Filter by Rating</h2>
              <div className="select-bu-check">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    onClick={viewAll}
                  />
                  <label class="form-check-label" for="check2">
                    View All
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    onClick={moreThanOrEqualFourStar}
                  />
                  <label class="form-check-label" for="check2">
                    4 or more than 4 star
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    onClick={lessThanFourStar}
                  />
                  <label class="form-check-label" for="check2">
                    less than 4 star
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <br />
            <div className="row">
              {/* <img src={jsonDetail[1].image} className='img-banner'/> */}
              {allDetails
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.title.toLowerCase().includes(search);
                })
                .map((dataFetch) => {
                  return (
                    <div className="col-sm-4">
                      <div class="card">
                        <img
                          class="card-img-top"
                          src={dataFetch.image}
                          alt="product1-image"
                        />
                        <div class="card-body">
                          <h5 class="card-title">
                            {dataFetch.title.substring(0, 12)}
                          </h5>
                          <p class="card-text">
                            <span className="pricespan">Price : </span>
                            {dataFetch.price}{" "}
                            <span className="pricespan">Rating :</span>{" "}
                            {dataFetch.rating && dataFetch.rating.rate}
                            <FontAwesomeIcon icon={faStar} />{" "}
                          </p>
                          <Link
                            to={`/singleproduct/${dataFetch.id}`}
                            element={<SinglePage />}
                            className="product-btn"
                          >
                            View Detail
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
