import React, { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./components/Coins";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
        // console.log(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="bg-[#143F6B] w-full h-[150px] ">
        <div className="py-4 flex flex-col justify-center items-center">
          <div className="font-bold  text-2xl md:text-4xl text-white">
            Search a Cryptocurrency
          </div>
          <form action="" className="w-[220px] md:w-[550px]">
            <input
              type="text"
              placeholder="Search"
              className="w-full mt-5 px-5 py-3 block bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
              onChange={handleChange}
            />
          </form>
        </div>

        <Coins search={search} coins={coins} />
      </div>
    </div>
  );
}

export default App;
