import React from 'react'
import FabBanner from './FabBanner'
import FabProductsList from './FabProductsList'
import Footer from './Footer'
import Navbar from './Navbar'

function FabPage() {
  return (
    <div className='FabPage'>
        <Navbar/>
        <FabBanner/>
        <FabProductsList/>
        <Footer/>
    </div>
  )
}

export default FabPage