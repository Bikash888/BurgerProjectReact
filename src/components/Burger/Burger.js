import React from "react";
import "../Burger/Burger.css";
import BurgerIngredient from "../Burger/BurgerIngrediants/BurgerIngrediants";

const burger = props => {
  let transformedIngrediant = Object.keys(props.ingredients)
  .map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  })
  .reduce((arr,el)=>{
      return arr.concat(el);
  },[]);
console.log(transformedIngrediant.length);
  if(transformedIngrediant.length===0){
     transformedIngrediant= <p>Please add ingredients</p>;
  };

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngrediant}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
