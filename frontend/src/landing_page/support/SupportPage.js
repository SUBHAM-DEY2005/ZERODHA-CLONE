import React from 'react'
import Hero from './Hero';
import CreateTricket from './CreateTricket';
import Navbar from '../Navbar';
import Footer from '../Footer';


function SupportPage() {
    return ( 
        <>
            <Navbar/>
            <Hero/>
            <CreateTricket/>
            <Footer/>
        </>
     );
}

export default SupportPage;