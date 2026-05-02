import React from 'react'


function Education() {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='col-6 p-5'> 
                    <img src='\media\images\education.svg' style={{width:"85%"}}/>
                </div>
                <div className='col-6 p-5 mt-4'>
                    <h1 className='fs-3'>Free and open market education</h1>
                    <p className='mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='https://zerodha.com/varsity/' style={{textDecoration: "none"}}>Varsity  <i class="fa-solid fa-arrow-right-long"></i> </a>
                    <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='https://tradingqna.com/' style={{textDecoration: "none"}}>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i> </a>
                </div>
            </div>
        </div>
     );
}

export default Education;