import React from 'react'


function Team() {
    return (
        <div className='container'>
            <div className='row'>
                <h1 className='text-center fs-3'>People</h1>
            </div>
            <div className='row p-5 text-muted' style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
            <div className='col-6 p-5 text-center'>
                    <img style={{ borderRadius: "100%", width: "60%" }} src='/media/images/subham.jpg' />
                    <h4 className='mt-4'>Subham Dey</h4>
                    <h6>Developer</h6>
                </div>
                <div className='col-6 p-5'>
                    <p>Hi, I’m Subham Dey, an Information Technology student at Asansol Engineering College. I’m passionate about building full-stack web applications and solving real-world problems through code.</p>
                    <p>I have experience with technologies like React, Node.js, and REST APIs, and I enjoy creating clean, responsive, and user-friendly interfaces. Currently, I’m working on projects related to trading platforms and smart applications.</p>
                    <p>Connect on <a style={{ textDecoration: "none" }} href='https://github.com/SUBHAM-DEY2005'>Github</a> / <a style={{ textDecoration: "none" }} href='https://www.linkedin.com/in/subham-dey-6627aa28b/'>Linekdin</a> / <a style={{ textDecoration: "none" }} href=''>Portfolio</a></p>
                </div>
            </div>
            <div className='row p-5 text-muted ' style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
                <div className='col-6 p-5 text-center'>
                    <img style={{ borderRadius: "100%", width: "60%" }} src='/media/images/nithinKamath.jpg' />
                    <h4 className='mt-4'>Nithin Kamath</h4>
                    <h6>Founder, CEO</h6>
                </div>
                <div className='col-6 p-5'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a style={{ textDecoration: "none" }} href=''>Homepage</a> / <a style={{ textDecoration: "none" }} href=''>TradingQnA</a> / <a style={{ textDecoration: "none" }} href=''>Twitter</a></p>
                </div>
            </div>
            <div className='row p-5 text-muted ' style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
                <div className='col-4 p-5 text-center'>
                    <img style={{ borderRadius: "100%", width: "70%" }} src='/media/images/Nikhil.jpg' />
                    <h4 className='mt-4'>Nikhil Kamath</h4>
                    <h6>Co-founder & CFO</h6>
                </div>
                <div className='col-4 p-5 text-center'>
                    <img style={{ borderRadius: "100%", width: "70%" }} src='/media/images/Kailash.jpg' />
                    <h4 className='mt-4'>Dr. Kailash Nadh</h4>
                    <h6>CTO</h6>
                </div>
                <div className='col-4 p-5 text-center'>
                    <img style={{ borderRadius: "100%", width: "70%" }} src='/media/images/Venu.jpg' />
                    <h4 className='mt-4'>Venu Madhav</h4>
                    <h6>COO</h6>
                </div>

                <div className='row p-5 text-muted ' style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
                    <div className='col-4 p-5 text-center'>
                        <img style={{ borderRadius: "100%", width: "70%" }} src='/media/images/Seema.jpg' />
                        <h4 className='mt-4'>Seema Patil</h4>
                        <h6>Director</h6>
                    </div>
                    <div className='col-4 p-5 text-center'>
                        <img style={{ borderRadius: "100%", width: "70%" }} src='/media/images/karthik.jpg' />
                        <h4 className='mt-4'>Karthik Rangappa</h4>
                        <h6>Chief of Education</h6>
                    </div>
                    <div className='col-4 p-5 text-center'>
                        <img style={{ borderRadius: "100%", width: "70%" }} src='/media/images/Austin.jpg' />
                        <h4 className='mt-4'>Austin Prakesh</h4>
                        <h6>Director Strategy</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;