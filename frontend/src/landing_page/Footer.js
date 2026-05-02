import React from 'react'

function Footer() {
    return (
        <footer className='bg-light border-top'>
            <div className='container mt-5' style={{ padding: "0px 80px 0px 80px" }}>
                <div className='row mt-5'>
                    <div className='col' style={{marginRight:"20px"}}>
                        <img src='/media/images/logo.svg' style={{ width: "60%", marginBottom:"20px" }} />
                        <p className='text-muted copyright'>© 2010 - 2026, Zerodha Broking Ltd.</p>
                        <p className='text-muted copyright mt-3'>All rights reserved.</p>
                        <div className='row mt-4 mb-4'>
                            <div className='col'>
                                <a style={{color:"gray", marginRight:"15px", fontSize:"18px", opacity:"1"}} href='https://x.com/zerodha' ><i class="fa-brands fa-x-twitter"></i></a>
                                <a style={{color:"gray",  marginRight:"15px", fontSize:"18px"}} href='https://www.facebook.com/zerodha.social'><i class="fa-brands fa-square-facebook"></i></a>
                                <a style={{color:"gray",  marginRight:"15px", fontSize:"18px"}} href='https://www.instagram.com/zerodhaonline/'><i class="fa-brands fa-instagram"></i></a>
                                <a style={{color:"gray",  marginRight:"15px", fontSize:"18px"}} href='https://www.linkedin.com/company/zerodha/'><i class="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <hr />
                        <div className='row mt-4 mb-3'>
                            <div className='col'>
                                <a style={{color:"gray",  marginRight:"15px", fontSize:"18px"}} href='https://www.youtube.com/@zerodhaonline'><i class="fa-brands fa-youtube"></i></a>
                                <a style={{color:"gray",  marginRight:"15px", fontSize:"18px"}} href='https://www.whatsapp.com/channel/0029Va8tzF0EquiIIb9j791g'><i class="fa-brands fa-whatsapp"></i></a>
                                <a style={{color:"gray",  marginRight:"15px", fontSize:"18px"}} href='https://t.me/zerodhain'><i class="fa-brands fa-telegram"></i></a>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col app-badges'>
                                <a href=''><img src='/media/images/google-play-badge-light.svg'/></a>
                                <a href=''><img src='/media/images/appstore-badge-light.svg' /></a>
                            </div>
                        </div>
                    </div>
                    <div className='col '>
                        <p className='fs-5'>Account</p>
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>Open demat account</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>Minor demat account</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>NRI demat account</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>HUF demat account</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>Commodity</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>Dematerialisation</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>Fund transfer</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>MTF</a><br />
                    </div>
                    <div className='col'>
                        <p className='fs-5'>Support</p>
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>Contact us</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>Support portal</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>How to file a complaint?</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>Status of your complaints</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>Bulletin</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>Circular</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>Z-Connect blog</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>Downloads</a><br />
                    </div>
                    <div className='col'>
                        <p className='fs-5'>Company</p>
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>About</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>Philosophy</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>Press & media</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>Careers</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>Zerodha Cares (CSR)</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>Zerodha.tech</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>Open source</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>Referral program</a>
                    </div>
                    <div className='col'>
                        <p className='fs-5'>Quick links</p>
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>Upcoming IPOs</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>Brokerage charges</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>Market holidays</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>Economic calendar</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>Calculators</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>Markets</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>Sectors</a><br />
                        <a className="text-muted link" href='' style={{textDecoration: "none"}}>Gift Nifty</a><br />
                    </div>
                </div>
                <div className='mt-5 text-muted' style={{ fontSize: "10px" }}>
                    <p>
                        Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a style={{textDecoration: "none"}} href=''>complaints@zerodha.com,</a> for DP related to <a style={{textDecoration: "none"}} href=''>dp@zerodha.com.</a> Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                    </p>
                    <p>
                        Procedure to file a complaint on <a style={{textDecoration: "none"}} href=''>SEBI SCORES:</a> Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                    </p>
                    <p>
                        <a style={{textDecoration: "none"}} href=''>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a>
                    </p>
                    <p>
                        Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                    </p>
                    <p>
                        Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                    </p>
                    <p>
                        India's largest broker based on networth as per NSE. <a style={{textDecoration: "none"}} href=''>NSE broker factsheet</a>
                    </p>
                    <p>
                        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a>create a ticket here.</a>
                    </p>
                    <p>
                        *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
                    </p>
                    <p>
                        Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).
                    </p>
                </div>
                <div className='text-center mb-3'>
                    <a className="text-muted"  href=''style={{textDecoration: "none"}}>NSE</a>&nbsp;&nbsp;&nbsp;
                    <a className="text-muted" href=''style={{textDecoration: "none"}}>BSE</a> &nbsp;&nbsp;&nbsp;
                    <a className="text-muted" href=''style={{textDecoration: "none"}}>MCX </a>&nbsp;&nbsp;&nbsp;
                    <a className="text-muted" href=''style={{textDecoration: "none"}}>Terms & conditions</a> &nbsp;&nbsp;&nbsp;
                    <a className="text-muted" href=''style={{textDecoration: "none"}}>Policies & procedures</a> &nbsp;&nbsp;&nbsp;
                    <a className="text-muted" href=''style={{textDecoration: "none"}}>Privacy policy </a>&nbsp;&nbsp;&nbsp;
                    <a className="text-muted" href=''style={{textDecoration: "none"}}>Disclosure </a>&nbsp;&nbsp;&nbsp;
                    <a className="text-muted" href=''style={{textDecoration: "none"}}>For investor's attention </a>&nbsp;&nbsp;&nbsp;
                    <a className="text-muted" href=''style={{textDecoration: "none"}}>Investor charter</a>&nbsp;&nbsp;&nbsp;
                </div>
            </div>
        </footer>
    );
}


export default Footer;