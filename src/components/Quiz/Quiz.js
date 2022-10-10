import { BookOpenIcon } from '@heroicons/react/24/solid';
import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quiz.css';
export const QuizOptionContext = createContext([]);
const Quiz = () => {
    const quizData = useLoaderData()
    const quizMainData = quizData.data.questions;
    return (
        <div className='container'>
           <QuizOptionContext.Provider value={quizData}>
                <div className='text-center'>
                    <BookOpenIcon className='qs-icon book-icon'></BookOpenIcon>
                </div>
                    <div className="row mt-4 g-3">
                        
                        {
                            quizMainData.map(questionMain=><Question key={questionMain.id} questionMain={questionMain}></Question>)
                        }
                    </div>
           </QuizOptionContext.Provider>
        </div>
    );
};

export default Quiz;