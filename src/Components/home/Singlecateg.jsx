import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const Singlecateg = () => {
 const [electronics, setelectronics] = useState([]);
 const [men, setmen] = useState([]);
 const [women, setwomen] = useState([]);
 const [jwellery,setjwellery]=useState([])
 useEffect(()=>{
  fetch('https://fakestoreapi.com/products/category/electronics?limit=3')
  .then(res=>res.json())
  .then(json=>setelectronics(json))
  fetch('https://fakestoreapi.com/products/category/men\'s%20clothing?limit=3')
  .then(res=>res.json())
  .then(json=>setmen(json))
  fetch('https://fakestoreapi.com/products/category/women\'s%20clothing?limit=3')
  .then(res=>res.json())
  .then(json=>setwomen(json))
  fetch('https://fakestoreapi.com/products/category/jewelery?limit=3')
  .then(res=>res.json())
  .then(json=>setjwellery(json))
 },[])
  return (
   <div className='main'>
     <fieldset>
  <legend>Electronics</legend>
    <div className='onlyelect'>
     {electronics.map((data)=>{
return <div >
  <Link to={`/electronics/${data.id}`}>
 
 <img src={data.img}></img>
 </Link>
 <h3>{data.title}</h3>

</div>
     })}
    </div>
    {/* <a href='/electronics'>more</a> */}
<Link to="/electronics " className='more'>More</Link>

      </fieldset>


      <fieldset>
  <legend>Men</legend>
    <div className='onlyelect'>
     {men.map((data)=>{
return <div >
  <Link to={`/men/${data.id}`}>
 
 <img src={data.img}></img>
 </Link>
 <h3>{data.title}</h3>

</div>
     })}
    </div>
    <Link to="/men" className='more'>More</Link>


      </fieldset>

      <fieldset>
  <legend>women</legend>
    <div className='onlyelect'>
     {women.map((data)=>{
return <div >
  <Link to={`/women/${data.id}`}>
 <img src={data.img}></img>
 </Link>
 <h3>{data.title}</h3>

</div>
     })}
    </div>
    <Link to="/women " className='more'>More</Link>


      </fieldset>
      
      <fieldset>
  <legend>Jewelery</legend>
    <div className='onlyelect'>
     {jwellery.map((data)=>{
return <div >
   <Link to={`/jewelery/${data.id}`}>
 <img src={data.img}></img>
 </Link>
 <h3>{data.title}</h3>

</div>
     })}
    </div>

    <Link to="/jewelery " className='more'>More</Link>

      </fieldset>
  
  </div>
  
  );
}

export default Singlecateg;
