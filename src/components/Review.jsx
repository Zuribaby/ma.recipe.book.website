import React from "react";
import "../css/Review.css"; // Make sure to adjust this import if necessary

const Review = () => {
  return (
    <div className="review-container">
      <div className="review-card">
        <img
          src="https://images.pexels.com/photos/614484/pexels-photo-614484.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="nature-pic-CSSsnippets"
          className="customer-img"
        />
        <h3 className="customer-name">⭐⭐⭐⭐⭐</h3>
        <p className="review-message">This be the best website oyah i beg </p>
      </div>
    </div>
  );
};

export default Review;
