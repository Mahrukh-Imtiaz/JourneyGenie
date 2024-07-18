import React, { useEffect } from 'react'
import './footer.css'
import video1 from '../../Assets/video1.mp4'
import {FiChevronRight, FiSend} from 'react-icons/fi'
import logo from '../../Assets/logo.png'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  // ANIMATION for Scroll
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={video1} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <h1>Subsribe to get the latest news about us</h1>
          </div>

          <div className="inputDiv">
            <input className='SubscribeInput' data-aos="fade-up" type="text" placeholder='Enter Email Address'/>
            <button data-aos="fade-up" className="btn flex" type='submit'>
             Subscribe <FiSend className="icon" />
            </button>
          </div>

        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href='#' className='logo flex'>
                <img src={logo} alt="Error" className="icon" ></img>
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
            Your ultimate travel companion for personalized trip planning, curated recommendations, and seamless booking experiences. Discover, plan,
             and explore with ease. Let JourneyGenie revolutionize the way you travel, providing tailored destination suggestions, intuitive itinerary tools, and real-time assistance. Say goodbye to travel stress and hello to unforgettable adventures with JourneyGenie by your side

            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <a href='https://www.youtube.com/@JourneyGenie11' target='_blank' rel="noreferrer"><AiOutlineYoutube className="icon" /></a>
              <a href='https://www.instagram.com/journeygenie_web/' target='_blank' rel="noreferrer"><AiOutlineInstagram className="icon"/></a>
              <a href='https://www.tripadvisor.com/' target='_blank' rel="noreferrer"><FaTripadvisor className="icon"/></a>

            </div>
          </div>

          <div className="footerLinks grid">
              <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                <span className="groupTitle">
                  OUR WEBSITE
                </span>

                <li className="footerList flex">
                  <FiChevronRight className='icon' />
                  Services
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon' />
                  About
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon' />
                  Tourism
                </li>
              </div>

              <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                <span className="groupTitle">
                  OTHER WEBSITES
                </span>

                <li className="footerList flex">
                  <FiChevronRight className='icon' />
                  Airbnb
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon' />
                  Tripadvisor
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon' />
                  Booking.com
                </li>
              </div>
          </div>

          <div className="footerDiv flex">
            <small>TRAVEL PLANNER WEBSITE</small>
            <small> &copy; COPYRIGHTS RESERVED - JOURNIEGENIE 2024</small>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
