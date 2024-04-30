import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import Product from '../Product';

const Header = () => {
  return (
    <section>
        <nav class="navbar navbar-expand-sm">
        <div class="container-fluid">
            <NavLink to="/" class="navbar-brand"><span className='e'>E</span><span className='commerce'>Commerce</span></NavLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                <NavLink to="/home" class="nav-link">Home</NavLink>
                </li>
                <li class="nav-item">
                <NavLink to="/about" class="nav-link">About</NavLink>
                </li>
                <li class="nav-item">
                <NavLink to="/products" class="nav-link">Products</NavLink>
                </li>
            </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="text" placeholder="Search" />
                <button class="btn btn-primary" type="button">Search</button>
            </form>
            </div>
        </div>
        </nav>
    </section>
  )
}

export default Header;