import React from 'react';

const Cart = () => {

  fetch('https://fakestoreapi.com/carts/user/3')
            .then(res=>res.json())
            .then(json=>console.log(json))
  return <div>cart</div>;
};

export default Cart;
