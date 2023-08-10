import React from "react";

export default function Info() {
  return (
    <div className="info-container">
      <img src="./public/main.png" alt="" />
      <h2>Laura Smith</h2>
      <h6>Frontend Developer</h6>
      <p>laurasmith.website</p>
      <div className="btns">
        <button className="left">
          <img src="./public/mail.png" />
          Email
        </button>
        <button className="right">
          <img src="./public/linkedin.png" />
          Linkedin
        </button>
      </div>
    </div>
  );
}
