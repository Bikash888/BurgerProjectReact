import React, { Component } from 'react';
import Layout from './hoc/Layout/layout';
import Burger from './containers/BurgerBuilder/burgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
       <Layout>
         <Burger/>
       </Layout>
      </div>
    );
  }
}

export default App;
