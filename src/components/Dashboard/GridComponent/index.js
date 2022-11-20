import React from "react";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import "./styles.scss";
import { motion } from "framer-motion";


const Grid = ({ coin, delay}) => {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration:0.3, delay: delay}}
      className={`grid__box 
      ${coin.price_change_percentage_24h < 0 && 'grid__box-red'}`}
    >
      <div className="grid__info-flex">
        <img src={coin.image} alt="" className="grid__coin-logo" />
          <div className="grid__name-flex">
            <p className="grid__coin-symbol">{coin.symbol}</p>
            <p className="grid__coin-name">{coin.name} </p>
          </div>
      </div>
      <div>
        {coin.price_change_percentage_24h > 0 ? (
            <div className="grid__chip-flex">
              <div className="grid__coin-chip">
                {coin.price_change_percentage_24h.toFixed(2) + '%'}
              </div>
              <TrendingUpRoundedIcon className="grid__icon" />
            </div>
        ) : (
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
          color:coin.price_change_percentage_24h < 0
            ? 'var(--red)'
            :"var(--green) ",
        }}
      >
        ${coin.current_price.toLocaleString()}
      </p>
      <div>
        <p className="grid__volume-text">
          <strong>Total Volume:</strong> 
          ${coin.total_volume.toLocaleString()}
        </p>
        <p className="grid__volume-text">
          <strong>Total Market cap:</strong> 
          ${coin.total_volume.toLocaleString()}
        </p>
      </div>
    </motion.div>
  )
}

export default Grid;
