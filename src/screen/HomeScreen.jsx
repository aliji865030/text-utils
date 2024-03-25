import React from 'react'
import Switch from '../component/Switch'
import NavBar from '../component/NavBar'
import HomeBody from '../component/HomeBody'
import Footer from '../component/Footer'
import { useRef } from 'react'

const HomeScreen = () => {
    
  return (
    <div >
        <NavBar></NavBar>
        <HomeBody></HomeBody>
        <Footer></Footer>
      
    </div>
  )
}

export default HomeScreen
