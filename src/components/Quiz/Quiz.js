import { BookOpenIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quiz.css'
const Quiz = () => {
    const quizData = useLoaderData()
    const quizMainData = quizData.data.questions;
    return (
        <div className='container'>
           <div className='text-center'>
             <BookOpenIcon className='qs-icon book-icon'></BookOpenIcon>
           </div>
            <div className="row mt-4">
                
                {
                    quizMainData.map(question=><Question key={question.id} question={question}></Question>)
                }
            </div>
        </div>
    );
};

export default Quiz;