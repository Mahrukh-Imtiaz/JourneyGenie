import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bg1 from '../../Assets/bg1.jpg';
import d1 from '../../Assets/d1.jpg';
import d2 from '../../Assets/d2.jpg';
import d3 from '../../Assets/d3.jpg';
import d4 from '../../Assets/d4.jpg';
import d5 from '../../Assets/d5.jpg';
import d6 from '../../Assets/d6.jpg';
import blog1 from '../../Assets/blog1.jpg';
import blog2 from '../../Assets/blog2.jpg';
import './home.css';
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  const [showText, setShowText] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [texts, setTexts] = useState([
    {
      heading: 'Seamless Booking Experiences Await You',
      subheading: 'Explore, Plan, and Discover with JourneyGenie by Your Side'
    },
    {
      heading: 'Discover Tailored Travel Experiences with Ease',
      subheading: 'Talk to an advisor, pre-view the hotels, calculate your budget and much more'
    },
    {
      heading: 'Explore New Destinations with Confidence',
      subheading: 'Plan your trips, get expert advice, and make the most of your travels'
    },
    // Add more text variations as needed
  ]);

  useEffect(() => {
    const initialTextTimeout = setTimeout(() => {
      setShowText(true);
    }, 1000);

    const cycleTextTimeout = setTimeout(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => {
      clearTimeout(initialTextTimeout);
      clearTimeout(cycleTextTimeout);
    };
  }, [textIndex, texts]);


  const largeDestinations = [
    {
      image: d2,
      heading: 'Dubai, UAE',
      description: 'Beautiful beaches, record-breaking attractions and experiences like no other'
    },
    {
      image: d1,
      heading: 'Osaka, Japan',
      description: 'A charming, relaxed city best known for its food, fun and nightlife'
    }
  ];

  // Define destinations for small containers with corresponding text and descriptions
  const smallDestinations = [
    {
      image: d3,
      heading: 'New York, USA',
      description: "Explore the City's many cultural enclaves and see the five boroughs from every angle"
    },
    {
      image: d4,
      heading: 'Bali, Indonesia',
      description: 'A magical blend of a colourful culture, friendly people, stunning nature and countless activities'
    },
    {
      image: d5,
      heading: 'London, England',
      description: 'A sprawling city at the center of everything: art, history, culture—you name it'
    },
    {
      image: d6,
      heading: 'Istanbul, Turkey',
      description: 'Spread across two continents and between two seas, Istanbul is a city of empires past'
    }
  ];

  const [largeDestinationIndex, setLargeDestinationIndex] = useState(0);
  const [smallDestinationIndex, setSmallDestinationIndex] = useState(0);

  useEffect(() => {
    const intervalLarge = setInterval(() => {
      setLargeDestinationIndex((prevIndex) => (prevIndex + 1) % largeDestinations.length);
    }, 5000);

    const intervalSmall = setInterval(() => {
      setSmallDestinationIndex((prevIndex) => (prevIndex + 1) % smallDestinations.length);
    }, 5000);

    return () => {
      clearInterval(intervalLarge);
      clearInterval(intervalSmall);
    };
  }, [largeDestinationIndex, smallDestinationIndex]);


  return (
    <section>
      <Navbar/>
      <div className='maincontainer'>
        <div className='backgroundImage'>
          <img src={bg1} alt="wrong path" />
        </div>
        <div className='content'>
          <h1 className={showText ? 'show' : ''}>{texts[textIndex].heading}</h1>
          <p className={showText ? 'show' : ''}>{texts[textIndex].subheading}</p>
          <div className='buttoncontainer'>
            <button className='getStartedButton'>Get Started</button>
          </div>
        </div>
      </div>

      <div className='servicesContainer'>
        <div className="servicesHeader">
          <h2>We Offer the Best Services</h2>
        </div>
        <div className="servicesList">
          <div className='service service1'>
          <Link className='service-Link' to= "./Weather">
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill= "#1D3D6E" class="bi bi-thermometer-sun" viewBox="0 0 16 16">
                <path d="M5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585A1.5 1.5 0 0 1 5 12.5" />
                <path d="M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1m5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m4.243 1.757a.5.5 0 0 1 0 .707l-.707.708a.5.5 0 1 1-.708-.708l.708-.707a.5.5 0 0 1 .707 0M8 5.5a.5.5 0 0 1 .5-.5 3 3 0 1 1 0 6 .5.5 0 0 1 0-1 2 2 0 0 0 0-4 .5.5 0 0 1-.5-.5M12.5 8a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5m-1.172 2.828a.5.5 0 0 1 .708 0l.707.708a.5.5 0 0 1-.707.707l-.708-.707a.5.5 0 0 1 0-.708M8.5 12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5" />
              </svg>
              <h3 className='Service-Heading'>Weather Forecasting</h3>
            </div>
            </Link>
          </div>
          <div className='service service2'>

          <Link className='service-Link' to= "./Currency">
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#1D3D6E" class="bi bi-currency-exchange" viewBox="0 0 16 16">
                <path d="M0 5a5 5 0 0 0 4.027 4.905 6.5 6.5 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05q-.001-.07.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.5 3.5 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98q-.004.07-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5m16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674z" />
              </svg>
              <h3 className='Service-Heading'>Currency Converter</h3>
            </div>
            </Link>

          </div>
          <div className='service service3'>
          <Link className='service-Link' to= "./LanguageTranslation">
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#1D3D6E" class="bi bi-translate" viewBox="0 0 16 16">
                <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z" />
                <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31" />
              </svg>
              <h3 className='Service-Heading'>Translator</h3>
            </div>
            </Link>
          </div>
          <div className='service service4'>
            <Link className='service-Link' to= "./ChatBot">
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#1D3D6E" class="bi bi-gear" viewBox="0 0 16 16">
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
              </svg>
              <h3 className='Service-Heading'>ChatBot</h3>
            </div>
            </Link>
          </div>
        </div>
      </div>

      <div className='destinationContainer'>
        <div className="destinationHeader">
          <h2>Popular Destinations</h2>
        </div>
        <div className="destinationList">
          {/* Large container */}
          <div className='destination destinationLarge'>
            <div className='destinationbg'>
              <img src={largeDestinations[largeDestinationIndex].image} alt={`Destination ${largeDestinationIndex + 1}`} />
            </div>
            <div className="destinationContent">
              <h3>{largeDestinations[largeDestinationIndex].heading}</h3>
              <p>{largeDestinations[largeDestinationIndex].description}</p>
            </div>
          </div>
          {/* Small containers */}
          <div className='destination destinationSmall'>
            <div className='destinationbg'>
              <img src={smallDestinations[smallDestinationIndex].image} alt={`Destination 2`} />
            </div>
            <div className="destinationContent">
              <h3>{smallDestinations[smallDestinationIndex].heading}</h3>
              <p>{smallDestinations[smallDestinationIndex].description}</p>
            </div>
          </div>
          <div className='destination destinationSmall'>
            <div className='destinationbg'>
              <img src={smallDestinations[(smallDestinationIndex + 1) % smallDestinations.length].image} alt={`Destination 3`} />
            </div>
            <div className="destinationContent">
              <h3>{smallDestinations[(smallDestinationIndex + 1) % smallDestinations.length].heading}</h3>
              <p>{smallDestinations[(smallDestinationIndex + 1) % smallDestinations.length].description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Container */}
      <div className="blogContainer">
        <div className="blogHeader">
          <h2>Explore More Travel Blogs</h2>
        </div>
        <div className="blogList">
          {/* Individual Blog Posts */}
          <div className="blogPost">
            <img src={blog1} alt="Blog Post 1" />
            <div className="blogContent">
              <h3>Nomadic Matt</h3>
              <p>The website that has been featured in major media time and time again because it’s got the best budget advice out there.</p>
              <a href="https://www.nomadicmatt.com/" target='_blank' rel="noreferrer">Read More</a>
            </div>
          </div>
          <div className="blogPost">
            <img src={blog2} alt="Blog Post 2" />
            <div className="blogContent">
              <h3>Travel Floss</h3>
              <p>Explore hidden gems, local cultures and enjoy your life to the fullest. </p>
              <a href="https://www.travelfoss.com/" target='_blank' rel="noreferrer">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default Home;
