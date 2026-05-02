import React from 'react';

function Pricing() {
  return (
    <div className='container p-5'>
      <div className='row align-items-center'>
        
        <div className='col-md-5 p-5'>
          <h1 className='fs-3 mb-4'>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency in India.
            Flat fees and no hidden charges.
          </p>

          <a href='/pricing' style={{ textDecoration: "none" }}>
            See pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className='col-md-7'>
          <div className='pricing-wrapper'>

            <div className='pricing-box'>
              <img style={{width:"55%"}} src='/media/images/pricing0.svg' alt='' />
              <p className='text mt-4'>Free account <br /> opening</p>
            </div>

            <div className='pricing-box'>
              <img style={{width:"50%"}} src='/media/images/pricing0.svg' alt='' />
              <p className='text mt-4'>
                Free equity delivery <br /> and direct mutual funds
              </p>
            </div>

            <div className='pricing-box'>
              <img style={{width:"55%"}} src='/media/images/intradayTrades.svg' alt='' />
              <p className='text mt-4'>Intraday and <br /> F&O</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;