import React,  { useEffect, useRef } from 'react';
import axios from 'axios';
import './AboutUs.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import wania from '../../Assets/about-wania.png';
import shahmir from '../../Assets/about-shahmir.png';
import mahrukh from '../../Assets/about-mahrukh.png';
import Chart from 'chart.js/auto';
import Navbar from '../../Components/Navbar/Navbar';


const AboutUs = () => {
	const chartRef = useRef(null);
	useEffect(() => {
		const fetchUserStats = async () => {
		  try {
			const response = await axios.get('http://localhost:8080/api/stats/userStats');
			
			// Destroy existing Chart instance if it exists
			if (chartRef.current) {
			  chartRef.current.destroy();
			}
	
			const ctx = document.getElementById('myPieChart').getContext('2d');
			chartRef.current = new Chart(ctx, {
			  type: 'pie',
			  data: {
				labels: ['Male', 'Female'],
				datasets: [{
				  label: 'Gender Distribution',
				  data: [response.data.maleCount, response.data.femaleCount],
				  backgroundColor: ['#1D3D6E', '#FEBA3F'],
				  hoverBackgroundColor: ['#294878', '#fcc35b'],
				}]
			  },
			  options: {
				// Add options here if needed
			  }
			});
		  } catch (error) {
			console.error('Error fetching user statistics:', error);
		  }
		};
	
		fetchUserStats();
	
		// Cleanup function to destroy the Chart instance on component unmount
		return () => {
		  if (chartRef.current) {
			chartRef.current.destroy();
		  }
		};
	  }, []);

  return (
	<div className='Main-About-Container'>
		<Navbar/>
	<div className="container" style={{ marginTop: '130px' }}>
	  <div className="d-md-flex">
		<div className="col my-auto">
		  <h1 className="text-dark" style={{ fontWeight: 600, fontSize: '600%', textAlign: 'center'}}>About.</h1>
		  <h5 className="text-dark">Learn more about the project and its contributors.</h5>
		</div>
		<svg width="512" height="512" viewBox="0 0 512 512" fill="none" overflow="hidden" xmlns="http://www.w3.org/2000/svg">
<use href="#cube" x="128" y="320" strokeWidth="2"  opacity="0.3">
	<animate attributeName="stroke" dur="6s" repeatCount="indefinite"
			 values="#1D3D6E;#305E9B;#4387C1;#64A7D6;#9FCBF1;#FFFFFF;#1D3D6E"/>
</use>

<rect width="512" height="512" y="384" fill="url(#fade)"/>
<use href="#cube" x="128" y="128" strokeWidth="2">
	<animate attributeName="stroke" dur="6s" repeatCount="indefinite"
			 values="#1D3D6E;#305E9B;#4387C1;#64A7D6;#9FCBF1;#FFFFFF;#1D3D6E"/>
</use>

<defs>
	
 	<g id="cube">
		<use href="#cube_outline" strokeLinejoin="round" strokeWidth="16" fill="url(#stars)"/>
		<use href="#cube_base" strokeWidth=".5"/>
		<use href="#cube_outline" strokeLinejoin="round" strokeWidth="6" stroke="#141417"/>
	</g>	

	<g id="cube_outline">
		<path>
			<animate attributeName="d" dur="1.5s" repeatCount="indefinite" calcMode="spline"
			keyTimes="0;0.5;0.5;1"
			keySplines="0.8 0.2 0.6 0.9; 
						0.8 0.2 0.6 0.9; 
						0.8 0.2 0.6 0.9"
			values="M10 64 L128 0 L246 64 L246 192 L128 256 L10 192Z;
					M40 20 L216 20 L216 108 L216 236 L40 236 L40 172Z;
					M216 20 L40 20 L40 108 L40 236 L216 236 L216 172Z;
					M246 64 L128 0 L10 64 L10 192 L128 256 L246 192Z"/>
		</path>
	</g>

	<g id="cube_base">
		<path fill="#fff1"> 
		<animate attributeName="d" dur="1.5s" repeatCount="indefinite" calcMode="spline"
			keyTimes="0;0.5;1"
			keySplines="0.8 0.2 0.6 0.9; 
						0.8 0.2 0.6 0.9"
			values="M10 64 L128 0 L246 64 L128 128Z;
					M40 20 L216 20 L216 108 L40 108Z;
					M128 0 L246 64 L128 128 L10 64Z"/>
		</path>
		<path> 
		<animate attributeName="d" dur="1.5s" repeatCount="indefinite" calcMode="spline"
			keyTimes="0;0.5;0.5;1"
			keySplines="0.8 0.2 0.6 0.9; 
						0.8 0.2 0.6 0.9; 
						0.8 0.2 0.6 0.9"
			values="M10 64 L128 128 L128 256 L10 192Z;
					M40 20 L40 108 L40 236 L40 172Z;
					M216 20 L216 108 L216 236 L216 172Z;
					M246 64 L128 128 L128 256 L246 192Z"/>
		<animate attributeName="fill" dur="1.5s" repeatCount="indefinite" keyTimes="0;0.5;0.5;1"
			values="#fff0;#fff0;#fff2;#fff2"/>
		</path>
		<path fill="#407080"> 
		<animate attributeName="d" dur="1.5s" repeatCount="indefinite" calcMode="spline"
			keyTimes="0;0.5;1"
			keySplines="0.8 0.2 0.6 0.9; 
						0.8 0.2 0.6 0.9"
			values="M246 64 L128 128 L128 256 L246 192Z;
					M216 108 L40 108 L40 236 L216 236Z;
					M128 128 L10 64 L10 192 L128 256Z"/>
			<animate attributeName="fill" dur="1.5s" repeatCount="indefinite" keyTimes="0;0.5;1"
				values="#fff2;#fff1;#fff0"/>
		</path>
	</g>
	<linearGradient id="fade" gradientTransform="rotate(90)">
    	<stop offset="0" stopColor="#14141700"/>
    	<stop offset="0.25" stopColor="#141417ff"/>
    </linearGradient>
	<linearGradient id="sky" gradientTransform="rotate(90)">
    	<stop offset="0.5" stopColor="#141417"/>
    	<stop offset="1" stopColor="#40354a"/>
    </linearGradient>
  
	
	<pattern id="stars" x="0" y="0" width="50%" height="50%" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
		<rect width="256" height="256" fill="url(#sky)"/>
		<use href="#star01" x="24" y="32"  fill="white"/>
		<use href="#star01" x="64" y="96"  fill="#ad9dcb" transform="rotate(90 80 112)"/>
		<use href="#star01" x="224" y="102"  fill="#ad9dcb"/>
		<use href="#star01" x="192" y="112"  fill="#E0E8EA" transform="rotate(90 80 112)"/>
		<use href="#star02" x="16" y="64"  fill="#ad9dcb"/>
		<use href="#star03" x="96" y="16"  fill="#E0E8EA"/>
		<use href="#star04" x="64" y="64"  fill="white"/>
		<use href="#star04" x="8" y="16"  fill="#ad9dcb"/>
		<use href="#star04" x="110" y="96"  fill="#E0E8EA"/>
		<use href="#star02" x="160" y="24"  fill="#ad9dcb"/>
		<use href="#star03" x="196" y="60"  fill="#E0E8EA"/>
		<use href="#star04" x="64" y="212"  fill="white"/>
		<use href="#star04" x="218" y="216"  fill="#ad9dcb"/>
		<use href="#star03" x="228" y="220"  fill="#E0E8EA"/>
		<use href="#star02" x="140" y="128"  fill="#ad9dcb"/>
		<use href="#star03" x="24" y="140"  fill="#E0E8EA"/>
		<use href="#star04" x="95" y="160"  fill="white"/>
		<use href="#star04" x="180" y="128"  fill="#ad9dcb"/>
		<use href="#star03" x="200" y="136"  fill="#E0E8EA"/>
		<use href="#star10" x="120" y="120"  stroke="#E0E8EA"/>
		<use href="#star11" x="48" y="64"  stroke="#ad9dcb"/>
	</pattern>
	<path id="star01" transform="scale(0.5)">
		<animate attributeName="d" dur="3s" repeatCount="indefinite" calcMode="spline"
			keyTimes="0;0.5;1" keySplines="0.8 0.2 0.6 0.9; 0.8 0.2 0.6 0.9"
			values="M16 0 Q16 16 24 16 Q16 16 16 32 Q16 16 8 16 Q16 16 16 0Z;
					M16 8 Q16 16 32 16 Q16 16 16 24 Q16 16 0 16 Q16 16 16 8Z;
					M16 0 Q16 16 24 16 Q16 16 16 32 Q16 16 8 16 Q16 16 16 0Z"/>
	</path>
	<circle id="star02">
		<animate attributeName="r" dur="3s" repeatCount="indefinite" calcMode="spline"
			keyTimes="0;0.5;1" keySplines="0.8 0.2 0.6 0.9; 0.8 0.2 0.6 0.9"
			values="0;2;0"/>
	</circle>
	<circle id="star03">
		<animate attributeName="r" dur="6s" repeatCount="indefinite" calcMode="spline"
			keyTimes="0;0.5;1" keySplines="0.8 0.2 0.6 0.9; 0.8 0.2 0.6 0.9"
			values="3;1;3"/>
	</circle>
	<circle id="star04" r="1"/>

	<path id="star10" strokeWidth="2">
		<animate attributeName="d" dur="5s" repeatCount="indefinite" 
			keyTimes="0;0.90;0.97;1"
			keySplines="0 0.4 1 0.2; 0 0.4 1 0.2; 0 0.4 1 0.2"
			values="M64 0 L64 0Z; M64 0 L64 0Z; M48 12 L0 48Z; M0 48 L0 48Z"/>
		<animate attributeName="opacity" dur="5s" repeatCount="indefinite"
			keyTimes="0;0.90;0.97;1"
			values="1; 1; 0.6; 0"/>
	</path>
	<path id="star11" strokeWidth="3">
		<animate attributeName="d" dur="6s" repeatCount="indefinite" delay="3s"
			keyTimes="0;0.90;0.95;1"
			keySplines="0 0.4 1 0.2; 0 0.4 1 0.2; 0 0.4 1 0.2"
			values="M64 0 L64 0Z; M64 0 L64 0Z; M48 12 L0 48Z; M0 48 L0 48Z"/>
		<animate attributeName="opacity" dur="6s" repeatCount="indefinite" delay="3s"
			keyTimes="0;0.90;0.95;1"
			values="1; 1; 0.6; 0"/>
	</path>
</defs>
</svg>
	  </div>
	</div>

	<div className="container">
	  <hr className="hr-dark" style={{ marginTop: '70px', marginBottom: '70px' }} />
	</div>

	<div className="container">
	  <div className="d-md-flex">
		<div className="col" align="center" style={{ marginBottom: '30px' }}>
			<div class="custom-loader"></div>
		</div>
		<div className="col my-auto" align="center">
		  <h1 className="text-dark">Meet the team:</h1>
		  <p className="team-list-item" style={{ marginTop: '20px' }}>Shahmir Yousaf</p>
		  <p className="team-list-item">Wania Tariq</p>
		  <p className="team-list-item">Mahrukh Imtiaz</p>
		</div>
	  </div>
	</div>

	<div className="container">
	  <hr className="hr-dark" style={{ marginTop: '70px', marginBottom: '70px' }} />
	</div>


	<TeamMember
	  name="Shahmir Yousaf"
	  imgSrc= {shahmir}
	  bgColor="#4c78ba"
	  description="I am driven by a relentless passion for innovation and a thirst for knowledge. Even amidst life's chaos, I find solace in diving into new projects and exploring diverse realms. Just as my journey with the JournieGenie Travel app unfolds, I am continuously inspired to push my boundaries, honing new skills, and delving into uncharted territories. This project serves as a testament to my resilience and adaptability, allowing me to make the most out of every opportunity and emerge stronger with each endeavor."
	/>

	<div className="container">
	  <hr className="hr-dark" style={{ marginTop: '70px', marginBottom: '70px' }} />
	</div>
	

	<TeamMember
	  name="Wania Tariq"
	  imgSrc={wania}
	  bgColor="rgba(37, 36, 34, 0.1)"
	  description="Nothing ignites my drive quite like transforming a chaotic code into something elegant and functional. Despite the demanding and often stressful nature of programming, I thrive on the challenge it presents. Pulling all-nighters may be a necessity at times, but finding the fun in the process is what truly fuels my passion. My relationship with programming is one of ambivalence; it pushes me to my limits while simultaneously inspiring me to explore new horizons and maximize my skills to their fullest potential."
	/>

	<div className="container">
	  <hr className="hr-dark" style={{ marginTop: '70px', marginBottom: '70px' }} />
	</div>

	<TeamMember
	  name="Mahrukh Imtiaz"
	  imgSrc={mahrukh}
	  bgColor="#fabc4b"
	  description="Finding solace in the art of code refinement, there's an inherent allure in transforming chaos into elegance. Amidst the demanding and sometimes taxing nature of programming, each line of code serves as both a puzzle and a canvas for creative expression. The journey of programming is imbued with moments of joy and discovery, turning challenges into thrilling adventures."
	/>

<div className="container">
	  <hr className="hr-dark" style={{ marginTop: '70px', marginBottom: '70px' }} />
	</div>

		<div className="container">
		<h1 className="text-dark" style={{ fontWeight: 600, fontSize: '32px', textAlign: 'center' }}>User Statistics</h1>
		<div style={{ maxWidth: '400px', margin: 'auto' }}>
			<canvas id="myPieChart" width="400" height="400"></canvas>
		</div>
		</div>

  </div>
    
  );
};

function TeamMember({ name, imgSrc, bgColor, description }) {
	return (
	  <div className="container" style={{ backgroundColor: bgColor, borderRadius: '14px' }}>
		<div className="d-lg-flex">
		  <div className="col my-auto">
			<h1 className="text-dark" style={{ padding: '50px', fontWeight: 600 }}>{name}.</h1>
			<p className="text-dark" style={{ padding: '20px 50px', textAlign: 'justify' }}>{description}</p>
		  </div>
		  <div className="col my-auto" align="center">
			<img className='About-Image' style={{ marginTop: '50px', marginBottom: '50px' }} src={imgSrc} alt={name} />
		  </div>
		</div>
	  </div>
	);
  }

export default AboutUs;
