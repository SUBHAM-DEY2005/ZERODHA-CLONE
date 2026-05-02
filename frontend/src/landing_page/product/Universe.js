import React from 'react'
import { Link } from 'react-router-dom';

function Universe() {
    return (
        <div className='container text-center mb-5'>
            <h1 className='fs-3 mb-4'>The Zerodha Universe</h1>
            <p className='fs-6' style={{marginBottom:"50px"}}>Extend your trading and investment experience even further with our partner platforms</p>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col p-5'>
                    <Link style={{ textDecoration: "none" }} to='https://www.zerodhafundhouse.com/'><img style={{ width: "70%" }} src='media/images/zerodhaFundhouse.png' />
                        <p style={{fontSize:"13px"}} className='mt-3 text-muted'>Our asset management venture<br />
                            that is creating simple and transparent index<br />
                            funds to help you save for your goals.</p>
                    </Link>

                </div>
                <div className='col p-5'>
                    <Link style={{ textDecoration: "none" }} to='https://sensibull.com/'><img style={{ width: "90%" }} src='media/images/sensibullLogo.svg' />
                        <p style={{fontSize:"12px"}} className='mt-4 text-muted'>Options trading platform that lets you<br/>
                            create strategies, analyze positions, and examine<br/>
                            data points like open interest, FII/DII, and more.
                        </p>
                    </Link>
                </div>
                <div className='col p-5'>
                    <Link style={{ textDecoration: "none" }} to='https://www.tijorifinance.com/dashboard/'><img style={{ width: "55%" }} src='media/images/tijori.svg' />
                        <p style={{fontSize:"13px"}} className='mt-2 fs-8 text-muted'>Investment research platform<br/>
                            that offers detailed insights on stocks,<br/>
                            sectors, supply chains, and more.</p>
                    </Link>
                </div>
                 <div className='col-1'></div>
            </div>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col p-5'>
                    <Link style={{ textDecoration: "none" }} to='https://www.streak.tech/'><img style={{ width: "63%" }} src='media/images/streakLogo.png' />
                        <p style={{fontSize:"13px"}} className='mt-3 fs-8 text-muted'>Systematic trading platform<br/>
                            that allows you to create and backtest<br/>
                            strategies without coding.</p>
                    </Link>
                </div>
                <div className='col p-5'>
                    <Link style={{ textDecoration: "none" }} to='https://smallcase.zerodha.com/'><img style={{ width: "80%" }} src='media/images/smallcaseLogo.png' />
                        <p style={{fontSize:"13px"}} className='mt-3 fs-8 text-muted'>Thematic investing platform<br/>
                            that helps you invest in diversified<br/>
                            baskets of stocks on ETFs.</p>
                    </Link>
                </div>
                <div className='col p-5'>
                    <Link style={{ textDecoration: "none" }} to='https://joinditto.in/'><img style={{ width: "50%" }} src='media/images/dittoLogo.png' />
                        <p style={{fontSize:"13px"}} className='mt-3 fs-8 text-muted'>Personalized advice on life<br/>
                            and health insurance. No spam<br/>
                            and no mis-selling.<br/>
                        </p>
                    </Link>
                </div>
                <div className='col-1'></div>
            </div>
            <button className='p-2 btn btn-primary fs-4 mb-5 mt-5' style={{ width: "20%", margin: "0 auto" }}><a style={{textDecoration:"none", color:"white"}} href='/Signup'>Sign up for free</a></button>
        </div>
    );
}

export default Universe;