import React, { useState } from 'react'
import {
    Link
  } from "react-router-dom";
import '../CSS/Navbar.css';
import { useSelector, useDispatch } from 'react-redux'
// import { signin, navigate } from '../actions/index'

function Navbar() {
//========================================================================================================================================================
/* 
REDUX STATE
*/
//========================================================================================================================================================
// const isLogged = useSelector(state => state.isLogged)
// const counter = useSelector(state => state.counter)
// const navigateTo = useSelector(state => state.navigation)
// const dispatch = useDispatch()
//========================================================================================================================================================
/* 
NORMAL STATE
*/
//========================================================================================================================================================
    const [hidden, sethidden] = useState(true);

  return (
    <div className='Navbar__container'>
        <div className='navbar__left'>ICHISAN</div>
        <div className='navbar__right'>
            <ul>
                <li onMouseEnter={()=> sethidden(false)}>Jeux de cartes</li>
                <div onMouseLeave={()=> sethidden(true)} className={hidden?'hidden__menu':'revealed__menu'}>
                    <ul>
                    <Link to="/Yu-Gi-Oh"><li className='Yu-Gi-Oh' ></li></Link>
                    <Link to="/Pokemon"><li className='Pokemon' ></li></Link>
                    <Link to="/Flesh-and-blood"><li className='Flesh-and-Blood'></li></Link>
                    </ul>
                </div>
                <li>Accessoires & Goodies</li>
                <Link to="/" ><li>Promos</li></Link>
                <li>Rachat</li>
                <li>Contact & FAQ</li>
                <li>search logo</li>
                <li>panier 
                  {/* ({counter}) */}
                  </li>
            </ul>
        </div>
            
    </div>
  )
}

export default Navbar