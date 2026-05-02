import React from 'react'

function RightSection({ imageUrl, productName, productDescription, learnMore, icon}) {
    return (
        <div className='container'>
            <div className='row p-5'>
                <div className='col-4 p-5 mt-5'>
                    <h1 className='fs-3 mt-3 mb-3'>{productName}</h1>
                    <p className='fs-6'>{productDescription}</p>
                    <a href={learnMore} style={{textDecoration: "none" }}>{learnMore}{icon}</a>
                </div>
                <div className='col-1'></div>
                <div className='col-7'>
                    <img src={imageUrl} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;