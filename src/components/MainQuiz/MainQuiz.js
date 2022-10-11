import { BookOpenIcon } from '@heroicons/react/24/solid';
import React, { useContext } from 'react';
import HomeQuiz from '../HomeQuiz/HomeQuiz';
import { QuizContext } from '../MainLayout/MainLayout';

const MainQuiz = () => {
    const quizes = useContext(QuizContext);

    return (
        <div>
            <div className='text-center'>
                    <BookOpenIcon className='qs-icon book-icon'></BookOpenIcon>
                    <h1>Explore Some Quiz To Gain Knowledge</h1>
                </div>
            <div className="container py-4">
                    <div className="row g-3">
                        {
                            quizes.map(quiz=><HomeQuiz quiz={quiz} key={quiz.id}></HomeQuiz>)
                        }
                    </div>
                </div>
        </div>
    );
};

export default MainQuiz;