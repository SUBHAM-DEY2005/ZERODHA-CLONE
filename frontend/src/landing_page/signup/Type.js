import React from 'react';
import './Type.css';

const accounts = [
    { title: "Individual Account", desc: "Invest in equity, mutual funds and derivatives", icon: "👤" },
    { title: "HUF Account", desc: "Make tax-efficient investments for your family", icon: "👥" },
    { title: "NRI Account", desc: "Invest in equity, mutual funds, debentures, and more", icon: "🌐" },
    { title: "Minor Account", desc: "Teach your little ones about money & invest for their future with them", icon: "👶" },
    { title: "Corporate / LLP / Partnership", desc: "Manage your business surplus and investments easily", icon: "🏢" }
];

function Type() {
    return (
        <div className='container py-5 p-5'>
            <h2 className='text-center mb-5 fw-normal fs-3'>Explore different account types</h2>
            <div className='row g-5 justify-content-start' >
                {accounts.map((acc, index) => (
                    <div className='col-lg-4 col-md-6' key={index}>
                        <div className='account-card'>
                            {/* Floating Icon */}
                            <div className='icon-wrapper'>
                                <span className='icon'>{acc.icon}</span>
                            </div>
                            <div className='card-content'>
                                <h5 className='fs-5 fw-normal'>{acc.title}</h5>
                                <p className='text-muted small mb-0'>{acc.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Type;