import React from "react"; 
import './AllEntryCard.css'

function AllEntryCard(props) {
    return(
    <div className="Entry-card"> 
    <div class="Card-content"> 
        
            <img id="post-image" src={`http://localhost:8080/uploads/${props.photos[0]}`} 
            alt="no content" /> 
        <h4>{props.title}</h4> 
        <h6> 
            <span>Date : </span> {props.date} 
        </h6> 
        <h6> 
            <span>Location : </span> {props.location} 
        </h6> 
        <p>{props.text.slice(0, 90)}...</p> 
        
    </div> 
</div> 
    )
}

export default AllEntryCard;