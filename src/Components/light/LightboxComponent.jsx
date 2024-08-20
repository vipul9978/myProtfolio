import LightGallery from 'lightgallery/react/Lightgallery.es5';
import "lightgallery/css/lightgallery.css";
import 'lightgallery/css/lg-thumbnail.css';
import React, { useEffect } from 'react'
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import "./LightBox.css"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


const LightboxComponent = () => {
  gsap.registerPlugin(ScrollTrigger);


  useEffect(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".light",
        toggleActions: "restart pause reverse pause",
        start: "top center",
        end: "bottom center",
        // markers: true,
        scrub: 2,
      }
    })

    tl.to(".item1", {
      top: 0,
    }, "a").to(".item2", {
      top: 0
    }, "a").to(".item3", {
      top: 0
    }, "a").to(".item4", {
      top: 0
    }, "a").to(".item5", {
      top: 0
    }, "a").to(".item6", {
      top: 0
    }, "a").to(".item7", {
      top: 0
    }, "a");

  }, [])



  return (
    <div className='light flex'>
      {/* <LightGallery
        speed={500}
        plugins={[lgThumbnail]}
        className="flex"
      > */}
      <a className="item1" href="images/627e27e010759ab21d0aca7d_Webdesign - 05.jpg"><img height={"100%"} width={"100%"} src="public/images/627e27e010759ab21d0aca7d_Webdesign - 05.jpg" alt="" /></a>
      <a className="item2" href="images/645bb7c6400d52edb3a2b379_Webdesign - 01.webp"><img height={"100%"} width={"100%"} src="public/images/645bb7c6400d52edb3a2b379_Webdesign - 01.webp" alt="" /></a>
      <a className="item3" href="images/6450c4512c0afcef778f727f_Webdesign - 04-1.webp"><img height={"100%"} width={"100%"} src="public/images/6450c4512c0afcef778f727f_Webdesign - 04-1.webp" alt="" /></a>
      <a className="item4" href="images/6450c4517bf5df691f2f5f29_Webdesign - 03-1.webp"><img height={"100%"} width={"100%"} src="public/images/6450c4517bf5df691f2f5f29_Webdesign - 03-1.webp" alt="" /></a>
      <a className="item5" href="images/6450c4518f7146208732ff3b_Webdesign - 02-1.webp"><img height={"100%"} width={"100%"} src="public/images/6450c4518f7146208732ff3b_Webdesign - 02-1.webp" alt="" /></a>
      <a className="item6" href="images/6450c45167b84922094cd9c5_Webdesign - 07-1.webp"><img height={"100%"} width={"100%"} src="public/images/6450c45167b84922094cd9c5_Webdesign - 07-1.webp" alt="" /></a>
      <a className="item7" href="images/6450c451bb77671ff3e9a68d_Webdesign - 06-1.webp"><img height={"100%"} width={"100%"} src="public/images/6450c451bb77671ff3e9a68d_Webdesign - 06-1.webp" alt="" /></a>

      {/* </LightGallery> */}
    </div>
  )
}

export default LightboxComponent
