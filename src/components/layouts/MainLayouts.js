import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../partials/Footer';
import Header from '../partials/Header';

const MainLayouts = () => {
  return (
    <div className='main'>
        <Header/>
            <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayouts