import React from 'react';
import '../DrawerToggle/DrawerToggle.css';

const drawerToggle=(props)=>(

    <div className='DrawerToggle' onClick={props.clicked}>
       <div></div>
       <div></div>
       <div></div>
    </div>

);

export default drawerToggle;