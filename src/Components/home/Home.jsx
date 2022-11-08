import React from 'react'
import Allcategories from './Allcategories'
import Singlecateg from './Singlecateg'
import Navbar from '../Navbar'

const Home = () => {
  console.log('HomePage-->>')
  const [flag, setFlag] = React.useState(false);
  let d = JSON.parse(localStorage.getItem("token"));
  React.useEffect(() => {
    setFlag(d)
  }, [d]);

  return (
    <div>
      <Navbar flag={flag} />

      <Allcategories />
      <Singlecateg />



    </div>
  )
}

export default Home
