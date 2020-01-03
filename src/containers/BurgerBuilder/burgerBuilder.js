import React, { Component } from "react";
import Aux from "../../hoc/aux";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

const INGREDIANT_PRICE = {
  salad: 10,
  becon: 9,
  cheese: 15,
  meat: 20
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      becon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 25,
    purchaseable: false,
    purchasing: false
  };

  purchaseableHandler = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igkey => {
        return ingredients[igkey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchaseable: sum > 0 });
  };

  addIngrediantHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updatedIngrediant = {
      ...this.state.ingredients
    };
    updatedIngrediant[type] = updateCount;
    const priceAddition = INGREDIANT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngrediant
    });
    this.purchaseableHandler(updatedIngrediant);
  };
  removeIngrediantHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updateCount = oldCount - 1;
    const updatedIngrediant = {
      ...this.state.ingredients
    };
    updatedIngrediant[type] = updateCount;
    const priceDeduction = INGREDIANT_PRICE[type];
    const previousPrice = this.state.totalPrice;
    const newPrice = previousPrice - priceDeduction;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngrediant
    });
    this.purchaseableHandler(updatedIngrediant);
  };
  purchasingHandler = () => {
    this.setState({
      purchasing: true
    });
  };

  backdropHandler = () => {
    this.setState({
      purchasing: false
    });
  };

  render() {
    return (
      <Aux>
        <Modal show={this.state.purchasing} cancel={this.backdropHandler}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        {<Burger ingredients={this.state.ingredients} />}
        <BurgerControls
          ingredientsAdded={this.addIngrediantHandler}
          ingredientsDeduction={this.removeIngrediantHandler}
          price={this.state.totalPrice}
          order={this.state.purchaseable}
          ordered={this.purchasingHandler}
        />
      </Aux>
    );
  }
}
export default BurgerBuilder;
