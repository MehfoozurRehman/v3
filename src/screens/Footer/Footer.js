import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top-row">
        <a href="index.html" className="brand-name">
          Port <span>folio</span>
        </a>
        <a href="#top" className="back-to-top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22.294 13.747"
            fill="currentColor"
          >
            <g id="arrow-2" transform="translate(0 72.397) rotate(-90)">
              <g id="chevron-right" transform="translate(58.65)">
                <path
                  id="Path_68"
                  data-name="Path 68"
                  d="M61.251,0l-2.6,2.6L67.2,11.147,58.65,19.693l2.6,2.6L72.4,11.147Z"
                  transform="translate(-58.65)"
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
      <div className="footer-row">
        <div className="footer-left">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsam
            odio accusantium error at{" "}
            <a href="https://www.sigmatraffic.com?ref=104502">
              Buy traffic for your website
            </a>{" "}
            commodi, expedita obcaecati dolor amet debitis?
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-right-col">
            <div className="footer-heading">Send Mail</div>
            <div className="footer-content">mehfoozijaz786@gmail.com</div>
            <div className="footer-content">mehfooz_ur_rehman@outlook.com</div>
          </div>
          <div className="footer-right-col">
            <div className="footer-heading">Make Call</div>
            <div className="footer-content">+92 335 7291419</div>
            <div className="footer-content">+92 313 7178074</div>
          </div>
          <div className="footer-right-col">
            <div className="footer-heading">Get In Touch</div>
            <div className="footer-content">123/A,Hamburger City</div>
            <div className="footer-content">Punjab, Pakistan</div>
          </div>
        </div>
      </div>
    </div>
  );
}
