import { EyeSlashIcon } from '@heroicons/react/24/solid';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import Option from '../Option/Option';
import { QuizOptionContext } from '../Quiz/Quiz';
import './Question.css'
const Question = ({questionMain}) => {
    const quizData = useContext(QuizOptionContext);
    const allQuizData = quizData.data.questions;
    const handleAns = (id)=>{
        const quizFounded = allQuizData.find(quiz=>quiz.id === id);
        if(quizFounded){
            const correctAns = quizFounded.correctAnswer;
            if(correctAns){
                toast.success(`Correct Ans Is : ${correctAns}` ,{autoClose:5000})
            }
        }
    };

    const handleValue = (value) =>{
        if(value){
            const findQues = allQuizData.find(qs => qs.id === id);
            if(findQues){
                const correctAns = findQues.correctAnswer;
                console.log(correctAns);
                if(correctAns === value){
                    toast.success('Correct Answere',{autoClose:500})
                }else{
                    toast.error('Wrong Answere' ,{autoClose:500})
                }
            }
        }

    }
    
    const {id,question , options} = questionMain;
    return (
        <div className='col-lg-4'>
            <div className='qs-border p-3'>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className="col-lg-10">
                        <h5 className='text-danger'>{question}</h5>
                    </div>
                    <div className="col-lg-2 text-center">
                         <EyeSlashIcon onClick={()=>handleAns(id)} className='eye-slash px-1'></EyeSlashIcon>
                    </div>
                </div>
                {/* load option */}
                <div>
                        {
                            options.map(opt=><Option question={question} key={opt} handleValue={handleValue} id={id} opt={opt}></Option>)
                        }
                </div>
            </div>
        </div>
    );
};

export default Question;