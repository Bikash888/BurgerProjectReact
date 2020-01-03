import React from "react";
import Aux from "../../hoc/aux";
import '../OrderSummary/OrderSummary.css'




const orderSummary = props => {
  const ingrediantSummary=Object.keys(props.ingredients)
  .map((igkey)=>{
    return (<li key={igkey}>
    <span 
    className='item'>{igkey} : 
    </span><span className='num'>{props.ingredients[igkey]}</span>
    
    </li>);
  });

  return (<Aux>
    <h3>Your Order</h3>
    <p>A delicious burger with following ingrediants</p>
    <ul>
      {ingrediantSummary}
    </ul>
  </Aux>);
};
export default orderSummary;
