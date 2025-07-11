import React from 'react'
import { useSelector } from 'react-redux';

function PizzaView() {
    const pizzaBase=useSelector((state)=>state.pizza.pizzaBase);
    console.log(pizzaBase)
  return (
    <div>
      <h2>Number of Pizza buns - {pizzaBase}</h2>
      <button>Order Pizza</button>
    </div>
  )
}

export default PizzaView;
