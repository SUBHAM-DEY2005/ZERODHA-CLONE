import React from 'react'

function Hero() {
    return ( 
        <div className='container p-5 text-center mb-5 border-bottom'>
            <div className='row'>
                <h1 className='mt-5 fs-3'>Zerodha Products</h1>
                <p className="fs-5">Sleek, modern, and intuitive trading platforms</p>
                <p className="fs-6 mb-5">Check out our <a style={{textDecoration:"none"}} href="">investment offerings <i class="fa-solid fa-arrow-right-long"></i></a></p>
            </div>

        </div>
  );
}

export default Hero;