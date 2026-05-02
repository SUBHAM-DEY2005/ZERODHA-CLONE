import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/product/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage'
import NotFound from './landing_page/NotFound';
import SignupPage from './landing_page/signup/SignupPage';
import PrivacyPolicy from './landing_page/PrivacyPolicy';
import Termsandconditions from './landing_page/Termsandconditions';
import UniversePage from './landing_page/univers/UniversePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/support' element={<SupportPage />} />
      <Route path='/Signup' element={<SignupPage/>}/>
      <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
      <Route path='/terms-and-conditions' element={<Termsandconditions/>}/>
      <Route path='*' element={<NotFound/>} />
      <Route path='/univers' element={<UniversePage/>} />
    </Routes>
  </BrowserRouter>
);
