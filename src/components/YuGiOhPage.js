import React from 'react'
import Navbar from './Navbar'
import YuGiOhBanner from './YuGiOhBanner'
import YuGiOhProductsList from './YuGiOhProductsList'

function YuGiOhPage() {
  return (
    <div className='YuGiOhPage'>
        <Navbar/>
        <YuGiOhBanner/>
        <YuGiOhProductsList/>
    </div>
  )
}

export default YuGiOhPage