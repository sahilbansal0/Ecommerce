import React from 'react'
import Allcategories from './Allcategories'
import Singlecateg from './Singlecateg'
import Electronics from '../products/Electronics'
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
      <Navbar flag={flag} />

      <Allcategories />
      <Singlecateg />

    </div>
  )
}

export default Home
