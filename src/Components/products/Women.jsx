import React from 'react';
import './product.css'
import { Link } from 'react-router-dom';

class  Women extends  React.Component{
 state={
  data:[]
 }

 componentDidMount(){
  fetch('https://fakestoreapi.com/products/category/women\'s%20clothing')
            .then(res=>res.json())
            .then(json=>this.setState({data:json}))
 }

 render(){
  return <div className='container'>
   {this.state.data.map((obj)=>{
console.log(obj);
return <div className='singlep'>
    <Link to={`/men/${obj.id}`}>
 <img src={obj.image}></img>
 </Link>
 <h3>{obj.title}</h3>
 <div className='rating'>Rating:{obj.rating.rate}({obj.rating.count})</div>
 <h4>${obj.price}/-</h4>
 {/* <p>{obj.description}</p> */}
 
</div>

   })}
  </div>
 }

}
 


export default Women;