import React from "react"; 
import { Link } from "react-router-dom"; 
import "./Card.css"; 
  
function Card(props) { 
  
  
    return ( 
        <div className="Entry-card"> 
            <div class="Card-content"> 
                {/* <img id="post-image" src={props.photos[0]} 
                    alt="no content" />  */}
                    <img id="post-image" src={`http://localhost:8080/uploads/${props.photos[0]}`} 
                    alt="no content" /> 
                <h4>{props.title}</h4> 
                <h6> 
                    <span>Date : </span> {props.date} 
                </h6> 
                <h6> 
                    <span>Location : </span> {props.location} 
                </h6> 
                <p>{props.text.slice(0, 60)}...</p> 
                <Link to={`view/${props._id}`}> 
                    <button className="read-more-Button">Read More</button> 
                </Link> 
            </div> 
        </div> 
    ); 
} 
  
export default Card;