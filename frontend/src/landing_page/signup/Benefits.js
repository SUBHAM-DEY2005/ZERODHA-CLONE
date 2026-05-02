import React from 'react'


function Benefits() {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='col text-center'>
                    <img style={{width:"60%", marginBottom:"20px"}} src='/media/images/acop-benefits.svg'/>
                    <h4>Benefits of opening a Zerodha demat account</h4>
                </div>
                <div className='col' style={{lineHeight:"1.8"}}>
                    <h5  className='mb-4'>Unbeatable pricing</h5>
                    <p className='text-muted' style={{fontSize:"17px"}}>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
                    <h5 className='mb-4'>Best investing experience</h5>
                    <p className='text-muted' style={{fontSize:"17px"}}>Simple and intuitive trading platform with an easy-to-understand user interface.</p>
                    <h5 className='mb-4'>No spam or gimmicks</h5>
                    <p className='text-muted' style={{fontSize:"17px"}}>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
                    <h5 className='mb-4'>The Zerodha universe</h5>
                    <p className='text-muted' style={{fontSize:"17px"}}>More than just an app — gain free access to the entire ecosystem of our partner products.</p>
                </div>
            </div>
        </div>
     );
}

export default Benefits;