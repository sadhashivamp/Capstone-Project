import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div>
            <header className="header">
                <div>
                    <Link className="links" to='/'>Home</Link>
                </div>

                <nav className='navbar'>
                    <ul>
                        <Link className="links" to='/login'>Login</Link>
                        <Link className="links" to='/signup'>SignUp</Link>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
