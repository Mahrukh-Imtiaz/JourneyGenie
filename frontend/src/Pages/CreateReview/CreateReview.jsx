import React, { useContext, useState } from 'react'
import axios from "axios"
import { AuthContext } from '../../authContext'; 
import { useNavigate } from 'react-router-dom';  
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import './CreateReview.css'

const CreateReview = () => {

    const navigate = useNavigate(); 
    const { user } = useContext(AuthContext); 
    const [files, setFiles] = useState(""); 
    const [info, setInfo] = useState({}); 
  
    // set the usestate to the data user passed  
    const handleChange = (e) => { 
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value })); 
    } 
  
    // post the usestate to database 
    const handleClick = async (e) => { 
        e.preventDefault(); 
  
        var newEntry 
  
        // if (files.length > 0) {
        //     // Store image data URLs in local storage
        //     const imageUrls = Array.from(files).map((file) => URL.createObjectURL(file)); 
        //     localStorage.setItem('imageUrls', JSON.stringify(imageUrls));
    
        //     // Prepare newEntry with image URLs
        //     newEntry = {
        //         ...info,
        //         author: user._id,
        //         photos: imageUrls, // Use the stored image URLs
        //     };
        // } else {
        //     // If no files selected, create newEntry without photos
        //     newEntry = {
        //         ...info,
        //         author: user._id,
        //     };
        // }

        let fileNames = [];

        if (files.length > 0) {
            const formData = new FormData();
            Array.from(files).forEach((file) => {
            formData.append('photos', file);
            });

            try {
            const uploadResponse = await axios.post('http://localhost:8080/api/UploadPic/upload', formData, {
                headers: {
                'Content-Type': 'multipart/form-data',
                },
            });
            fileNames = uploadResponse.data.filenames;
            } catch (err) {
            console.error('Error uploading images', err);
            }
        }

        newEntry = {
            ...info,
            author: user._id,
            photos: fileNames,
        };
  
        try { 
            const response = await axios.post('http://localhost:8080/api/entries/', 
                newEntry, { 
                withCredentials: false
            }) 
  
            // navigate(`/view/${response?.data?._id}`); 
            navigate('/PromptReview')
        } 
        catch (err) { 
            console.log(err) 
        } 
    } 
  return (
    <div className='create'>  
        <div className="createContainer"> 

            <h1 className='CreateReviewHeading'>Create Review</h1>
  
                <div className="picsContainer"> 
  
                    <div className="formInput"> 
                        <h2 className='Review-Create-Heading'>Upload Images (Max 3)</h2> 
                        <label htmlFor="file"> 
                            <FontAwesomeIcon 
                                className="icon" icon={faPlusCircle} /> 
                        </label> 
                        <input 
                            type="file"
                            id="file"
                            multiple 
                            onChange={(e) => setFiles(e.target.files)} 
                            style={{ display: "none" }} 
                        /> 
                    </div> 
                    <div className="uploadedPictures"> 
                        <div className="upload_pic"> 
                            <img 
                                src={ 
                                    files[0] 
                                        ? URL.createObjectURL(files[0]) 
                                        : ""
                                } 
                                alt=""
                                height="80px"
                            /> 
                        </div> 
                        <div className="upload_pic"> 
                            <img 
                                src={ 
                                    files[1] 
                                        ? URL.createObjectURL(files[1]) 
                                        : ""
                                } 
                                alt=""
                                height="80px"
                            /> 
                        </div> 
                        <div className="upload_pic"> 
                            <img 
                                src={ 
                                    files[2] 
                                        ? URL.createObjectURL(files[2]) 
                                        : ""
                                } 
                                alt=""
                                height="80px"
                            /> 
                        </div> 
                    </div> 
  
                </div> 
  
                <div className="Entryinput"> 
                    <label htmlFor="title">Title</label> 
                    <input 
                        onChange={handleChange} 
                        type="text"
                        id="title"
                        placeholder="Enter Title"
                    /> 
                </div> 
                <div className="Entryinput"> 
                    <label htmlFor="location"> 
                        Location 
                    </label> 
                    <input 
                        onChange={handleChange} 
                        type="text"
                        id="location"
                        placeholder="Enter Location"
                    /> 
                </div> 
  
                <div className="Entryinput"> 
                    <label htmlFor="date"> 
                        What is the Date 
                    </label> 
                    <input 
                        onChange={handleChange} 
                        type="date"
                        id="date"
                        placeholder="Choose Date"
                    /> 
                </div> 
  
                <div className="Entryinput"> 
                    <label htmlFor="entry"> 
                        Write your thoughts.. 
                    </label> 
                    <textarea 
                        name='entry'
                        id='text'
                        cols="100"
                        rows='12'
                        onChange={handleChange} 
                        autoFocus 
                    ></textarea> 
                </div> 
  
                <button className='createBtn'
                    onClick={handleClick}> 
                    Create Entry 
                </button> 
            </div> 
        </div> 
  )
}

export default CreateReview;
