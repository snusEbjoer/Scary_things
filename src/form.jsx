import React, { useState, useEffect } from "react";
import "./Form.css";

const Form = ({handleSubmit}) => {
  const [order, setOrder] = useState({});



  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="shipping">Shipping Index:</label>
          <input
            type="number"
            id="shipping"
            name="shipping"
            className="form-input"
          />
        </div>
        <div>
          <p>Order Data:</p>
          <pre>{JSON.stringify(order, null, 2)}</pre>
        </div>
        <button type="submit" className="form-submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;