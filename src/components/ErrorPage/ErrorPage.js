import React from 'react';
import './ErrorPage.css'
import { FaceFrownIcon } from '@heroicons/react/24/solid'
const ErrorPage = () => {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div className='text-center'>
                    <FaceFrownIcon className='error-icon img-fluid'></FaceFrownIcon>
                    <h1>NOTHING FOUND IN THIS PAGE</h1>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;