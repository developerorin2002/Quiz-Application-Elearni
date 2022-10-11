import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import Option from '../Option/Option';
import { QuizOptionContext } from '../Quiz/Quiz';
import './Question.css'
const Question = ({questionMain}) => {
    const quizData = useContext(QuizOptionContext);
    const allQuizData = quizData.data.questions;
    const handleValue = (value) =>{
        if(value){
            const findQues = allQuizData.find(qs => qs.id === id);
            if(findQues){
                console.log(findQues.correctAnswer , value);
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
            <div className='qs-border'>
                <h3 className='text-danger'>{question}</h3>
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