import React from 'react';
import '../css/Review.css';
import customer1 from '../images/customer1.jpg'; // Importing customer image
import customer2 from '../images/customer2.jpg';
import customer3 from '../images/customer3.jpg';
import customer4 from '../images/customer4.jpg'; // Corrected the import path

function Review() {
  return (
    <div className="review-container">
      <div className="review-card">
        <img src={customer1} alt="Customer" className="customer-img" />
        <h3 className="customer-name">John Doe</h3>
        <p className="review-message">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
        <div className="rating">
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
        </div>
      </div>
      <div className="review-card">
        <img src={customer2} alt="Customer" className="customer-img" />
        <h3 className="customer-name">Jane Smith</h3>
        <p className="review-message">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
        <div className="rating">
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
        </div>
      </div>
      <div className="review-card">
        <img src={customer3} alt="Customer" className="customer-img" />
        <h3 className="customer-name">Alice Johnson</h3>
        <p className="review-message">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
        <div className="rating">
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
        </div>
      </div>
      <div className="review-card">
        <img src={customer4} alt="Customer" className="customer-img" />
        <h3 className="customer-name">Michael Brown</h3>
        <p className="review-message">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
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
