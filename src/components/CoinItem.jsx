import React from "react";

const CoinItem = (props) => {
  return (
    <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
      <div className="">
        <img src={props.coin.image} alt="crypto" className="w-[50px]" />
        <h1 className="">{props.coin.name}</h1>
        <p className="">{props.coin.symbol}</p>
        <p className="">$ {props.coin.current_price.toLocaleString()}</p>
        <p className="">$ {props.coin.total_volume.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default CoinItem;
