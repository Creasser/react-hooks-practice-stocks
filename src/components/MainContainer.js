import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocksData, setStocksData] = useState([])
  const [stockFilter, setStockFitler] = useState('All')
  const [sort, setSort] = useState('')
  const [portfolioStocks, setPortfolioStocks] = useState([])

  function handleStockFilterChange(e){
    setStockFitler(e.target.value)
  }
  function handleSortChange(e){
    if(e.target.value === 'Alphabetically'){
      setSort('Alphabetically')
      console.log('aplha picked')
      handleAlphaChange()
    }else if(e.target.value === 'Price'){
      setSort('Price')
      console.log('price picked')
      handlePriceChange()
    }else{
      setSort('')
    }
  }

  function handleAlphaChange(){
    const alphaSorted = stocksData.sort((a, b) => a.name.localeCompare(b.name))
    setStocksData(alphaSorted)
  }
  function handlePriceChange(){
    const priceSorted = stocksData.sort((a, b) => a.price - b.price)
    setStocksData(priceSorted)
  }

  function addStockToPersonal(stock){
    setPortfolioStocks([
      ...portfolioStocks,
      stock
    ])
  }

  function removePersonalStock(stock){
    //use filter to match id then return all the elements that dont have that id
    console.log('mine')
    const newPersonal = portfolioStocks.filter((stk) => {
      return stk.id !== stock.id
    })
    setPortfolioStocks(newPersonal)
  }

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(r => r.json())
    .then(stockData => setStocksData(stockData))
  }, [])

  //can make a const that only holds the personal stocks that are true(maybe use state inside of here) and only send those stocks to the portfolio container

  return (
    <div>
      <SearchBar onFilterChange={handleStockFilterChange} onSortChange={handleSortChange} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocksData} stockFilter={stockFilter} handleClick={addStockToPersonal} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={portfolioStocks} handleClick={removePersonalStock}  />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
