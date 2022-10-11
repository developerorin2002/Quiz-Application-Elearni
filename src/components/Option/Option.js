import React from 'react';
import './Option.css'
const Option = ({opt ,id , handleValue , question}) => {
    return (
        <div className='option-border m-3 px-2 py-3 text-center' onClick={()=>handleValue(opt)}>
            {opt}
        </div>
    );
};

export default Option;