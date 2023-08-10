import React from "react";

export default function Info() {
  return (
    <div className="info-container">
      <img src="/main.png" alt="" />
      <h2>Laura Smith</h2>
      <h6>Frontend Developer</h6>
      <p>laurasmith.website</p>
      <div className="btns">
        <button className="left">
          <img src="/mail.png" />
          Email
        </button>
        <button className="right">
          <img src="/linkedin.png" />
          Linkedin
        </button>
      </div>
    </div>
  );
}
