import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import itemDetails from './ItemDetails';
import './About.css';
import jsonDetail from './FakeJson';
import { NavLink } from 'react-router-dom';


const About = () => {
  let name = "ram";
  return (
   <section>
    <Header />
    <div className='container-fluid about'>
      <div className='row'>
        <img src={itemDetails[6].imageUrl}/>
        <div className='row abt-row' >
          <div className='col-sm-7 abt-col8'>
            <h1>About us</h1>
            <p>
            Dell sells personal computers (PCs), servers, data storage devices, network switches, software, computer peripherals, HDTVs, cameras, printers, and electronics built by other manufacturers. The company is known for how it manages its supply chain and electronic commerce. This includes Dell selling directly to customers and delivering PCs that the customer wants.[6][5] Dell was a pure hardware vendor until 2009 when it acquired Perot Systems. Dell then entered the market for IT services. The company has expanded storage and networking systems. It is now[when?] expanding from offering computers only to delivering a range of technology for enterprise customers.[7][8]
            </p>
            <p>
            Dell is a subsidiary of Dell Technologies, Inc., a publicly traded company (Nasdaq: DELL), as well as a component of the NASDAQ-100 and S&P 500. Dell is ranked 31st on the Fortune 500 list in 2022,[9] up from 76th in 2021.[10] It is also the sixth-largest company in Texas by total revenue, according to Fortune magazine. It is the second-largest non-oil company in Texas.[11][12] As of 2024, it is the world's third-largest personal computer vendor by unit sales after Lenovo and HP.[13]
            </p>

            <p>
            In 2015, Dell acquired the enterprise technology firm EMC Corporation. Dell and EMC became divisions of Dell Technologies. Dell EMC sells data storage, information security, virtualization, analytics, and cloud computing.[14]
            </p>
          </div>
          <div className='col-sm-4 about-side-title-link'>
            <h4>Latest Products</h4>
            {
              jsonDetail.map((latestProduct) => {
                return (
                  <div className=''>
                    <ul>
                      <li>
                        <NavLink to = {`/singleproduct/${latestProduct.id}`}>{latestProduct.title}</NavLink>
                        </li>
                    </ul>
                  </div>
                 
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
    <Footer />

   </section>
  )
}

export default About