import React from 'react'

function Hero() {
    return ( 
        <div className='container p-5 text-center mb-5'>
            <div className='row'>
                <img src='/media/images/homeHero.png' className='mb-5'/>
                <h1 className='mt-5 fs-2'>Invest in everything</h1>
                <p style={{fontSize:"20px"}}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 btn btn-primary fs-5 mb-5 mt-3' style={{ width: "18%", margin: "0 auto" }}><a style={{textDecoration:"none", color:"white"}} href='/Signup'>Sign up for free</a></button>
            </div>

        </div>
     );
}

export default Hero;