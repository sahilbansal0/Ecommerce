import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
const Showsingleproduct = () => {
 let id=useParams();
 console.log(id);

 const [product, setproduct] = useState([]);
 useEffect(()=>{
  fetch(`https://fakestoreapi.com/products`)
  .then(res=>res.json())
  .then(json=>setproduct(json))
 },[])

// console.log(product);
 
  return (
    <div className='singlemain'>
     {product.map((obj)=>{
      if(obj.id==id.id){
// console.log(obj);
return <div className='showsingle'>
  <div className='singleimage'v>

<img src={obj.image} ></img>
</div>
<div className='singlecontent'>

<h3>{obj.title}</h3>
<div className='rating'>Rating:{obj.rating.rate}({obj.rating.count})</div>
<h4>${obj.price}/-</h4>
<p>{obj.description}</p>
</div>


</div>
      }
     })}
     
    </div>
  );
}

export default Showsingleproduct;
