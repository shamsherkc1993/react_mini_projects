import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./BuyitemList.css";
import SinglePage from "./single/SinglePage";
import { HomeFakeData } from "../index";

const BuyItemList = () => {
  const allData = useContext(HomeFakeData);
  return (
    <section className="buy-item-section">
      <div className="container">
        <div className="row">
          <h1>
            Latest <span className="product">Products</span>
          </h1>
          {allData.map((buyItem) => {
            return (
              <div className="col-sm-4">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={buyItem.imageUrl}
                    alt="product1-image"
                  />
                  <div class="card-body">
                    <h4 class="card-title">{buyItem.itemName}</h4>
                    <p class="card-text" style={{ padding: "10px" }}>
                      {buyItem.description.substring(0, 200)} ...
                    </p>
                    <Link
                      to={`/homesingleproduct/${buyItem.id}`}
                      element={<SinglePage />}
                      className="viewmorebtn"
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
    </section>
  );
};

export default BuyItemList;
