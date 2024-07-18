import React, { useContext, useState, useEffect } from 'react';
import { faCalendar, faMapLocationDot, faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './View.css';
import axios from "axios";
import Swal from "sweetalert2";

const View = () => {
    const location = useLocation();
    
    const id = location.pathname.split("/")[3]; 

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [slideNumber, setSlideNumber] = useState(0);

    console.log(id)

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/entries/${id}`);
                console.log('Fetched data:', response.data);
                setData(response.data);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const handleDelete = async (entryId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this action!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#1D3D6E',
            cancelButtonColor: '#FEBA3F',
            confirmButtonText: 'Yes, Delete it!'
          }).then(async (result) => {
            if (result.isConfirmed) {
              try {
                await axios.delete(`http://localhost:8080/api/entries/${entryId}`);
        
                Swal.fire(
                  'Review Deleted!',
                  'success'
                ).then(() => {
                  navigate('/Reviews');
                });
              } catch (err) {
                console.log(err);
                Swal.fire(
                  'Error!',
                  'An error occurred while Deleting.',
                  'error'
                );
              }
            }
          });
    };

    const handleMove = (direction, size) => {
        let newSlideNumber;
        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? size - 1 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === size - 1 ? 0 : slideNumber + 1;
        }
        setSlideNumber(newSlideNumber);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;
    if (!data) return <div>No data available</div>;

    return (
        <div className='view'>
        <div key={data._id} className="postContainer">
            <div className="postPageBG">
                <div className="upperContent">
                    <h1>{data.title}</h1>
                    <p>
                        <FontAwesomeIcon className="icon" icon={faCalendar} /> 
                        {data.date}
                    </p>
                    <p>
                        <FontAwesomeIcon className="icon" icon={faMapLocationDot} /> 
                        {data.location}
                    </p>
                </div>
            </div>

            <div className="leftContainer">
                {data.photos && data.photos.length > 0 ? (
                    <div className="images">
                        <img 
                            src={`http://localhost:8080/uploads/${data.photos[slideNumber]}`} 
                            height="300px" 
                            alt="Error" 
                        />
                        {data.photos.length > 1 && (
                            <div className="arrows">
                                <FontAwesomeIcon 
                                    icon={faCircleArrowLeft} 
                                    className="arrow"
                                    onClick={() => handleMove("l", data.photos.length)} 
                                />
                                <FontAwesomeIcon 
                                    icon={faCircleArrowRight} 
                                    className="arrow"
                                    onClick={() => handleMove("r", data.photos.length)} 
                                />
                            </div>
                        )}
                    </div>
                ) : (
                    "No Images"
                )}
            </div>

            <div className="rightContainer">
                <p>" {data.text} "</p>
                <button className="del_button" style={{ marginRight: "5px" }} onClick={() => handleDelete(data._id)}>
                    Delete
                </button>
            </div>
        </div>
    </div>
    );
}

export default View;
