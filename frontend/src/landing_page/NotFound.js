import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row p-5'>
                <h4 className='mb-4'>404</h4>
                <h1 className='fs-2'>Kiaan couldn’t find that page</h1>
                <p className='fs-5'>We couldn’t find the page you were looking for.<br/>
                    Visit <Link to="/" style={{textDecoration:"none"}}>Zerodha’s home page</Link>
                </p>
            </div>

        </div>
     );
}

export default NotFound;