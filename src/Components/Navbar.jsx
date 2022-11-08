import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
import Loginlogout from './Loginlogout';

const Navbar = ({ flag }) => {


  console.log("sahil")




  return <div className='navbar'>
    <Link to='/' className='link'> Home </Link>
    <input type="search" className='search' placeholder='serach....' />




    <Loginlogout flag={flag} />
  </div>;
};

export default Navbar;
