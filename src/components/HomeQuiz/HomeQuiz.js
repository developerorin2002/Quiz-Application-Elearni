import React from 'react';
import './HomeQuiz.css'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom';
const HomeQuiz = ({quiz}) => {
    
    const handleNavigate = useNavigate()
    const {id , name , logo , total} = quiz;
    const handleQuiz = (id) =>{
        handleNavigate(`/quiz/${id}`)
    }


    return (
        <div className='col-lg-3'>
            <div className='card-bg'>
                <img src={logo} className="w-100 img-fluid" alt="" />
                <h6 className='text-center text-white py-1'>Total Quiz : {total}</h6>
                <div className='d-flex justify-content-between py-2 px-2 align-items-center'>
                    <div>
                        <h6 className='text-white '>Name : {name}</h6>
                    </div>
                    <div>
                        <button onClick={()=>handleQuiz(id)} className='quiz-btn'>Start<ArrowLongRightIcon className='st-icon'></ArrowLongRightIcon> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeQuiz;