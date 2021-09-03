import React from "react";

const Counter = ({value, id, name, onIncrement, onDecrement, onDelete}) => {
    const formValue= () => {
        return value === 0? "null": value
    }
    const getBadgeClasses = ()=> {
        let classes = 'badge m-2 bg-'
        classes += value=== 0? 'danger': 'primary'
        return classes
    }
  return (
    <div style={{display: 'block'}}>
    <h4>{name}</h4>
      <span className={getBadgeClasses()}>{formValue()}</span>
      <button onClick={()=>onIncrement(id)}className='btn btn-secondary m-2 btn-sm'>Increment</button>
      <button onClick={()=>onDecrement(id)}className='btn btn-secondary m-2 btn-sm'>Decrement</button>
      <button className="btn btn-danger btn-sm m-2" onClick={()=>onDelete(id)}>delete</button>
    </div>
  );
};

export default Counter;
