import React from 'react'

function ChangeSection() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row'>
                <nav>
                    <ul class="nav nav-underline fs-3">
                        <li class="nav-item text-center" style={{ width: "170px" }}>
                            <a class="nav-link" aria-current="page" href="#">Equity</a>
                        </li>
                        <li class="nav-item text-center" style={{ width: "190px" }}>
                            <a class="nav-link" aria-current="page" href="#">
                                Currency</a>
                        </li>
                        <li class="nav-item text-center" style={{ width: "200px" }}>
                            <a class="nav-link" aria-current="page" href="#">Commodity</a>
                        </li>
                    </ul>
                    <div className='row border-top' style={{ padding: "25px 50px 0px 50px" }}>
                        <div>
                            <table className="table table-striped" style={{ borderTop: "1px solid gray", borderLeft: "1px solid gray", borderRight: "1px solid gray", height: "110%" }}>
                                <thead>
                                    <tr style={{ borderBottom: "1px solid gray" }}>
                                        <th scope="col"></th>
                                        <th scope="col">Equity delivery</th>
                                        <th scope="col">Equity intraday</th>
                                        <th scope='col'>F&O - Futures</th>
                                        <th scope='col'>F&O - Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">Brokerage</td>
                                        <td>Zero Brokerage</td>
                                        <td>0.03% or Rs. 20/executed <br />order whichever is lower</td>
                                        <td>0.03% or Rs. 20/executed <br />order whichever is lower</td>
                                        <td>Flat Rs. 20 per executed order</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">STT/CTT</td>
                                        <td>0.1% on buy & sell</td>
                                        <td>0.025% on the sell side</td>
                                        <td>0.05% on the sell side</td>
                                        <td>
                                            <ul>
                                                <li>0.15% of the intrinsic value on<br /> options that are bought and<br /> exercised</li>
                                                <li>0.15% on sell side (on premium)</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Transaction charges</td>
                                        <td>NSE: 0.00307% <br />
                                            BSE: 0.00375%</td>
                                        <td>NSE: 0.00307% <br />
                                            BSE: 0.00375%</td>
                                        <td>NSE: 0.00183%
                                            BSE: 0</td>
                                        <td>NSE: 0.03553% (on premium)<br />
                                            BSE: 0.0325% (on premium)</td>

                                    </tr >
                                    <tr>
                                        <td scope="row">GST</td>
                                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    </tr >
                                    <tr>
                                        <td scope="row">SEBI charges</td>
                                        <td>₹10 / crore</td>
                                        <td>₹10 / crore</td>
                                        <td>₹10 / crore</td>
                                        <td>₹10 / crore</td>
                                    </tr >
                                    <tr style={{ borderBottom: "1px solid gray" }}>
                                        <td scope="row">Stamp charges</td>
                                        <td>0.015% or ₹1500 / crore on buy side</td>
                                        <td>0.003% or ₹300 / crore on buy side</td>
                                        <td>0.002% or ₹200 / crore on buy side</td>
                                        <td>0.003% or ₹300 / crore on buy side
                                        </td>
                                    </tr >
                                </tbody>
                            </table>
                            <p className='fs-4 text-center mt-4'>Calculate your costs upfront using our brokerage calculator</p>
                        </div>
                    </div>
                </nav>

            </div>

        </div>
    );
}

export default ChangeSection;