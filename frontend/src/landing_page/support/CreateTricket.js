import React from 'react'

function CreateTricket() {
    return (
        <div className='container p-5'>
            <div className='row'>
                <div className='col-9 mb-5'>
                    <div className="accordion mt-5" id="accountAccordion">
                        <div className="accordion-item">
                            {/* Header */}
                            <h2 className="accordion-header" id="headingOne">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                >
                                    <span className="me-2 fs-5 text-primary"><i class="fa-solid fa-circle-plus"></i></span>
                                    Account Opening
                                </button>
                            </h2>

                            {/* Body */}
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accountAccordion"
                            >
                                <div className="accordion-body mt-4">

                                    <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Resident individual
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Minor
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Non Resident Indian (NRI)
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Company, Partnership, HUF and LLP
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Glossary
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>

                    {/* second */}
                    <div className="accordion-item mt-4">

                            {/* Header */}
                            <h2 className="accordion-header" id="headingTwo">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                >
                                    <span className="me-2 fs-5 text-primary"><i class="fa-regular fa-circle-user"></i></span>
                                    Your Zerodha Account
                                </button>
                            </h2>

                            {/* Body */}
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accountAccordion"
                            >
                                <div className="accordion-body">

                                    <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Your Profile
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Account modification
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Client Master Report (CMR) and Depository Participant (DP)
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Company, Partnership, HUF and LLP
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-decoration-none">
                                               Nomination
                                            </a>
                                        </li>
                                        <li>
                                            <a  href="#" className="text-decoration-none">Transfer and conversion of securities</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                        </div>
                        {/* Third */}
                        <div className="accordion-item mt-4">

                            {/* Header */}
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                >
                                    <span className="me-2 fs-5 text-primary"><i class="fa-brands fa-gg-circle"></i></span>
                                    Kite
                                </button>
                            </h2>

                            {/* Body */}
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accountAccordion"
                            >
                                <div className="accordion-body">

                                    <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                IPO
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Trading FAQs
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Margin Trading Facility (MTF) and Margins
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Charts and orders
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Alerts and Nudges
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                General
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                        </div>
                        {/* Fourth */}
                        <div className="accordion-item mt-4">

                            {/* Header */}
                            <h2 className="accordion-header" id="headingFour">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour"
                                >
                                    <span className="me-2 fs-5 text-primary"><i class="fa-solid fa-indian-rupee-sign"></i></span>
                                    Funds
                                </button>
                            </h2>

                            {/* Body */}
                            <div
                                id="collapseFour"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accountAccordion"
                            >
                                <div className="accordion-body">

                                    <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Add money
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Withdraw money
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-decoration-none">
                                               Add bank accounts
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                eMandates
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                        </div>
                        {/* Five */}
                        <div className="accordion-item mt-4">

                            {/* Header */}
                            <h2 className="accordion-header" id="headingFive">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive"
                                >
                                    <span className="me-2 fs-5 text-primary"><i class="fa-brands fa-stumbleupon-circle"></i></span>
                                    Console
                                </button>
                            </h2>

                            {/* Body */}
                            <div
                                id="collapseFive"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accountAccordion"
                            >
                                <div className="accordion-body">

                                    <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Portfolio
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Corporate actions
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Funds statement
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Reports
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-decoration-none">
                                               Profile
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-decoration-none">Segments</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                        </div>
                        <div className="accordion-item mt-4">

                            {/* Header */}
                            <h2 className="accordion-header" id="headingSix">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseSix"
                                >
                                    <span className="me-2 fs-5 text-primary"><i class="fa-solid fa-comment-dollar"></i></span>
                                    Coin
                                </button>
                            </h2>

                            {/* Body */}
                            <div
                                id="collapseSix"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accountAccordion"
                            >
                                <div className="accordion-body">

                                    <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Mutual funds
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                National Pension Scheme (NPS)
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Fixed Deposit (FD)
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Features on Coin
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-decoration-none">
                                               Payments and Orders
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-decoration-none">General</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                        </div>


                    </div>
                    
                    </div>

                <div className='col-3 mt-5'>
                    <div className='p-3 mb-3' style={{ backgroundColor: '#fff4e5', height:"30%", lineHeight:"1.8", borderLeft:"8px solid #ff9100"}}>
                        <ul>
                            <li className='mb-2'><a href=''>Latest Intraday leverages and Square-off timings</a></li>
                            <li><a href=''>Surveillance measure on scrips - April 2026</a></li>
                        </ul>
                    </div>
                    <div>
                        <table class="table" style={{ border: "1px solid #ededed",width:"100%"}}>
                            <thead style={{height:"50px"}}>
                                <tr>
                                    <td style={{backgroundColor:"#ededed"}}>Quick links</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{height:"50px"}}>
                                    <td scope='row'><a href='' style={{ textDecoration: "none" }}>1. Track account opening</a></td>
                                </tr>
                                <tr style={{height:"50px"}}>
                                    <td scope='row'><a href='' style={{ textDecoration: "none" }}>2. Track segment activation</a></td>
                                </tr>
                                <tr style={{height:"50px"}}>
                                    <td scope='row'><a href='' style={{ textDecoration: "none" }}>3. Intraday margins</a></td>
                                </tr>
                                <tr style={{height:"50px"}}>
                                    <td scope='row'><a href='' style={{ textDecoration: "none" }}>4. Kite user manual</a></td>
                                </tr>
                                <tr style={{height:"50px"}}>
                                    <td scope='row'><a href='' style={{ textDecoration: "none" }}>5. Learn how to create a ticket</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTricket;