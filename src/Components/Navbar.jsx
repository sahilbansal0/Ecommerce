import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
import Loginlogout from './Loginlogout';
// import { Link } from 'react-router-dom';

const Navbar = ({flag}) => {
 
  
console.log("sahil")
  
  


  return <div className='navbar'>
<Link to='/' className='link'> Home </Link>
<input type="search" className='search' placeholder='serach....'/>


<Link to='/cart'  className='link'>Cart</Link>


<Loginlogout flag={flag}/>
  </div>;
};

export default Navbar;
