import { motion } from 'framer-motion'
import React from 'react'

import gradient from '../../../assets/gradient.png'
import iphone from '../../../assets/iphone.png'
import './styles.scss'

const Phone = () => {
  return (
      <div className="phone__box">
        <img src={gradient} alt="" className="phone__gradient" />
        <motion.img
            className='phone'
            src={iphone}
            initial={{y: -10}}
            animate={{y:10}}
            transition={{
                type:'smooth',
                repeatType:'mirror',
                duration:2,
                repeat:Infinity,
            }}
        ></motion.img>
      </div>
  )
}

export default Phone
