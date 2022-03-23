import React from 'react'
import FirstHomeZone from './FirstHomeZone'
import Footer from './Footer'
import HomeBanner from './HomeBanner'
import Navbar from './Navbar'

function Homepage() {
  return (
    <div className='Homepage'>
        <Navbar/>
        <HomeBanner/>
        <FirstHomeZone/>
        <Footer/>
    </div>
  )
}

export default Homepage