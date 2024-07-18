import React, {useState, useContext} from 'react'
import './navbar.css'
import logo from '../../Assets/logo.png'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import { Link, useNavigate  } from 'react-router-dom';
import { AuthContext } from '../../authContext'
import Swal from 'sweetalert2';

const Navbar = () => {

    const navigate = useNavigate()

    const { user, dispatch } = useContext(AuthContext) 

    const [active, setActive] = useState('navBar')
    // Function for toggling navBar
    const showNavBar = ()=>{
        setActive('navBar activeNavbar')
    }
     // Function for closing navBar
     const removeNavBar = ()=>{
        setActive('navBar')
    }

    const handleClick = async (e) => { 
        e.preventDefault(); 
        // localStorage.removeItem("token");
        // localStorage.removeItem("sessionId");
        // localStorage.removeItem("LoggedInUser");
        // dispatch({ type: "LOGOUT" }); 
        // navigate("/Login") 

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this action!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#1D3D6E',
            cancelButtonColor: '#FEBA3F',
            confirmButtonText: 'Yes, log out!'
          }).then((result) => {
            if (result.isConfirmed) {
              // Clear local storage
              localStorage.removeItem("token");
              localStorage.removeItem("sessionId");
              localStorage.removeItem("LoggedInUser");
              
              // Dispatch logout action
              dispatch({ type: "LOGOUT" });
        
              // Navigate to login page
              navigate("/Login");
        
              Swal.fire(
                'Logged Out!',
                'You have been logged out.',
                'success'
              );
            }
          });
    } 

  return (
    <section className='navBarSection'>
        <header className='headerNavbar flex'>
            <div className='logoDiv'>
                <Link className="logo flex" to="/">
                
                    <img src={logo} alt="Error" className="icon" ></img>
                
                </Link>
            </div>

            <div className={active}>
                <ul className="navLists-JG flex">

                    <Link className='link-underline-issue'  to="/">
                    <li className="navItem-JG">
                        <p className="NavBarLinks-JG">Home</p>
                    </li>
                    </Link>

                    <Link className='link-underline-issue' to="/Recommendation">
                    <li className="navItem-JG">
                        <p className="NavBarLinks-JG">Recommendations</p>
                    </li>
                    </Link>

                    <Link className='link-underline-issue' to="/Booking">
                    <li className="navItem-JG">
                        <p className="NavBarLinks-JG">Booking</p>
                    </li>
                    </Link>

                    <Link className='link-underline-issue' to="/PromptReview">
                    <li className="navItem-JG">
                        <p className="NavBarLinks-JG">Review</p>
                    </li>
                    </Link>

                    <Link className='link-underline-issue' to="/Profile">
                    <li className="navItem-JG">
                        <p className="NavBarLinks-JG">Profile</p>
                    </li>
                    </Link>

                    <Link className='link-underline-issue' to="/AboutUs">
                    <li className="navItem-JG">
                        <p className="NavBarLinks-JG">AboutUs</p>
                    </li>
                    </Link>

                    <button onClick={handleClick} className="btn-navBar-JG">
                        <a href="#" > Logout </a>
                    </button>
                </ul>
                <div onClick={removeNavBar} className="closeNavBar">
                    <AiFillCloseCircle className="icon"/>
                </div>
            </div>

            <div onClick={showNavBar} className="toggleNavBar">
                <TbGridDots className="icon"/>
            </div>

        </header>
    </section>
  )
}

export default Navbar
