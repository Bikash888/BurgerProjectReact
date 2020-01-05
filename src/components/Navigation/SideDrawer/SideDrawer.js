import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import '../SideDrawer/SideDrawer.css';
import  Aux from '../../../hoc/aux';
import Backdrop from '../../UI/Backdrop/BackDrop';

const sideDrawer = props => {
let attachedClass=['SideDrawer', 'Close']
if (props.open){
  attachedClass=['SideDrawer','Open']
}
  return (
    <Aux>
    <Backdrop show={props.open} clicked={props.closed}/> 
    <div className={attachedClass.join(' ')}>
    <Logo height='11%' />
      <nav>
        <NavigationItems />
      </nav>
    </div>
    </Aux>
  );
};

export default sideDrawer;
