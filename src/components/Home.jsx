import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/Resume.pdf';
import hero from './data/hero.json';
import rahul from './data/Rahul.jpg';
import Typed from 'typed.js';

const Home = () => {
  const typeRef = useRef(null);

  useEffect(()=> {

    const options = {
      strings:["Welcome to my profile","My name is Jhunna Kumar","I'm Full Stack Developer"],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }

    const typed = new Typed(typeRef.current,options)
    return ()=> {
      typed.destroy()
    }
  },[])


  return (
    <>
    <div className="container home" id="home">
      <div className="left" data-aos = "fade-up-right"
    data-aos-duration="1000">
        <h1 ref={typeRef}></h1>

        <a href={pdf} download={"resume.pdf"} className='btn btn-outline-warning my-3'>Download Resume</a>
      </div>
      <div className="right">
        <div className="img" data-aos = "fade-up-left"
    data-aos-duration="1000">

          {/* <img src={`/assets/${hero.imgSrc}`} alt="" /> */}

          <img src={rahul} alt="rahul"/>

        </div>
      </div>

    </div>
    </>
  )
}

export default Home
