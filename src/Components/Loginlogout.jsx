import React from 'react';
import { Link } from 'react-router-dom';

const Loginlogout = ({ flag }) => {

  return (
    <div>
      <Link to='/login' className='link'>{flag ? "logout" : "login"}</Link>

    </div>
  );
}

export default Loginlogout;
