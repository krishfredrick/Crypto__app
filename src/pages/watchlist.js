import axios from "axios";
import { useEffect } from "react";
import Button from "../components/Containers/Button";
import Footer from "../components/Containers/Footer";
import Header from "../components/Containers/Header";
import Tabs from "../components/Dashboard/Tabs";
import { DASHBOARD_API_URL } from "../constants";
import { useState } from "react";

function WatchListPage() {
  const watchlist = localStorage.getItem("watchlist")
    ? localStorage.getItem("watchlist").split(",")
    : [];

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    console.log("watchlist was changed");
  }, [watchlist]);

  useEffect(() => {
    axios
      .get(DASHBOARD_API_URL)
      .then((response) => {
        console.log("Response Data >> ", response.data);
        var myCoins = response.data.filter((coins) =>
          watchlist.includes(coins.id)
        );
        console.log("my coins", myCoins);
        setCoins(myCoins);
      })
      .catch((err) => {
        console.log("Err", err);
      });
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <div className="watch__flex">
        <div>
          {coins.length > 0 ? (
            <Tabs data={coins} />
          ) : (
            <div>
              <h1 style={{ textAlign: "center" }}>
                your watchlist is Currently Empty
              </h1>
              <p style={{ texAlign: "center", color: "var(--grey)" }}>
                Please Add Coins in your Watchlist
              </p>
              <div
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <a href="/dashboard">
                  <Button text="Dashboard" />
                </a>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default WatchListPage;
