import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import SinglePage from '../single/SinglePage';
import Home from '../Home';
import About from '../About';
import Product from '../Product';

import jsonDetail from '../FakeJson';
import Contact from '../Contact';

const Header = () => {
  return (
    <section>
        <nav class="navbar navbar-expand-sm">
        <div class="container-fluid">
            <NavLink to="/" class="navbar-brand"><span className='e'>E-COMMERCE</span></NavLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                <NavLink to="/" class="nav-link" element={<Home />}>Home</NavLink>
                </li>
                <li class="nav-item">
                <NavLink to="/about" class="nav-link" element={<About/>}>About</NavLink>
                </li>
                <li class="nav-item">
                <NavLink to="/products" class="nav-link" element={<Product />}>Products</NavLink>
                </li>
                <li class="nav-item">
                <NavLink to="/contact" class="nav-link" element={<Contact />}>Contact</NavLink>
                </li>
                <li class="nav-item">
                <NavLink to={`/singleproduct/${jsonDetail.id}`} element={<SinglePage />}></NavLink>
                </li>

                
            </ul>
            <div class="d-flex socialmedia-list">
              <NavLink><span className='instagram'><FontAwesomeIcon icon={faInstagram} /></span></NavLink>
              <NavLink><span className='facebook'><FontAwesomeIcon icon={faFacebook} /></span></NavLink>
              <NavLink><span className='twitter'><FontAwesomeIcon icon={faTwitter} /></span></NavLink>
              <NavLink><span className='whatsapp'><FontAwesomeIcon icon={faWhatsapp} /></span></NavLink>
            </div>
            </div>
        </div>
        </nav>
    </section>
  )
}

export default Header;