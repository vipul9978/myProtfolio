import React, { useState } from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import { motion } from 'framer-motion'

const NavBar = () => {


    let lastScrollTop = 0;
    window.addEventListener("scroll", function () {
        let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            document.getElementById("nav").classList.remove("off");
            document.getElementById("nav").classList.add("show");
        } else {
            document.getElementById("nav").classList.remove("show");
            document.getElementById("nav").classList.add("off");
        }
        lastScrollTop = scrollTop;
    });




    const [Clicked, setClicked] = useState(true)

    document.querySelector("body").style.overflowY = (Clicked ? "" : "hidden");

    return (
        <div className='navWrapper'>
            <nav className='NavBar flex' id="nav">
                <div className='container flex'>
                    <div className="navbar-brand flex">
                        <Link to="/">VM</Link>
                    </div>
                    <ul className='left flex'>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        {/* <li>
                        <Link to="/Project">Projects</Link>
                    </li> */}
                        <Button>hello@gamil.com</Button>
                    </ul>

                    {/* <div className="menubtn" >
                        <i onClick={() => setClicked(!Clicked)} className="fas fa-bars"></i>
                    </div> */}
                </div>
            </nav >
            {/* <section className={`mobileNav flex ${Clicked ? "" : "clickmenu"}`}>
                <i onClick={() => setClicked(!Clicked)} className="fas fa-times"></i>
                <ul className='left flex'>
                    <li onClick={() => setClicked(!Clicked)} className='li flex'>
                        <motion.span
                            className='menuLine'
                            key="a1"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                        ></motion.span>
                        <Link to="/About">About</Link>
                        <div className='btn flex'>
                            <svg width="2em" height="1.5em" viewBox="0 0 32 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path fill="white" d="M31.68 13.1892C31.7333 13.1351 31.7333 13.0811 31.7333 13.027C31.7867 12.973 31.84 12.8649 31.84 12.8108C31.84 12.7568 31.8933 12.7027 31.8933 12.5946C31.8933 12.5405 31.9467 12.4324 31.9467 12.3784C31.9467 12.2703 32 12.1622 32 12.0541C32 12 32 12 32 11.9459C32 11.8919 32 11.8919 32 11.8378C32 11.7297 32 11.6216 31.9467 11.5135C31.9467 11.4054 31.8933 11.3514 31.8933 11.2973C31.8933 11.2432 31.84 11.1892 31.84 11.1351C31.7867 11.027 31.7333 10.973 31.68 10.8649C31.68 10.8108 31.6267 10.8108 31.6267 10.7568C31.52 10.6486 31.4667 10.5405 31.36 10.4324L21.7067 0.648649C20.8533 -0.216216 19.52 -0.216216 18.6667 0.648649C17.8133 1.51351 17.8133 2.86487 18.6667 3.72973L24.6933 9.83784H2.13333C0.96 9.83784 0 10.8108 0 12C0 13.1892 0.96 14.1622 2.13333 14.1622H24.6933L18.6667 20.2703C17.8133 21.1351 17.8133 22.4865 18.6667 23.3513C19.0933 23.7838 19.6267 24 20.16 24C20.6933 24 21.2267 23.7838 21.6533 23.3513L31.36 13.5135C31.4667 13.4054 31.5733 13.2973 31.68 13.1892Z" ></path>
                            </svg>
                        </div>
                    </li>

                    <div className="menuBottom flex">
                        <div className='contactDetails flex'>
                            <h4>+91 95784 452***</h4>
                            <Button>hello@gamil.com</Button>
                        </div>
                        <div className='socialIcone flex'>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-twitter"></i>
                        </div>
                    </div>
                </ul>
            </section> */}
        </div>
    )
}

export default NavBar
