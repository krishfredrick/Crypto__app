import React ,{useState} from 'react'
import './styles.scss'

const Info = ({ name, desc}) => {
  const [truncate, setTruncate] = useState(true)
  return (
    <div>
        <h3 style={{marginTop: '0.5rem'}}>{name}</h3>
        <p className='info__desc-link' 
          onClick={()=> setTruncate(!truncate)}
            dangerouslySetInnerHTML={{__html:desc}}
        />
    </div>
  )
}

export default Info