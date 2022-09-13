import React from 'react';
import { Link } from 'react-router-dom';
import './product.css'

class  Electronics extends  React.Component{
 state={
  data:[]
 }

 componentDidMount(){
  fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res=>res.json())
            .then(json=>this.setState({data:json}))
 }

 render(){
  return <div className='container'>
   {this.state.data.map((obj)=>{
// console.log(obj);
return <div className='singlep'>
 <Link to={`/electronics/${obj.id}`}>
 <img src={obj.image}></img>
 </Link>
 <h3>{obj.title}</h3>
 <div className='rating'>Rating:{obj.rating.rate}({obj.rating.count})</div>
 <h4>${obj.price}/-</h4>
 <button    >Add to cart</button>
 
</div>

   })}
  </div>
 }

}
 


export default Electronics;
