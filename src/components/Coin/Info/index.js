import React from 'react'
import './styles.scss'

const Info = ({ name, desc}) => {
  return (
    <div>
        <h3>{name}</h3>
        <p className='info__desc-link' 
            dangerouslySetInnerHTML={{__html:desc}}
        />
    </div>
  )
}

export default Info