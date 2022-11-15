import React from 'react'
import './styles.scss'

const Button = ({text,onClick,outlined = false}) => {
  return (
    <div
      className={outlined ? "btn__outlined" :`btn__div`}
      onClick={()=>onClick()}
      >
      {text}
    </div>
  )
}

export default Button
