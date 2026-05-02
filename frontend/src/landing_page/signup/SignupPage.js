import React from 'react'
import Hero from './Hero';
import OpenAccount from '../OpenAccount'
import Steps from './Steps'
import Benefits from './Benefits';
import Type from './Type';
import Faq from './Faq';
import Navbar from '../Navbar';
import Footer from '../Footer';

function SignupPage() {
    return ( 
        <>
            <Navbar/>
            <Hero/>
            <Steps/>
            <OpenAccount/>
            <Benefits/>
            <Type/>
            <Faq/>
            <Footer/>
        </>
     );
}

export default SignupPage;