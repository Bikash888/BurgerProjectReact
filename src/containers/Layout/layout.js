import React from 'react';
import Aux from '../../hoc/aux';
import  '../Layout/layout.css'
const layout=(props)=>(
    <Aux>
    <div className='Content'>Toolbar, sidedrawer,Backdrops</div>
    <main>
        {props.children}
    </main>
    </Aux>
);
export default layout;