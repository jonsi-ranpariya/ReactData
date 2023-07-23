import React, { useContext } from 'react'
import Header from './Header'
import { UserContext } from '../UserContext'

const Home = () => {
  const userContext = useContext(UserContext);
  console.log("contextsetdata===> ", userContext);

  return (
    <div>
    <Header/>
      <h1>Welcome</h1>
    </div>
  )
}

export default Home
