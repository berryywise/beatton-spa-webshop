import React from 'react';
import Header from '../header/Header';

import '../../App.css'
import Banner from './Banner';
import BrowseProducts from './BrowseProducts';


const Home = () => {
    return (
        <>
        <Header />
        <Banner />
        <BrowseProducts />
        </>
    );
}

export default Home;
