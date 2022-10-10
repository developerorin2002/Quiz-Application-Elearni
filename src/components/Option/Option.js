import React from 'react';

const Option = ({opt ,id , handleValue}) => {
    
    return (
        <div>
            <input type="checkbox" id={id} name={opt} onClick={()=>handleValue(opt)} value={opt}/>
            <label htmlFor={opt}>{opt}</label>
        </div>
    );
};

export default Option;