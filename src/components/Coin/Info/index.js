import React ,{useState} from 'react'
import './styles.scss'

const Info = ({ name, desc}) => {
  const [truncate, setTruncate] = useState(true)

  var truncateDesc = 
    desc.slice(0,500) + "<p style='color:var(--grey); cursor:pointer'> Read More...</p>"
  
  var fullDesc =
  desc + "<p style='color:var(--grey); cursor:pointer'> Read Less...</p>";
    

  return (
    <div>
        <h3 style={{marginTop: '0.5rem'}}>{name}</h3>
        <p className='info__desc-link' 
          onClick={()=> setTruncate(!truncate)}
            dangerouslySetInnerHTML={{__html:truncate? truncateDesc:fullDesc,}}
        />
    </div>
  )
}

export default Info