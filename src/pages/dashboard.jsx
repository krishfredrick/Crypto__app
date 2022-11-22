import axios from 'axios';
import React,{useState, useEffect} from 'react'
import  ArrowUpwardIcon  from '@mui/icons-material/ArrowUpward';

import Header from '../components/Containers/Header';
import Tabs from '../components/Dashboard/Tabs'
import Search from '../components/Dashboard/Search'
import Loading from '../components/Containers/Loading'
import { DASHBOARD_API_URL } from "../constants.js";

import PaginationComponent from '../components/Dashboard/PaginationComponent'


const DashboardPage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setloading] = useState(true);
  const [ pageNumber, setPageNumber] = useState(1);
  const [pageCoins, setPageCoins] =useState([]);

  var filteredCoins = data.filter((item)=>{
    if(item.symbol.toLowerCase().includes(search.toLowerCase())
            ||
    item.name.toLowerCase().includes(search.toLowerCase())){
      return item;
    }
  });
  
  useEffect(() => {
    axios.get(DASHBOARD_API_URL)
    .then((response)=>{
      console.log("Res Data >>>", response.data)
      setData(response.data)
      setloading(false);
      setPageCoins(response.data.slice(0,25))
    }).catch((error)=>{
      console.log('Error>>>', error)
    }) 
  }, []);


  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  let mybutton = document.getElementById("myBtn");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }

  const handleChange = (event, value) => {
    setPageNumber(value);
    setPageCoins(data.slice((value - 1) * 25, (value - 1) * 25 + 25));
  };
  
  
  return (
    <div className='dash__'>
      <Header />
      {
        loading ? (
          <Loading />
        ):(
          <>
          <Search search={search} setSearch={setSearch}/>
          <Tabs data={search ? filteredCoins : pageCoins} />
          <div onClick={()=> topFunction()} id='myBtn' className='top-btn'>
            <ArrowUpwardIcon sx={{color: "var(--blue)"}} />
          </div>

          {!search && (
            <PaginationComponent 
            pageNumber={pageNumber}
            handleChange={handleChange}
            />
          )}
          </>

        )
      }
    </div>
  )
}

export default DashboardPage;