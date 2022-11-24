import React, { useEffect, useState } from "react";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { convertNumbers } from "../../../functions/";
import { motion } from "framer-motion";
import "./styles.scss";

const List = ({ coin , delay}) => {
  const [volume, setVolume] = useState("");

  useEffect(()=>{
    setVolume(convertNumbers(parseInt(coin.total_volume)));
  },[])
  return (
    <a href={`/coin/${coin.id}`}>
    <motion.tr
    className="li__"
    initial={{x: -10, opacity: 0}}
    whileInView={{ x: 0, opacity: 1}}
    transition={{duration: 0.3, delay: delay}}
    >
      <td className="li__td-img">
        <img src={coin.image} className='grid__coin-logo' alt="logo" />
      </td>
      <td className="li__td-name-flex">
        <div className='grid__name-flex'>
          <p className="grid__coin-symbol name-text">{coin.symbol} -USD</p>
          <p className="grid__coin-name name-text">{coin.name} </p>
        </div>
      </td>
      <td className="li__td-chip-flex">
        {coin.price_change_percentage_24h > 0 ? (
          <div className="grid__chip-flex">
            <div className="grid__coin-chip percentage-text">
              {coin.price_change_percentage_24h.toFixed(2) + '%'}
            </div>
            <TrendingUpRoundedIcon className="li__icon  chip-icon"/>
          </div>
        ):(
          <div className="grid__chip-flex">
            <div className="grid__coin-chip percentage-text chip-red">
              {coin.price_change_percentage_24h.toFixed(2) + '%'}
            </div>
            <TrendingDownRoundedIcon className="li__icon chip-red chip-icon"/>
          </div>
        )}
      </td>
      <td>
        <p
          className="grid__coin-price name-text"
          style={{
            color: coin.price_change_percentage_24h < 0
            ? "var(--red)"
            :"var(--green)"
          }}
        >
          ${coin.current_price.toLocaleString()}
          </p>
      </td>
      <td className="li__td-mkt-cap">
        <p>${coin.total_volume.toLocaleString()}</p>
      </td>
      <td className="li__td-mkt-cap">
        <p>${coin.market_cap.toLocaleString()}</p>
      </td>
      <td className="li__td-vol-cap">
        <p>${volume}</p>
      </td>
      
    </motion.tr>
    </a>
  )
}

export default List;
