import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Header/Footer';
import Header from '../Shared/Header/Header';
import Topics from '../Shared/Header/Topics/Topics';

const CoursesLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-1  lg:grid-cols-5'>
                <div className=''>
                    <Topics></Topics>
                </div>
                <div className='lg:col-span-4'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CoursesLayout;