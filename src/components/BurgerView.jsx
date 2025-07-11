import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { burger_order } from '../features/burger/burgerSlice';

function BurgerView() {
    const burgerBuns=useSelector((state)=>state.burger.burgerBuns);
    const dispatch=useDispatch();
    console.log(dispatch)
  return (
    <div>
      <h2>Number of Burger buns - {burgerBuns}</h2>
      <button onClick={()=>dispatch(burger_order())}>Order Burger</button>
    </div>
  )
}

export default BurgerView;
