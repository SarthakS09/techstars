import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import esmtLogo from '../Assets/esmt.svg';
import { Twirl as Hamburger } from 'hamburger-react';
import '../Styles/Navbar.scss';

export default function Navbar() {
    const [x, setX] = useState(0);
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setX(x + 1);
        setSidebar(!sidebar);
    }

    return (
        <>
            <div className='nav-fixed'>
                <div className='left'>
                    {/* Removed the white logo */}
                </div>
                <div className='right'>
                    <div className='hamburger-wrapper'>
                        <Hamburger toggled={sidebar} className='hb' size={22} color='black' onToggle={showSidebar} />
                    </div>
                </div>
            </div>

            <div className='nav'>
                <div className='left'>
                    <NavLink to='/'><img src={esmtLogo} className='esmt-logo' alt="ESMT Logo" /></NavLink>
                </div>
                <div className='right'>
                    <Link to='https://docs.google.com/forms/d/e/1FAIpQLScJNydNjVT6jTqrM--_0Re7qhwKI20eATplWn0dkJJzvzS_aQ/viewform' className='glow-on-hover' target='_blank'>Register Now</Link>
                </div>
            </div>

            <nav className={(sidebar ? 'nav-bar active animate__animated animate__slideInUp animate__faster' : (x === 0 ? 'hidden' : 'nav-bar animate__animated animate__slideOutDown animate__faster'))}>
                <ul className='nav-menu-items'>
                    <li>
                        <NavLink to='/' onClick={showSidebar}>
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/events' onClick={showSidebar}>
                            <span>Events</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/speakers' onClick={showSidebar}>
                            <span>Speakers</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/schedule' onClick={showSidebar}>
                            <span>Schedule</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/team' onClick={showSidebar}> {/* Changed About to Team */}
                            <span>Team</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='https://docs.google.com/forms/d/e/1FAIpQLScJNydNjVT6jTqrM--_0Re7qhwKI20eATplWn0dkJJzvzS_aQ/viewform' target='_blank' onClick={showSidebar}>
                            <span>Register</span>
                        </NavLink>
                    </li>
                    <li>
                        <span className="nav-attr">emerge. evolve. exceed.</span>
                    </li>
                </ul>
            </nav>
        </>
    );
}
