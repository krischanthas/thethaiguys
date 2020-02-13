import React from 'react';
import Header from './Header';
import Content from './Content';
import Contact from './Contact';
import Menu from './Menu';
import GoogleMap from './GoogleMap';
import AboutUs from './AboutUs';
import Footer from './Footer';

export default function App() {
    return (
        <div>
            <Header/>
            <Content/>
            <Contact/>
            <Menu/>
            <AboutUs/>
            <GoogleMap/>
            <Footer/>
        </div>
    )
}
