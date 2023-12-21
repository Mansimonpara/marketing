import "./FormStyles.css";
import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <h1>Let's discuss your project</h1>
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="text"></input>
            <label>Phone Number</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="5" placeholder="Types your Message Here" />
            <button className="btn">Submit</button>
        </form>
    </div>
  );
};

export default Form;