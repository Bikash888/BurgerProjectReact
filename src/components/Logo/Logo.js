import React from 'react';
import burger_logo from '../../assets/images/burgerLogo.png';
import '../Logo/Logo.css';

const logo=(props)=>(
    <div className='Logo' style={{height: props.height}}>
        <img src={burger_logo} alt='Burger King' className='img'/>
    </div>
);

export default logo;