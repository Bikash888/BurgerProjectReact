import React,{Component} from 'react';
import Aux from '../../hoc/aux';
import  '../Layout/layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
     state={
         showSideDrawer:true
     }

    sideDrawerClosedHandler=()=>{
        this.setState({
            showSideDrawer:false
        });
    };
    drawerToggleHandler=()=>{
        this.setState((previousState)=>{
            return { showSideDrawer: !previousState.showSideDrawer}
        });
    };
    render(){
        return(
            <Aux>
            <Toolbar drawerToggleClicked={this.drawerToggleHandler}/>
             <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
             <main className='Content'>
                 {this.props.children}
             </main>
             </Aux>
        );
    }
}

export default Layout;