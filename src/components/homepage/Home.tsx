import Header from '../header/Header';

import '../../App.css'

import Banner from './Banner';
import BrowseProducts from './BrowseProducts';
import Footer, { FooterBanner } from '../footer/Footer';


const Home = () => {
    return (
        <>
        <Header />
        <Banner />
        <BrowseProducts />
        <FooterBanner />
        <Footer />
        </>
    );
}

export default Home;
