import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const Loginlogout = ({flag}) => {
 const [state, setstate] = useState("login");
  console.log('LoginLogout====>>>>>>')
  
  return (
    <div>
      <Link to='/login' className='link'>{flag?"logout":"login"}</Link>
      
    </div>
  );
}

export default Loginlogout;
