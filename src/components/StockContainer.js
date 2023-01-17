import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, stockFilter, handleClick}) {

  const stocksToDisplay = stocks.filter((stock) => {
    if(stockFilter === 'All'){
      return stock
    }
    return stock.type === stockFilter
  })

  const stocksElements = stocksToDisplay.map((stock) => {
    return <Stock key={stock.id} name={stock.name} ticker={stock.ticker} price={stock.price} handleClick={handleClick} stock={stock}/>
  })


  return (
    <div>
      <h2>Stocks</h2>
      {stocksElements}
    </div>
  );
}

export default StockContainer;
