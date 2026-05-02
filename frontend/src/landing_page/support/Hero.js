import React from 'react'


function Hero() {
    return (
        <div className="container-fluid p-5" id='support'>
            <div className="d-flex justify-content-between align-items-center" id='sub'>

                <h1>Support Portal</h1>

                <button className="btn btn-primary px-4">
                    My tickets
                </button>
            </div>
            <div className='row mt-4' id='sub'>
                <input placeholder='Eg: How do I open my account, How do I activate F&O...' style={{height:"60px", border:'1px solid #ededed', borderRadius:"5px"}}></input>
            </div>
        </div>
    );
}

export default Hero;