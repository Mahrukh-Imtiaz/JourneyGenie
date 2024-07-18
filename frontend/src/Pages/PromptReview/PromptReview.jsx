import React from 'react'
import { Link } from 'react-router-dom';
import './PromptReview.css';
import Navbar from '../../Components/Navbar/Navbar';

const PromptReview = () => {
  return (
    <div className="prompt-review-container">
    <Navbar />
    <div className="content-container">
      <div className="prompt-button-container">
        <Link to="/create" className="prompt-review-button">Create Review</Link>
        <Link to="/Reviews" className="prompt-review-button">View Own Reviews</Link>
        <Link to="/AllReviews" className="prompt-review-button">View All Reviews</Link>
      </div>
    </div>
  </div>
  )
}

export default PromptReview
