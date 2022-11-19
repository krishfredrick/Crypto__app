import React from 'react'
import Button from '../Button/' 
import MobileDrawer from './Drawer'

import './styles.scss'

const Header = () => {
  return (
      <div className="head__nav" 
      >
        <h1 className="head__heading">
            CryptoTracker<span style={{color:'var(--orange) '}}></span>
        </h1>
        <div className="head__links" >
            <a href="/">
                <p className='head__link' >Home</p>
            </a>
            <a href="/compare">
                <p className='head__link'>Compare</p>
            </a>
            
            <a href="/dashboard">
                <Button text='dashboard'/>
            </a>
        </div>
        {/* <div className='head__drawer' style={{display:'none'}}> */}
        <MobileDrawer />
        {/* </div> */}
        
      </div>
  )
}

export default Header
