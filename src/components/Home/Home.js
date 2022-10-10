import React, { useContext } from 'react';
import { QuizContext } from '../MainLayout/MainLayout';
import quizImage from '../../images/banner.png'
import './Home.css'
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import HomeQuiz from '../HomeQuiz/HomeQuiz';

const Home = () => {
    const quizes = useContext(QuizContext);
    return (
        <div>
           <div className='container'>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-lg-6 text-center">
                        <img src={quizImage} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6">
                       <h1 className='text-center'>Explore Some Quizes <ArrowPathIcon className='arrow-icon'></ArrowPathIcon> </h1>
                    </div>
                </div>
           </div>
           {/* for quizz */}
           <div>
                <div className="container py-4">
                    <div className="row g-3">
                        {
                            quizes.map(quiz=><HomeQuiz quiz={quiz} key={quiz.id}></HomeQuiz>)
                        }
                    </div>
                </div>
           </div>
            
        </div>
    );
};

export default Home;