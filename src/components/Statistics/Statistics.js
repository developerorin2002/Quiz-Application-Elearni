import React, { useContext } from 'react';
import { Area, AreaChart, CartesianGrid, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts';
import { QuizContext } from '../MainLayout/MainLayout';

import './Statistics.css'
const Statistics = () => {
    const quizData = useContext(QuizContext);
    return (
        <div>
            <div className="container">
                <h1 className='text-center py-2'>TOTAL QUESTION STATISTICS OF QUIZ</h1>
                <div className="row d-flex justify-content-center">
                        <AreaChart width={700} height={200} data={quizData}
                            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
                            <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" />
                            <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                </div>
            </div>
        </div>
    );
};

export default Statistics;