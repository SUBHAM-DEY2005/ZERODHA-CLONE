import React, { useState } from 'react';
import './Faq.css';

const faqData = [
    {
        q: "What is a Zerodha account",
        a: "A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally."
    },
    {
        q: "What documents are required to open a demat account?",
        a: (
            <>
                <p>The following documents are required to open a Zerodha account online:</p>
                <ul>
                    <li>PAN number</li>
                    <li>Aadhaar Card (Linked with a phone number for OTP verification)</li>
                    <li>Cancelled cheque or bank account statement (To link your bank account)</li>
                    <li>Income proof (Required only if you wish to trade in Futures & options)</li>
                </ul>
            </>
        )
    },
    {
        q: "Are there any maintenance charges for a demat account?",
        a: (<><p>The account maintenance charges is applicable based on the account type
            For Basic Services Demat Account: Zero charges if the holding value is less than ₹4,00,000.
            For non- Basic Services Demat Account demat accounts: ₹300 per year + GST.
            To learn more about BSDA, Click here.</p></>)
    },
    {
        q: "Can I open a demat account without a bank account?",
        a: (
            <>
                <p>To open a demat account, you must have a bank account in your name.
                    If UPI verification is completed successfully, no proof of bank is needed. However, if bank verification fails, you'll need to provide either a cancelled cheque or a bank statement to link your bank account to Zerodha.</p>
            </>
        )
    },
    {
        q: "What is a Basic Services Demat Account (BSDA)?",
        a: (
            <>
            <p>BSDA is a demat account designed for retail investors with smaller holdings. It automatically applies if you have only one demat account per PAN and holdings of up to ₹10 lakhs in it. You will not be charged any Account Maintenance Charge (AMC) for holdings up to ₹4 lakhs value, and only ₹25/quarter if holdings are between ₹4 lakhs and ₹10 lakhs.</p></>
        )
    },{
        q: "Can I open a demat and trading account using the mobile app?",
        a: "Yes, You can open a demat and trading account completely online using the Zerodha Kite mobile app, available on Android and iOS."
    }
];

function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="container pad">
            <h2 className="mb-5 fw-normal fs-3">FAQs</h2>
            <div className="faq-wrapper">
                {faqData.map((item, index) => (
                    <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                        <div className="blue-accent"></div>

                        <div className="faq-header" onClick={() => toggleAccordion(index)}>
                            <span className="faq-question">{item.q}</span>
                            <span className="faq-icon">{activeIndex === index ? '⌃' : '⌄'}</span>
                        </div>

                        <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                            <div className="answer-content">
                                {item.a}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faq;