import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { pizza_order } from '../features/pizza/pizzaSlice';

function PizzaView() {
    const pizzaBase=useSelector((state)=>state.pizza.pizzaBase);
    const dispatch=useDispatch();
    console.log(dispatch);
  return (
    <div>
      <h2>Number of Pizza buns - {pizzaBase}</h2>
      <button onClick={()=>dispatch(pizza_order())}>Order Pizza</button>
    </div>
  )
}

export default PizzaView;
