import axios from 'axios';
import React,{useState, useEffect} from 'react'

import Header from '../components/Containers/Header';
import Tabs from '../components/Dashboard/Tabs'
import { DASHBOARD_API_URL } from "../constants.js";


const DashboardPage = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(DASHBOARD_API_URL)
    .then((response)=>{
      console.log("Res Data >>>", response.data)
      setData(response.data)
    }).catch((error)=>{
      console.log('Error>>>', error)
    }) 
  }, [])
  
  
  return (
    <div>
      <Header />
      <Tabs data={data} />
    </div>
  )
}

export default DashboardPage;