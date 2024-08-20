import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <footer className='flex'>
                <div className='footerNavigation flex'>
                    <Link to={"/"}>Home</Link>
                    <hr className='splash' />
                    <Link to={"/about"}>About</Link>
                </div>
                <div className='footerBottom flex'>
                    <div className='infodiv'>
                        <h3>
                            205 Dolomite Dr. North York,<br />
                            ON, Canada, M3J 2N1 <br />1 (416) 903.8897
                        </h3>
                        <Link to={"mailto:info@gmail.com"}>info@gmail.com <span><svg width="12px" height="12px" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5938 1.39082H10.5773L10.5773 10.4062H9.77734V2.00344L1.40553 10.3753L0.839844 9.80957L9.25859 1.39082H0.8125V0.59082H10.5938V1.39082Z" fill="currentColor"></path>
                        </svg></span></Link>
                    </div>
                    <div className='socialIcons flex'>
                        <Link to={"/"}>Home</Link>
                        <hr className='splash' />
                        <Link to={"/about"}>About</Link>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
