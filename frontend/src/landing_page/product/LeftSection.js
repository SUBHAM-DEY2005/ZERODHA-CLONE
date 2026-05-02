import React from 'react'

function LeftSection({ imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore, icon }) {
    return (
        <div className='container'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <img src={imageUrl} />
                </div>
                <div className='col-1'></div>
                <div className='col-4 p-5 mt-5'>
                    <h1 className='fs-3 mt-3 mb-3'>{productName}</h1>
                    <p className='fs-6'>{productDescription}</p>
                    <div className='mb-4'>
                        <a href={tryDemo} style={{ textDecoration: "none" }}>{tryDemo}{icon}</a>
                        <a href={learnMore} style={{ marginLeft: "60px", textDecoration: "none" }}>{learnMore}{icon} </a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}><img src='/media/images/googlePlayBadge.svg' /></a>
                        <a href={appStore} style={{ marginLeft: "20px" }}><img src='/media/images/appstoreBadge.svg' /></a>
                    </div>
                    <div className='col-1'></div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;