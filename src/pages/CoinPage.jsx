// import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import LineChart from '../components/Coin/Chart'
import Info from '../components/Coin/Info';
import SelectDays from '../components/Coin/SelectDays'
import TogglePrice from '../components/Coin/ToggleComponent'
import Header from '../components/Containers/Header'
import Loading from '../components/Containers/Loading'
import List from '../components/Dashboard/ListComponent'
import { convertNumbers, getCoinData, getCoinPrices, getDate} from '../functions/'


const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState({})
  const [days, setDays] = useState(120);
  const [loading, setLoading] = useState(true);
  const [priceType, setPriceType] = useState('prices');
  const [chartData, setChartData] = useState({
    labels:[],
    datasets: [{}],
  })

  
  const options = {
    Plugins: {
      legend:{
        display:false,
      },
    },
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },

    scales:{
      y:{
        tricks: 
          priceType === 'market_cap'
             ? {
                callback: function(value){
                  return "$" +convertNumbers(value);
                  },
                }
              : priceType === 'total_volumes'
              ? {
                callback: function (value){
                  return convertNumbers(value)
                }
              }
              :
              {
                callback : function (value, index, ticks){
                  return '$' + value.toLocaleString();
                }
              },
      }
    }
  }

  useEffect(()=>{
    if(id){
      getData();
    }
  });

  const getData = async () =>{
    const data = await getCoinData(id);
    const prices = await getCoinPrices(id, days, priceType);
    if(data){
      console.log('data >>', data);
      setCoin({
        id: data.id,
        name: data.name,
        Symbol: data.symbol,
        image: data.image.large,
        desc: data.description.en,
        price_change_percentage_24h:
          data.market_data.price_change_percentage_24h,
        total_volume: data.market_data.total_volume.usd,
        current_price: data.market_data.current_price.usd,
        market_cap: data.market_data.market_cap.usd,
      })
      setLoading(false);
    }
    if(prices){
      console.log('Prices >>>', prices);
      setChartData({
        label:prices?.map((data)=> getData(data[0])),
        datasets:[
          {
            label: 'Price',
            data: prices?.map((data)=> data[1]),
            borderWidth: 1,
            fill: false,
            tension: 0.25,
            backgroundColor: 'transparent',
            borderColor: '#3a80e9',
            pointRadius:0,
          },
        ],
      });
    };  
     };
     const handleDaysChange = async (event) => {
      const prices = await getCoinPrices(id, event.target.value, priceType);
      if (prices) {
        setChartData({
          labels: prices?.map((data) => getDate(data[0])),
          datasets: [
            {
              label: "Price",
              data: prices?.map((data) => data[1]),
              borderWidth: 1,
              fill: false,
              tension: 0.25,
              backgroundColor: "transparent",
              borderColor: "#3a80e9",
              pointRadius: 0,
            },
          ],
        });
      }
      setDays(event.target.value);
    };
  
    const handlePriceChange = async (event) => {
      setPriceType(event.target.value);
      const prices = await getCoinPrices(id, days, event.target.value);
      if (prices) {
        setChartData({
          labels: prices?.map((data) => getDate(data[0])),
          datasets: [
            {
              label: "Price",
              data: prices?.map((data) => data[1]),
              borderWidth: 1,
              fill: false,
              tension: 0.25,
              backgroundColor: "transparent",
              borderColor: "#3a80e9",
              pointRadius: 0,
            },
          ],
        });
      }
    };
  
    return (
      <div>
        <Header />
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="grey-container">
              <List coin={coin} delay={0.5} />
            </div>
            <div className="grey-container">
              <SelectDays days={days} handleChange={handleDaysChange} />
              <TogglePrice
                priceType={priceType}
                handleChange={handlePriceChange}
              />
              <LineChart chartData={chartData} options={options} />
            </div>
            <div className="grey-container">
              <Info name={coin.name} desc={coin.desc} />
            </div>
          </>
        )}
      </div>
    );
  }
  
  export default CoinPage;
  