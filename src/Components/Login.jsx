import React,{useState} from 'react';
import '../login.css'
import { useNavigate} from 'react-router-dom';

const Login = () => {
  let navigate=useNavigate()

  const [user, setuser] = useState(null);
  const [pass, setpass] = useState(null);
  // const [err,seterr]=useState(false)


function getuser(e){
// console.log(e.target.value);
setuser(e.target.value)
}
function getpass(e){
  // console.log(e.target.value);
  setpass(e.target.value)
  }
  const submit=(e)=>{
    e.preventDefault()
    // console.log(user,pass);
    fetch('https://fakestoreapi.com/auth/login',{
      method:'POST',
      body:JSON.stringify({
          username: user,
          password: pass
      }),
      headers:{
        "content-type":"application/JSON"
      }

  })
      .then(res=>res.json())
      .then(json=>{
        // console.log(json)
        if(json){
          
          
          navigate("/")
          localStorage.setItem("token",JSON.stringify(json.token))
        
        }
      })
      // .catch(err=>seterr(true))
     
    }
    
          
  
  return <div className='logindiv'>
   
<form className='login'>
  <div>
  <label htmlFor='text'>Username:</label>
    <input type="text" id="text" onChange={(e)=>getuser(e)}></input>
    </div>
    <div>
    <label htmlFor='pass'>Password:</label>
    <input type="password" id='pass' onChange={(e)=>getpass(e)}></input>
    </div>
    <button type='submit' onClick={submit}>Login</button>
    </form>
    {/* {err?console.log("shi details bhar"):console.log("good job")} */}
  </div>
};

export default Login;
