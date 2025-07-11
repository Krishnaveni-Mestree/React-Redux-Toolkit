import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { burger_order, customer_choice } from '../features/burger/burgerSlice';

function BurgerView() {
    const [number,setNumber]=useState(1)
    const burgerBuns=useSelector((state)=>state.burger.burgerBuns);
    const dispatch=useDispatch();
    console.log(dispatch)
  return (
    <div>
      <h2>Number of Burger buns - {burgerBuns}</h2>
      <input type='text' value={number} onChange={(e)=>setNumber(Number(e.target.value))}/>
      <button onClick={()=>dispatch(customer_choice(number))}>Customer Choice</button>
      <button onClick={()=>dispatch(burger_order())}>Order Burger</button>
    </div>
  )
}

export default BurgerView;
