import React from 'react'
import Allcategories from './Allcategories'
import Singlecateg from './Singlecateg'
// import Carousel from './Carousel'
import Navbar from '../Navbar'

const Home = () => {
  console.log('HomePage-->>')
  const [flag, setFlag] = React.useState(false);
  let d = JSON.parse(localStorage.getItem("token"));
  React.useEffect(() => {
    console.log('dddd', d)
    setFlag(d)
  }, []);

  return (
    <div>
      {/* <h1>home</h1> */}
      <Navbar flag={flag} />

      <Allcategories />
      <Singlecateg />

      {/* <Carousel/>       */}


    </div>
  )
}

export default Home
