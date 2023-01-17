import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioStocks, handleClick}) {


  const portfolioStocksElements = portfolioStocks.map((stock) => {
    return <Stock key={stock.id} name={stock.name} ticker={stock.ticker} price={stock.price} handleClick={handleClick} stock={stock} />
  })

  


  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioStocksElements}
    </div>
  );
}

export default PortfolioContainer;
