import React, { useState } from 'react';
import axios from 'axios';

function Hero() {
    const [isLogin, setIsLogin] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        city: '',
        state: '',
        zip: '',
        email: '',
        password: '',
        agree: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

const handleSubmit = async (e) => {
  e.preventDefault();

  const BASE_URL = "https://zerodha-backend-mtpe.onrender.com";

  const endpoint = isLogin
    ? `${BASE_URL}/login`
    : `${BASE_URL}/signup`;

  const payload = isLogin
    ? { email: formData.email, password: formData.password }
    : formData;

  try {
    const response = await axios.post(endpoint, payload);

    if (isLogin) {
      alert("Login Successful!");
      localStorage.setItem("token", response.data.token);
      axios.defaults.headers.common["Authorization"] = response.data.token;
      window.location.href = "/univers";

    } else {
      alert("Signup Successful! Please login.");
      setIsLogin(true);
    }

  } catch (error) {
    alert(error.response?.data?.error || "Something went wrong");
  }
};

    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5 fs-3'>
                    {isLogin ? "Login to your account" : "Open a free demat and trading account online"}
                </h1>
                <p style={{ fontSize: "20px" }} className='mt-3 text-muted'>
                    {isLogin 
                        ? "Enter your email and password to access your dashboard" 
                        : "Start investing brokerage free and join a community of 1.6+ crore investors"}
                </p>
            </div>

            <div className='row p-5'>
                {/* Left Side: Image */}
                <div className='col-lg-6 col-md-12 p-5'>
                    <img src='media/images/signup.svg' alt="Signup Illustration" style={{ width: "100%" }} />
                </div>

                {/* Right Side: Form */}
                <div className='col-lg-6 col-md-12 p-5 border rounded shadow-sm bg-white'>
                    <form onSubmit={handleSubmit} className="needs-validation">
                        
                        {!isLogin && (
                            <>
                                <div className='row mb-3'>
                                    <div className="col-md-6">
                                        <label className="form-label">First name</label>
                                        <input type="text" name="firstName" className="form-control" onChange={handleChange} required />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Last name</label>
                                        <input type="text" name="lastName" className="form-control" onChange={handleChange} required />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className="col-md-4">
                                        <label className="form-label">City</label>
                                        <input type="text" name="city" className="form-control" onChange={handleChange} required />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">State</label>
                                        <select name="state" className="form-select" onChange={handleChange} required>
                                            <option value="">Choose...</option>
                                            <option>Andhra Pradesh </option>
                                    <option>Arunachal Pradesh</option>
                                    <option>Assam</option>
                                    <option>Bihar</option>
                                    <option>Chhattisgarh</option>
                                    <option>Goa</option>
                                    <option>Gujarat</option>
                                    <option>Haryana</option>
                                    <option>Himachal Pradesh</option>
                                    <option>Jharkhand</option>
                                    <option>Karnataka</option>
                                    <option>Kerala</option>
                                    <option>Madhya Pradesh</option>
                                    <option>Maharashtra</option>
                                    <option>Manipur</option>
                                    <option>Meghalaya</option>
                                    <option>Mizoram</option>
                                    <option>Nagaland</option>
                                    <option>Odisha</option>
                                    <option>Punjab</option>
                                    <option>Rajasthan</option>
                                    <option>Sikkim</option>
                                    <option>Tamil Nadu</option>
                                    <option>Telangana</option>
                                    <option>Tripura</option>
                                    <option>Uttar Pradesh</option>
                                    <option>Uttarakhand</option>
                                    <option>West Bengal</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label">Zip</label>
                                        <input type="text" name="zip" className="form-control" onChange={handleChange} required />
                                    </div>
                                </div>
                            </>
                        )}

                        <div className='mb-3'>
                            <label className="form-label">Email address</label>
                            <input type="email" name="email" className="form-control" onChange={handleChange} required />
                            {!isLogin && <div className="form-text">We'll never share your email with anyone else.</div>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" onChange={handleChange} required />
                        </div>

                        {!isLogin && (
                            <div className="col-12 mb-3">
                                <p className='text-muted' style={{ fontSize: "12px" }}>
                                    By proceeding, you agree to the Zerodha <a href='/terms-and-conditions' className="text-decoration-none">terms</a> & <a className="text-decoration-none" href='/privacy-policy'>privacy policy</a>
                                </p>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="agree" onChange={handleChange} required />
                                    <label className="form-check-label">Agree to terms and conditions</label>
                                </div>
                            </div>
                        )}

                        <div className="d-grid gap-2">
                            <button className="btn btn-primary mt-3" type="submit">
                                {isLogin ? "Login" : "Signup for free"}
                            </button>
                        </div>

                        <div className="mt-4 text-center">
                            <p className="text-muted">
                                {isLogin ? "New to Zerodha?" : "Already have an account?"} 
                                <span 
                                    className="text-primary fw-bold" 
                                    style={{ cursor: 'pointer', marginLeft: '5px' }}
                                    onClick={() => setIsLogin(!isLogin)}
                                >
                                    {isLogin ? "Create an account" : "Login here"}
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Hero;