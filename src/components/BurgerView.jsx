import React from 'react'
import { useSelector } from 'react-redux';

function BurgerView() {
    const burgerBuns=useSelector((state)=>state.burger.burgerBuns);
    //console.log(burgerBuns);
  return (
    <div>
      <h2>Number of Burger buns - {burgerBuns}</h2>
      <button>Order Burger</button>
    </div>
  )
}

export default BurgerView;
