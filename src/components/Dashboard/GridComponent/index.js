import React from "react";
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRound'
import RoundedIcon from '@mui/icons-material/TrendingDownRound'
import './styles.scss'
import { motion } from 'framer-motion'

import React from 'react'

const Grid = ({ coin, delay}) => {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0}}
      whileInView={{duration:0.3, delay: delay}}
      transition={{duration:0.3, delay: delay}}
      className={`grid__box 
      ${coin.price_change_percentage_24h < 0 && 'grid__box-red'}`}
    >
      <div className="grid__info-flex">
        <img src={coin.image} alt="" className="grid__coin-logo" />
          <div className="grid__name-flex">
            <div className="grid__coin-symbol">{coin.symbol}</div>
            <div className="grid__coin-name">{coin.name} </div>
          </div>
      </div>
      <div>
        {coin.price_change_percentage_24 > 0 ? (
            <div className="grid__chip-flex">
              <div className="grid__coin-chip">
                {coin.price_change_percentage_24h.toFixed(2) + '%'}
              </div>
              <TrendingUpRoundedIcon className='grid__icon' />
            </div>
        ):(
          <div className="grid__chip-flex">
            <div className="grid__coin-chip chip-red">
              {coin.price_change_percentage_24h.toFixed(2) +'%'}
            </div>
            <TrendingDownRoundedIcon className='grid__icon chip-red' />
          </div>
        )}
      </div>
      <p
        className="grid__coin-price"
        style={{
          color:coin.price_change_percentage_24 < 0
            ? 'var(--red)'
            :"var(--greeen) "
        }}
      >
        ${coin.current_price.toLocaleString()}
      </p>
      <div>
        <p className="grid__volume-text">
          <strong>Total Volume:</strong> ${coin.total_volume.toLocaleString()}
        </p>
        <p className="grid__volume-text">
          <strong>Total Market cap:</strong> ${coin.total_volume.toLocaleString()}
        </p>
      </div>
    </motion.div>
  )
}

export default Grid
