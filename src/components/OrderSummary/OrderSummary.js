import React,{Component} from "react";
import Aux from "../../hoc/aux";
import "../OrderSummary/OrderSummary.css";
import Button from "../UI/Button/Button";

class OrderSummary extends Component{
  // componentWillUpdate(){
  //   console.log('[OrderSummary will updated]')
  // }
  render(){
    const ingrediantSummary = Object.keys(this.props.ingredients).map(igkey => {
      return (
        <li key={igkey}>
          <span className="item">{igkey} :</span>
          <span className="num">{this.props.ingredients[igkey]}</span>
        </li>
      );
    });
    return(
      <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingrediants</p>
      <ul>{ingrediantSummary}</ul>
      <h3>Total Price: {this.props.price}</h3>
      <p>Continue to Checkout ?</p>
      <Button btnType="Success" clicked={this.props.purchaseContinue}>
        CONTINUE
      </Button>
      <Button btnType="Danger" clicked={this.props.purchasCancel}>
        CANCEL
      </Button>
    </Aux>
    );
  };
};
export default OrderSummary;
