import React from 'react'


function Table() {
    return (
        <div className='container p-5'>
            <div className='row p-5'>
                <h1 className='fs-4 mb-4 mt-5'>Charges for account opening</h1>
                <div>
                    <table className="table table-striped" style={{borderTop:"1px solid gray", borderLeft:"1px solid gray", borderRight:"1px solid gray", height:"105%"}}>
                        <thead>
                            <tr style={{borderBottom:"1px solid gray"}}>
                                <th scope="col-8">Type of account</th>
                                <th scope="col-2">Charges</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">Online account</td>
                                <td><span className="free-tag">free</span></td>
                            </tr>
                            <tr>
                                <td scope="row">Offline account</td>
                                <td><span className="free-tag">free</span></td>
                            </tr>
                            <tr>
                                <td scope="row">NRI account (offline only)</td>
                                <td>₹ 500</td>
                            </tr>
                            <tr style={{borderBottom:"1px solid gray"}}>
                                <td scope="row">Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                                <td>₹ 500</td>
                            </tr >
                            
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='row p-5'>
                <h1 className='fs-4 mb-4 mt-4'>Demat AMC (Annual Maintenance Charge)</h1>
                <div>
                    <table className="table table-striped" style={{borderTop:"1px solid gray", borderLeft:"1px solid gray", borderRight:"1px solid gray", height:"85%"}}>
                        <thead>
                            <tr style={{borderBottom:"1px solid gray"}}>
                                <th scope="col-5">Value of holdings</th>
                                <th scope="col-7">AMC</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td  scope="row">Up to ₹4 lakh</td>
                                <td><span className="free-tag">free</span></td>
                            </tr>
                            <tr>
                                <td scope="row">₹4 lakh - ₹10 lakh</td>
                                <td>₹ 100 per year, charged quarterly*</td>
                            </tr>
                            <tr style={{borderBottom:"1px solid gray"}}>
                                <td scope="row">Above ₹10 lakh</td>
                                <td>₹ 300 per year, charged quarterly</td>
                            </tr >
                        </tbody>
                    </table>
                    <p style={{fontSize:"13px"}}>* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA,<br/><a href='/support' style={{textDecoration:"none"}}>click here.</a> </p>
                </div>
            </div>
            <div className='row p-5 mt-4'>
                <h1 className='fs-4 mb-4'>Charges for optional value added services</h1>
                <div>
                    <table className="table table-striped" style={{borderTop:"1px solid gray", borderLeft:"1px solid gray", borderRight:"1px solid gray", height:"110%"}}>
                        <thead>
                            <tr style={{borderBottom:"1px solid gray"}}>
                                <th scope="col-2">Service</th>
                                <th scope="col-2">Billing Frquency</th>
                                <th scope='col-8'>Charges</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">Tickertape</td>
                                <td>Monthly / Annual</td>
                                <td>Free: 0 | Pro: 249/2399</td>
                            </tr>
                            <tr>
                                <td scope="row">Smallcase</td>
                                <td>Per transaction</td>
                                <td>Buy & Invest More: 100 | SIP: 10</td>
                            </tr>
                            <tr style={{borderBottom:"1px solid gray"}}>
                                <td scope="row">Kite Connect</td>
                                <td>Monthly</td>
                                <td>Connect: 500 | Personal: Free</td>
                            </tr >
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Table;