import Footer from "../common/Footer";
import Header from "../common/Header";
import { HomeFakeData } from "../../index";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import "./HomeSingle.css";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeSingle = () => {
  const homedatas = useContext(HomeFakeData);
  const { homeproductid } = useParams();
  console.log(homedatas);

  return (
    <>
      <Header />
      <div className="container-fluid maincontainerhomeprodict">
        <div className="row home-product-row">
          {homedatas.map((value) => {
            return homeproductid == value.id ? (
              <>
                <div class="col-sm-6">
                  <img src={value.imageUrl} alt="Norway" />
                </div>
                <div className="col-sm-6">
                  <h4>{value.itemName}</h4>
                  <p>
                    <span className="home-prd-span">Description : </span>
                    {value.description}
                  </p>
                  <p>
                    <span className="home-prd-span">Price : </span>
                    {value.price}
                  </p>
                  <p>
                    <span className="home-prd-span">Rating : </span>
                    {value.rating} <FontAwesomeIcon icon={faStar} />
                  </p>
                  <p>
                    <span className="home-prd-span">Colour : </span>
                    {value.color}
                  </p>
                </div>
              </>
            ) : null;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeSingle;
