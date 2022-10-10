import React, { useContext } from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { QuizContext } from '../MainLayout/MainLayout';

import './Statistics.css'
const Statistics = () => {
    const quizData = useContext(QuizContext);
    console.log(quizData);
    return (
        <div>
            <BarChart width={1000} height={250} data={quizData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey="total"/>
                <Bar dataKey="name" fill="#8884d3" />
                <Bar dataKey="total" fill="#82ca34" />
            </BarChart>
        </div>
    );
};

export default Statistics;