import React from 'react';
import '../BuildControls/BuildControls.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl';

const contorls=[
    {label: 'Salad', type:'salad',price:'Rs 10'},
    {label:'Meat', type:'meat',price:'Rs 20'},
    {label:'Cheese', type:'cheese',price:'Rs 15'},
    {label:'Bacon', type:'becon', price:'Rs 9'}
];
const buildControls=(props)=>(

    <div className='BuildControls'>
    <p className='cost'>Current Price: {props.price}</p>
    {contorls.map(ctrl=>(
        <BuildControl 
        key={ctrl.label} 
        label={ctrl.label}
        price={ctrl.price}
        added={()=>props.ingredientsAdded(ctrl.type)}
        removed={()=>props.ingredientsDeduction(ctrl.type)}
        />
    ))}
    <button className='OrderButton' 
    disabled={!props.order}
    onClick={props.ordered}
    >ORDER NOW</button>

    </div>
);
export default buildControls;