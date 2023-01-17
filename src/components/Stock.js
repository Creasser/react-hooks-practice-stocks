import React, { useState } from "react";

function Stock({ name, ticker, price, handleClick, stock }) {
  const [personalStock, setPersonalStock] = useState(false)

  
  function handlePersonalStock(){
    handleClick(stock)
  }

  return (
    <div>
      <div onClick={handlePersonalStock} className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{`${ticker}: ${price}`}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
