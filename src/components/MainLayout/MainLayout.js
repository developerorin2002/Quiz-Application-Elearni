import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
export const QuizContext = createContext([]);
const MainLayout = () => {
    const quizData = useLoaderData();
    return (
            <QuizContext.Provider value={quizData}>
                <Header></Header>
                <Outlet></Outlet>
            </QuizContext.Provider>
    );
};

export default MainLayout;