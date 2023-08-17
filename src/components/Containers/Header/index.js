import React from 'react'
import Button from '../Button/' 
import MobileDrawer from './Drawer'

import './styles.scss'
// import'./_button.scss'

const Header = () => {
  return (
      <div className="head__nav" 
      >
        <h1 className="head__heading">
            <a href="/" style={{color:'white'}}>
            CryptoAppie<span style={{color:'var(--blue) '}}>.</span>
            </a>
                
        </h1>
        <div className="head__links" >
            <a href="/">
                <p className='head__link box' >Home</p>
            </a>
            <a href="/watchlist">
                <p className='head__link box' >WatchList</p>
            </a>
            <a href="/compare">
                <p className='head__link box'>Compare</p>
            </a>
            
            <a href="/dashboard">
                <Button text='dashboard '/>
            </a>
        </div>
        {/* <div className='head__drawer' style={{display:'none'}}> */}
        <MobileDrawer />
        {/* </div> */}
        
      </div>
  )
}

export default Header
