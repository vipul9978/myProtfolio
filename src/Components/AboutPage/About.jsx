import React, { useEffect, useRef, useState } from 'react'
import './About.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ButtonSec from '../Button/ButtonSec'
import LightboxComponent from '../light/LightboxComponent'
import RoundBtn from '../Button/RoundBtn';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Button from '../Button/Button';
import HomeAnim from '../Animation/HomeAnim';
import OutherAnim from '../Animation/OutherAnim';
import { frame, motion } from 'framer-motion';
import Canvas from '../canvas/Canvas';
import Cursor from '../cursor/cursor';
import Project from '../ProjectComponent/Project';



const elem = [
  {
    imageUrl: "images/1.webp",
    cardTitle: "firest",
    cardDescription: "Impactful branding and high-end "

  },
  {
    imageUrl: "images/2.jpg",
    cardTitle: "",
    cardDescription: ""

  },
  {
    imageUrl: "images/3.jpg",
    cardTitle: "firest",
    cardDescription: "Impactful branding and high-end "

  },
  {
    imageUrl: "images/4.webp",
    cardTitle: "firest",
    cardDescription: "Impactful branding and high-end "

  },
  {
    imageUrl: "images/5.webp",
    cardTitle: "firest",
    cardDescription: "Impactful branding and high-end "
  },
  {
    imageUrl: "images/6.webp",
    cardTitle: "firest",
    cardDescription: "Impactful branding and high-end "
  },

]
const client = [
  {
    imageUrl: "images/client1.webp",
  },
  {
    imageUrl: "images/client2.webp",


  },
  {
    imageUrl: "images/client3.webp",

  },
  {
    imageUrl: "images/client4.webp",

  },
  {
    imageUrl: "images/client5.webp",
  },
  {
    imageUrl: "images/client6.webp",
  },
  {
    imageUrl: "images/client1.webp",
  },
  {
    imageUrl: "images/client2.webp",
  },
  {
    imageUrl: "images/client3.webp",

  },
  {
    imageUrl: "images/client4.webp",

  },
  {
    imageUrl: "images/client5.webp",
  },
  {
    imageUrl: "images/client6.webp",
  },
  {
    imageUrl: "images/client4.webp",

  },
  {
    imageUrl: "images/client5.webp",
  },
  {
    imageUrl: "images/client6.webp",
  },

]
const testimonial = [
  {
    "writerName": "Design",
    "testimonialDescription": "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Soluta At Animi Aut Perspiciatis, Quam Nam Ad Sunt Illum Numquam Dolores Adipisci, Odit, Quos Inventore Minima Accusamus Voluptatem! Delectus, Dolorem Iusto!",
    "testimonialImage": "images/firest.webp"
  },
  {
    "writerName": "Project",
    "testimonialDescription": "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit",
    "testimonialImage": "images/second.webp"
  },
  {
    "writerName": "Execution",
    "testimonialDescription": "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Soluta At Animi Aut Perspiciatis, Quam Nam Ad Sunt Illum Numquam Dolores Adipisci, Odit, Quos Inventore",
    "testimonialImage": "images/third.webp"
  }
]
const data = [
  {
    "menuItem": "Design",
    "projectDetail": "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Soluta At Animi Aut Perspiciatis, Quam Nam Ad Sunt Illum Numquam Dolores Adipisci, Odit, Quos Inventore Minima Accusamus Voluptatem! Delectus, Dolorem Iusto!",
    "projectImg": "https://images.unsplash.com/photo-1685478237503-60bdeae140c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
  },
  {
    "menuItem": "Project",
    "projectDetail": "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit",
    "projectImg": "https://images.unsplash.com/photo-1685478237284-1a791984c17a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
  },
  {
    "menuItem": "Execution",
    "projectDetail": "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Soluta At Animi Aut Perspiciatis, Quam Nam Ad Sunt Illum Numquam Dolores Adipisci, Odit, Quos Inventore",
    "projectImg": "https://images.unsplash.com/photo-1685478237352-5d605e9ed29e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
  }
]

const About = () => {
  const section6 = useRef(null)
  const [property, setProperty] = useState(0)
  const handlproperty = (name) => {
    setProperty(name)
  }


  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(".scrolltext1", {
      ease: "linear",
      x: 500,
      scrollTrigger: {
        trigger: ".section5",
        toggerAction: "restart pause reverse pause",
        start: "Top bottom",
        // markers:true,
        scrub: 2,
        duration: ".02s",
      }
    })
    gsap.to(".scrolltext2", {
      ease: "linear",
      x: -500,
      scrollTrigger: {
        trigger: ".section5",
        toggerAction: "restart pause reverse pause",
        start: "top center",
        // markers:true,
        scrub: 2,
        duration: ".02s",
      }
    })
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section6",
        toggleActions: "restart pause reverse pause",
        start: "top bottom",
        end: "bottom top",
        // markers: true,
        scrub: 2,
      }
    })

    tl.to(".firest", {
      left: -30,
    }, "a").to(".second", {
      right: 30
    }, "a").to(".third", {
      left: -30

    }, "a").to(".fourth", {
      right: 30
    }, "a");


    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section8",
        start: "top 20%",
        end: "bottom center",
        // markers: true,
        scrub: 2,
      }
    })
    tl2.to(".showCase1", {
      y: "-100%",
    }, "b").to(".showCase2", {
      y: "-100%",
    }, "b")



    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section3",
        start: "top bottom",
        end: "80% center",
        // markers: true,
        scrub: 2,
      },

    })

    tl3.to(".line", {
      width: "100%",
    }).to(".visible", {
      opacity: "1",
    });

    const tl5 = gsap.timeline();
    tl5.to('.section1 ', {
      top: 0,
      opacity: 1,
      duration: 3,
      ease: 'power3.inOut',
    }, "a")


  }, []);


  const handlePrevClick = () => {
    $(".owl-carousel").trigger("prev.owl.carousel");
  };

  const handleNextClick = () => {
    $(".owl-carousel").trigger("next.owl.carousel");
  };


  return (
    <>
      {/* <HomeAnim /> */}
      <OutherAnim />
      <section className='AboutPage'>
        <Cursor />
        <section className="section1 flex">
          <div className="container flex">
            <p className='work'>GRAPHIC DESIGNER, WEBDESIGNER & WEBFLOW EXPERT</p>
            <h2 className='hadding'>Impactful branding and high-end <br />
              Webflow websites for creatives.</h2>
            <Button>Let's start a project together</Button>
            <div className='clientsContainer flex'>
              <OwlCarousel className='clientsRow'
                // items={5}
                margin={20}
                autoplay={true}
                responsive={false}
                navSpeed={300}
                loop={true}
              >
                {client.map((elem, i) => {
                  const { imageUrl, cardTitle, cardDescription } = elem;
                  return (
                    <div className="clients flex" key={i}>
                      <img height={"50px"} width={"100px"} className="clients-img" src={imageUrl} alt={cardTitle} />
                    </div>
                  );
                })}
              </OwlCarousel>
            </div>
          </div>
        </section>

        <Canvas />

        {/* <section className="section2">
          <div className="container">
            <LightboxComponent />
          </div>
        </section> */}

        <section className="section3 flex">
          <div className="container flex">
            <div>
              <div>
                <h2 className='textLine'>You need a website.<span className='line'></span></h2>
              </div>
              <h2 className='visible'>You need a high-performing website.</h2>
              <br />
              <p>This word will make the difference between a simple visit on your website <br /> and a sale.</p>
              <br />
              <p>Webesigner and Webflow expert, I help you solve your online visibility <br /> challenges and generate more sales by designing custom websites, <strong> art  <br />direction dedicated to your brand and bespoke digital strategies. </strong></p>
            </div>
          </div>
        </section>
        {/* <section className="section4 flex">
          <div className="container project">
            <div className='top flex'>
              <h2 className='subHadding'>Latest project</h2>
              <div className='roundBtns flex'>
                <RoundBtn click={handlePrevClick}>
                  <div className='arrow flex' style={{ transform: 'translate(-50%, -50%) rotateZ(180deg)' }}>
                    <svg width="2em" height="1.5em" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M31.68 13.1892C31.7333 13.1351 31.7333 13.0811 31.7333 13.027C31.7867 12.973 31.84 12.8649 31.84 12.8108C31.84 12.7568 31.8933 12.7027 31.8933 12.5946C31.8933 12.5405 31.9467 12.4324 31.9467 12.3784C31.9467 12.2703 32 12.1622 32 12.0541C32 12 32 12 32 11.9459C32 11.8919 32 11.8919 32 11.8378C32 11.7297 32 11.6216 31.9467 11.5135C31.9467 11.4054 31.8933 11.3514 31.8933 11.2973C31.8933 11.2432 31.84 11.1892 31.84 11.1351C31.7867 11.027 31.7333 10.973 31.68 10.8649C31.68 10.8108 31.6267 10.8108 31.6267 10.7568C31.52 10.6486 31.4667 10.5405 31.36 10.4324L21.7067 0.648649C20.8533 -0.216216 19.52 -0.216216 18.6667 0.648649C17.8133 1.51351 17.8133 2.86487 18.6667 3.72973L24.6933 9.83784H2.13333C0.96 9.83784 0 10.8108 0 12C0 13.1892 0.96 14.1622 2.13333 14.1622H24.6933L18.6667 20.2703C17.8133 21.1351 17.8133 22.4865 18.6667 23.3513C19.0933 23.7838 19.6267 24 20.16 24C20.6933 24 21.2267 23.7838 21.6533 23.3513L31.36 13.5135C31.4667 13.4054 31.5733 13.2973 31.68 13.1892Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </RoundBtn>
                <RoundBtn click={handleNextClick}>
                  <div className='arrow flex'>
                    <svg width="2em" height="1.5em" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M31.68 13.1892C31.7333 13.1351 31.7333 13.0811 31.7333 13.027C31.7867 12.973 31.84 12.8649 31.84 12.8108C31.84 12.7568 31.8933 12.7027 31.8933 12.5946C31.8933 12.5405 31.9467 12.4324 31.9467 12.3784C31.9467 12.2703 32 12.1622 32 12.0541C32 12 32 12 32 11.9459C32 11.8919 32 11.8919 32 11.8378C32 11.7297 32 11.6216 31.9467 11.5135C31.9467 11.4054 31.8933 11.3514 31.8933 11.2973C31.8933 11.2432 31.84 11.1892 31.84 11.1351C31.7867 11.027 31.7333 10.973 31.68 10.8649C31.68 10.8108 31.6267 10.8108 31.6267 10.7568C31.52 10.6486 31.4667 10.5405 31.36 10.4324L21.7067 0.648649C20.8533 -0.216216 19.52 -0.216216 18.6667 0.648649C17.8133 1.51351 17.8133 2.86487 18.6667 3.72973L24.6933 9.83784H2.13333C0.96 9.83784 0 10.8108 0 12C0 13.1892 0.96 14.1622 2.13333 14.1622H24.6933L18.6667 20.2703C17.8133 21.1351 17.8133 22.4865 18.6667 23.3513C19.0933 23.7838 19.6267 24 20.16 24C20.6933 24 21.2267 23.7838 21.6533 23.3513L31.36 13.5135C31.4667 13.4054 31.5733 13.2973 31.68 13.1892Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </RoundBtn>
              </div>
            </div>
            <OwlCarousel
              className='projectCards flex owl-carousel'
              // items={3}
              // margin={10}
              responsiveClass={true}
              autoplay={false}
              autoplayHoverPause={false}
              responsive={{
                0: {
                  items: 1,
                  nav: false,
                },
                768: {
                  items: 2,
                  nav: false,
                },
                1000: {
                  items: 3,
                  nav: false,
                },
              }}
            >
              {elem.map((elem, i) => {
                const { imageUrl, cardTitle, cardDescription } = elem;
                return (
                  <div className="cardBody" key={i}>
                    <img height={"100%"} width={"100%"} className="carousel-image" src={imageUrl} alt={cardTitle} />
                    <div className="cardDetails">
                      <h2 className='cardTitle'>{cardTitle}</h2>
                      <h2 className='cardTitle'>{cardTitle}</h2>
                      <h4 className='cardDescription'>{cardDescription}</h4>
                    </div>
                  </div>
                );
              })}
            </OwlCarousel>
          </div>
        </section> */}

        <Project />
        <section className="section5 flex">
          <div className="container flex">
            <div className='textCotainer flex'>
              <h2 className='scrolltext1'>Show me what you've got ! - Show me what you've got ! - Show me what you've got ! - Show me what you got ! - Show me what you've got ! - Show me what you've got ! - Show me what you got ! - Show me what you've got !</h2>
              <h2 className='scrolltext2'>
                Photography - Webflow - Webdesign - Graphics - Strategy - Photography - Webflow - Webdesign - Graphics - Strategy
              </h2>
            </div>
          </div>
        </section>
        <section className="section6 flex" ref={section6}>
          <div className="container full flex">
            <div className="left6 flex">
              <h3 className='work'>BRANDING</h3>
              <h2>Your brand identity at the core of my approach</h2>
              <p>A 360° management of your project! <br />
                I can craft your graphic identiy, edit a corporate brand book, <br /> create your entire webdesign and develop your website <strong> : I <br /> ensure the continuity of your brand identity and support <br /> you during each key step of your project.</strong></p>
            </div>
            <div className="right6 flex">
              <motion.div drag dragConstraints={section6} whileDrag={{ scale: 1.1 }} dragElastic={{ bounceSiffness: 100, bounceDamping: 30 }} className='firest'></motion.div>
              <motion.div drag dragConstraints={section6} whileDrag={{ scale: 1.1 }} dragElastic={{ bounceSiffness: 100, bounceDamping: 30 }} className='second'></motion.div>
              <motion.div drag dragConstraints={section6} whileDrag={{ scale: 1.1 }} dragElastic={{ bounceSiffness: 100, bounceDamping: 30 }} className='third'></motion.div>
              <motion.div drag dragConstraints={section6} whileDrag={{ scale: 1.1 }} dragElastic={{ bounceSiffness: 100, bounceDamping: 30 }} className='fourth'></motion.div>
              <motion.div drag dragConstraints={section6} whileDrag={{ scale: 1.1 }} dragElastic={{ bounceSiffness: 100, bounceDamping: 30 }} className='five'></motion.div>
            </div>
          </div>
        </section>
        <section className="section7 flex">
          <div className="container flex">
            <div className="left7 flex">
              <div className='videocontainer'>
                <video src="images/61dd9ddd76c6a0e00f7a4cb6_Webdesign - Frecerid_Bau-transcode.mp4" autoPlay loop muted></video>
              </div>
            </div>
            <div className="right7 flex">
              <h3 className='work'>WEBDESIGN</h3>
              <h2>Custom websites, high-performing results and easy-to-manage backoffice</h2>
              <p>No template! As a Webflow expert, I create custom websites <br />
                made to enhance your brand experience and your <br /> productivity. Easy to access, SEO driven and maintenance-free  :<strong><br /> Through Webflow I will conceive you a website that<br /></strong></p>
            </div>
          </div>
        </section>
        <section className="section8 flex">
          <div className="container flex">
            <div className="left8 flex">
              <h3 className='work'>VISUAL COMMUNICATION</h3>
              <h2>Event-oriented</h2>
              <p>Does your creative project require event communication? <br />
                With more than 8 years of experience in this field, I design
                <br />
                memorable identities for your events. From the logo to <br /> the poster and the invitation cards:<strong> you can focus on the <br /> organisation, I will handle your communication.</strong></p>
            </div>
            <div className="right8 flex">
              <div className='showCase' >
                <div className='showCase1'></div>
                <div className='showCase2'></div>
                <div className='showCase3'></div>
                <div className='showCase4'></div>
                <div className='showCase5'></div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="section9">
          <div className='container flex'>
            <div className="left9 flex">
              <div className="gallery flex">
                <h3 className={property === 0 ? "active9" : ""} onClick={() => handlproperty(0)} >Design</h3>
                <h3 className={property === 1 ? "active9" : ""} onClick={() => handlproperty(1)} >Project</h3>
                <h3 className={property === 2 ? "active9" : ""} onClick={() => handlproperty(2)} >Execution</h3>
              </div>
              <p>{data[property].projectDetail}</p>
            </div>
            <div data-scroll scroll-section={true} data-scroll-speed={-.5} className="right9" style={{ background: `url(${data[property].projectImg})` }}>
            </div>
          </div>
        </section> */}
        <section className="section10 flex">
          <div className="container flex">
            <div className='btns10 flex'>
              <RoundBtn click={handlePrevClick}>
                <div className='arrow flex' style={{ transform: 'translate(-50%, -50%) rotateZ(180deg)' }}>
                  <svg width="2em" height="1.5em" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.68 13.1892C31.7333 13.1351 31.7333 13.0811 31.7333 13.027C31.7867 12.973 31.84 12.8649 31.84 12.8108C31.84 12.7568 31.8933 12.7027 31.8933 12.5946C31.8933 12.5405 31.9467 12.4324 31.9467 12.3784C31.9467 12.2703 32 12.1622 32 12.0541C32 12 32 12 32 11.9459C32 11.8919 32 11.8919 32 11.8378C32 11.7297 32 11.6216 31.9467 11.5135C31.9467 11.4054 31.8933 11.3514 31.8933 11.2973C31.8933 11.2432 31.84 11.1892 31.84 11.1351C31.7867 11.027 31.7333 10.973 31.68 10.8649C31.68 10.8108 31.6267 10.8108 31.6267 10.7568C31.52 10.6486 31.4667 10.5405 31.36 10.4324L21.7067 0.648649C20.8533 -0.216216 19.52 -0.216216 18.6667 0.648649C17.8133 1.51351 17.8133 2.86487 18.6667 3.72973L24.6933 9.83784H2.13333C0.96 9.83784 0 10.8108 0 12C0 13.1892 0.96 14.1622 2.13333 14.1622H24.6933L18.6667 20.2703C17.8133 21.1351 17.8133 22.4865 18.6667 23.3513C19.0933 23.7838 19.6267 24 20.16 24C20.6933 24 21.2267 23.7838 21.6533 23.3513L31.36 13.5135C31.4667 13.4054 31.5733 13.2973 31.68 13.1892Z" fill="currentColor"></path>
                  </svg>
                </div>
              </RoundBtn>
              <RoundBtn click={handleNextClick}>
                <div className='arrow flex'>
                  <svg width="2em" height="1.5em" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.68 13.1892C31.7333 13.1351 31.7333 13.0811 31.7333 13.027C31.7867 12.973 31.84 12.8649 31.84 12.8108C31.84 12.7568 31.8933 12.7027 31.8933 12.5946C31.8933 12.5405 31.9467 12.4324 31.9467 12.3784C31.9467 12.2703 32 12.1622 32 12.0541C32 12 32 12 32 11.9459C32 11.8919 32 11.8919 32 11.8378C32 11.7297 32 11.6216 31.9467 11.5135C31.9467 11.4054 31.8933 11.3514 31.8933 11.2973C31.8933 11.2432 31.84 11.1892 31.84 11.1351C31.7867 11.027 31.7333 10.973 31.68 10.8649C31.68 10.8108 31.6267 10.8108 31.6267 10.7568C31.52 10.6486 31.4667 10.5405 31.36 10.4324L21.7067 0.648649C20.8533 -0.216216 19.52 -0.216216 18.6667 0.648649C17.8133 1.51351 17.8133 2.86487 18.6667 3.72973L24.6933 9.83784H2.13333C0.96 9.83784 0 10.8108 0 12C0 13.1892 0.96 14.1622 2.13333 14.1622H24.6933L18.6667 20.2703C17.8133 21.1351 17.8133 22.4865 18.6667 23.3513C19.0933 23.7838 19.6267 24 20.16 24C20.6933 24 21.2267 23.7838 21.6533 23.3513L31.36 13.5135C31.4667 13.4054 31.5733 13.2973 31.68 13.1892Z" fill="currentColor"></path>
                  </svg>
                </div>
              </RoundBtn>
            </div>
            <OwlCarousel className="owl-carousel"
              items={3}
              margin={16}
              loop={true}
              responsiveClass={true}
              autoplay={true}
              autoplayHoverPause={false}
              responsive={{
                0: {
                  items: 1,
                  nav: false,
                },
                768: {
                  items: 1,
                  nav: false,
                },
                1000: {
                  items: 1,
                  nav: false,
                },
              }} >

              {testimonial.map((item, i) => {
                const { testimonialImage, testimonialDescription, writerName } = item;
                return (
                  <div className="testimonialBody" key={i}>
                    <img className="testimonialImage" src={testimonialImage} alt="profile img" />
                    <div className="testimonialDetails flex">
                      <h2 className='writerName'>{writerName}</h2>
                      <h4 className='testimonialDescription'>{testimonialDescription}</h4>
                      <div className="rating flex">

                        <span ><i className="checked fas fa-star"></i></span>
                        <span ><i className="checked fas fa-star"></i></span>
                        <span ><i className="checked fas fa-star"></i></span>
                        <span ><i className="checked fas fa-star"></i></span>
                        <span ><i className="checked fas fa-star"></i></span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </OwlCarousel>
          </div>
        </section>
        {/* <div className='style'>
          <section className="section11">
            <div className="container flex">
              <div className="banner flex">
                <h2>Let's meet!</h2>
                <p>Book a free 15-minute session where we will discuss <br />
                  your project, your issues and how to solve them.</p>
                <Button sty={"white"} col={"black"}>Book a free Consultation</Button>
              </div>
            </div>
          </section>
        </div> */}

      </section>
    </>
  )
}

export default About
