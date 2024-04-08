import React from 'react';
import '../css/Review.css'; // Make sure to adjust this import if necessary

const Review = () => {
  return (
    <div className="review-container">
      <div className="review-card">
        <img src="https://images.pexels.com/photos/614484/pexels-photo-614484.jpeg?auto=compress&cs=tinysrgb&w=600" alt="nature-pic-CSSsnippets" className="customer-img" />
        <h3 className="customer-name">Title</h3>
        <p className="review-message">Hover over the card to see the effect.</p>
        <div className="rating">
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
        </div>
      </div>
    </div>
  );
}

export default Review;
