import './styles.scss'
import { CircularProgress } from "@mui/material";
import React from 'react'

const Loading = () => {
  return (
    <div className='loading-wrapper'>
        <CircularProgress />
    </div>
  )
}

export default Loading