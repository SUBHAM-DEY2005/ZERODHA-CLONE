import React from 'react'
import Hero from './Hero.js';
import Brojkerage from './Brojkerage.js';
import Table from './Table.js';
import ChangeSection from './ChangeSection.js';
import Navbar from '../Navbar.js';
import Footer from '../Footer.js';


function PricingPage() {
    return ( 
        <>
            <Navbar/>
            <Hero/>
            <ChangeSection/>
            <Table/>
            <Brojkerage/>
            <Footer/>
        </>
     );
}

export default PricingPage;