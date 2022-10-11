import React from 'react';
import './Option.css'
const Option = ({opt ,id , handleValue}) => {
    
    return (
        <div className='option-border m-3 px-2 py-3'>
            <input className='m-2' type="checkbox" id={id} name={opt} onClick={()=>handleValue(opt)} value={opt}/>
            <label htmlFor={opt}>{opt}</label>
        </div>
    );
};

export default Option;