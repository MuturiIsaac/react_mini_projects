// Newsletter.js
import React from 'react';

const Newsletter = () => {
  return (
    <div className="container">
      <h1>Newsletter</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <button type="submit" className="btn btn-primary">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;