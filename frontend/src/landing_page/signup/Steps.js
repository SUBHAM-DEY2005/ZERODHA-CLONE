import React, { useState } from 'react';
import "./Step.css";

function Steps() {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <div className='container-fluid py-5 mb-5' style={{backgroundColor:"#f8f8f8", height:"450px"}}>
            <div className='container'>
                <h1 className='text-center fs-3 fw-normal' style={{ color: "#444" }}>
                    Steps to open a demat account with Zerodha
                </h1>

                <div className='row align-items-center'>
                    {/* Left Side: Video/Thumbnail */}
                    <div className='col-lg-6 mb-4 mb-lg-0'>
                        <div className="video-container-acop">
                            {!showVideo ? (
                                <div className="video-placeholder" onClick={() => setShowVideo(true)}>
                                    <img 
                                        src="media/images/steps-acop.svg" 
                                        alt="Steps to open a demat account" 
                                        className="img-fluid"
                                    />
                                    {/* Custom Play Button Overlay */}
                                    <div className="play-button">
                                        <div className="play-triangle"></div>
                                    </div>
                                </div>
                            ) : (
                                <div id="video-embed-acop">
                                    <iframe 
                                        id="youtube-iframe-acop" 
                                        title="Zerodha Account Opening"
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowFullScreen 
                                        src="https://www.youtube.com/embed/JFx9tzhBrjE?autoplay=1"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Side: Step List */}
                    <div className='col-lg-6 ps-lg-5'>
                        <div className="steps-list">
                            <div className="step-item">
                                <span className="step-number">01</span>
                                <p className="step-text">Enter the requested details</p>
                            </div>
                            <div className="step-item">
                                <span className="step-number">02</span>
                                <p className="step-text">Complete e-sign & verification</p>
                            </div>
                            <div className="step-item">
                                <span className="step-number">03</span>
                                <p className="step-text">Start investing!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Steps;