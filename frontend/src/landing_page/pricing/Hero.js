import React from 'react'

function Hero() {
    return (
        <div className='container'>
            <div className='row mt-5 mb-5 p-5 text-center'>
                <h1 className='fs-3 '>Charges</h1>
                <p className='fs-4 text-muted'>List of all charges and taxes</p>
            </div>
            <div className='row p-5 text-center'>
                <div className='col-4 p-4'>
                    <img style={{ width: "70%" }} src='media/images/pricingEquity.svg' />
                    <h1 className='fs-2 mt-4 mb-4'>Free equity delivery</h1>
                    <p style={{fontSize:"17px"}} className='text-muted'>All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-4'>
                    <img style={{ width: "70%" }} src='media/images/intradayTrades.svg' />
                    <h1 className='fs-2 mt-4 mb-4'>Intraday and F&O trades</h1>
                    <p style={{fontSize:"17px"}} className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per <br/>executed order on intraday trades across <br/> equity, currency, and commodity trades. Flat <br/> ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-4'>
                    <img style={{ width: "70%" }} src='media/images/pricingEquity.svg' />
                    <h1 className='fs-2 mt-4 mb-4'>Free direct MF</h1>
                    <p style={{fontSize:"17px"}} className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP <br/> charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;