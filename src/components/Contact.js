import React, { useState } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import "./Contact.css";
import jsonDetail from "./FakeJson";
import itemDetails from "./ItemDetails";
import { NavLink } from "react-router-dom";

const Contact = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newEntry = {
      firstName: fname,
      lastname: lname,
      email: email,
      comment: comment,
    };
    setFname('');
    setLname('');
    setEmail('');
    setComment('');


    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };
  console.log(fname);

  return (
    <div>
      <Header />
      <div className="container-fluid about">
        <div className="row">
          <img src={itemDetails[6].imageUrl} />
          <div className="row abt-row">
            <div className="col-sm-7 abt-col8">
              <h1>Contact us</h1>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7607.590082060718!2d139.62321109337853!3d35.621607387487124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f473c8e4b471%3A0x89a3b29e18db47b2!2sY%C5%8Dga%20Sta.!5e0!3m2!1sen!2sjp!4v1714479768154!5m2!1sen!2sjp" />
              <form action="" onSubmit={submitHandler}>
                <div class="mb-3 mt-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    value={lname}
                    placeholder="Last Name"
                    onChange={(e) => setLname(e.target.value)}
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    class="form-control"
                    rows="5"
                    placeholder="comment"
                    value={comment}
                    name="text"
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>
                <button type="submit" class="contact-btn">
                  Submit
                </button>
              </form>
              <div>
                <br />
                {allEntry.map((curElement) => {
                  return (
                    <div> 
                      <h4>Submitted Details</h4>
                      <p></p>
                      <p> First Name : {curElement.firstName}</p>
                      <p>Last Name :{curElement.lastname}</p>
                      <p> Email : {curElement.email}</p>
                      <p>Comment : {curElement.comment}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-sm-4 about-side-title-link">
              <h4>Latest Products</h4>
              {jsonDetail.map((latestProduct) => {
                return (
                  <div className="">
                    <ul>
                      <li>
                        <NavLink to={`/singleproduct/${latestProduct.id}`}>
                          {latestProduct.title}
                        </NavLink>
                      </li>
                    </ul>
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

export default Contact;
