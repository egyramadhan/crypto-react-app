import React from "react";
import CoinItem from "./CoinItem";

const Coins = ({ search, coins }) => {
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 w-full h-full">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredCoins.map((coins) => {
            return <CoinItem coin={coins} key={coins.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Coins;
