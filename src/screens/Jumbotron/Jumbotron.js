import React from "react";
import "./Jumbotron.css";
import jumbotronPic from "../../Assets/about/aboutPic.jpg";
export default function Jumbotron() {
  return (
    <section className="section" id="jumbotron">
      <div className="social-section">
        <a href="https://github.com/MehfoozurRehman" className="social-link">
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 34.875 34.004"
          >
            <path
              id="Icon_awesome-github"
              data-name="Icon awesome-github"
              d="M11.665,27.942c0,.141-.162.253-.366.253-.232.021-.394-.091-.394-.253,0-.141.162-.253.366-.253C11.482,27.668,11.665,27.78,11.665,27.942Zm-2.187-.316c-.049.141.091.3.3.345a.33.33,0,0,0,.436-.141c.042-.141-.091-.3-.3-.366A.361.361,0,0,0,9.478,27.626Zm3.108-.12c-.2.049-.345.183-.323.345.021.141.2.232.415.183s.345-.183.323-.323S12.79,27.485,12.586,27.506ZM17.212.563A16.86,16.86,0,0,0,0,17.719,17.628,17.628,0,0,0,11.918,34.537c.9.162,1.216-.394,1.216-.851,0-.436-.021-2.841-.021-4.317,0,0-4.922,1.055-5.955-2.1,0,0-.8-2.046-1.955-2.573,0,0-1.61-1.1.113-1.083A3.711,3.711,0,0,1,8.03,25.432a3.717,3.717,0,0,0,5.126,1.47,3.908,3.908,0,0,1,1.125-2.37c-3.93-.436-7.9-1.005-7.9-7.77a5.329,5.329,0,0,1,1.659-4.141,6.643,6.643,0,0,1,.183-4.774c1.47-.457,4.852,1.9,4.852,1.9a16.611,16.611,0,0,1,8.831,0s3.382-2.363,4.852-1.9a6.64,6.64,0,0,1,.183,4.774,5.466,5.466,0,0,1,1.814,4.141c0,6.785-4.141,7.327-8.072,7.77a4.158,4.158,0,0,1,1.2,3.263c0,2.37-.021,5.3-.021,5.878,0,.457.323,1.013,1.216.851a17.466,17.466,0,0,0,11.8-16.8C34.875,7.966,26.965.563,17.212.563ZM6.834,24.813c-.091.07-.07.232.049.366.113.112.274.162.366.07.091-.07.07-.232-.049-.366C7.087,24.771,6.926,24.722,6.834,24.813Zm-.759-.57c-.049.091.021.2.162.274a.209.209,0,0,0,.3-.049c.049-.091-.021-.2-.162-.274C6.237,24.152,6.124,24.173,6.075,24.244Zm2.278,2.5c-.113.091-.07.3.091.436.162.162.366.183.457.07.091-.091.049-.3-.091-.436C8.655,26.655,8.445,26.634,8.353,26.747Zm-.8-1.034c-.113.07-.113.253,0,.415s.3.232.394.162a.321.321,0,0,0,0-.436C7.847,25.692,7.664,25.622,7.552,25.713Z"
              transform="translate(0 -0.563)"
            />
          </svg>
        </a>
        <a href="https://twitter.com/Mehfooz47928803" className="social-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25.725 26"
            fill="currentColor"
          >
            <g id="linkedin" transform="translate(-0.248 0.027)">
              <g
                id="Group_69"
                data-name="Group 69"
                transform="translate(0.331 8.344)"
              >
                <g id="Group_68" data-name="Group 68">
                  <rect
                    id="Rectangle_78"
                    data-name="Rectangle 78"
                    width="5.734"
                    height="17.629"
                  />
                </g>
              </g>
              <g
                id="Group_71"
                data-name="Group 71"
                transform="translate(8.344 8.344)"
              >
                <g id="Group_70" data-name="Group 70">
                  <path
                    id="Path_61"
                    data-name="Path 61"
                    d="M173.34,160.207c-.061-.019-.119-.04-.183-.058s-.154-.032-.232-.045a5.14,5.14,0,0,0-1.029-.1,7.967,7.967,0,0,0-6.162,3.37V160H160v17.629h5.734v-9.616s4.334-6.036,6.162-1.6v11.218h5.733v-11.9A5.717,5.717,0,0,0,173.34,160.207Z"
                    transform="translate(-160 -160)"
                  />
                </g>
              </g>
              <g id="Group_73" data-name="Group 73" transform="translate(0 0)">
                <g id="Group_72" data-name="Group 72">
                  <circle
                    id="Ellipse_14"
                    data-name="Ellipse 14"
                    cx="3"
                    cy="3"
                    r="3"
                    transform="translate(0.248 -0.027)"
                  />
                </g>
              </g>
            </g>
          </svg>
        </a>
        <a href="MAILTO:mehfoozijaz786@gmail.com" className="social-link">
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 29.25 20.25"
          >
            <g
              id="Icon_ionic-ios-mail"
              data-name="Icon ionic-ios-mail"
              transform="translate(-3.375 -7.875)"
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M32.386,10.357,24.82,18.063a.136.136,0,0,0,0,.2L30.115,23.9a.912.912,0,0,1,0,1.294.917.917,0,0,1-1.294,0l-5.273-5.618a.144.144,0,0,0-.2,0l-1.287,1.308a5.661,5.661,0,0,1-4.036,1.7,5.775,5.775,0,0,1-4.12-1.751l-1.238-1.259a.144.144,0,0,0-.2,0L7.186,25.193a.917.917,0,0,1-1.294,0,.912.912,0,0,1,0-1.294l5.295-5.639a.15.15,0,0,0,0-.2L3.614,10.357a.139.139,0,0,0-.239.1v15.42a2.257,2.257,0,0,0,2.25,2.25h24.75a2.257,2.257,0,0,0,2.25-2.25V10.455A.141.141,0,0,0,32.386,10.357Z"
              />
              <path
                id="Path_2"
                data-name="Path 2"
                d="M18,20.749A3.823,3.823,0,0,0,20.749,19.6L31.781,8.367a2.21,2.21,0,0,0-1.392-.492H5.618a2.2,2.2,0,0,0-1.392.492L15.258,19.6A3.823,3.823,0,0,0,18,20.749Z"
              />
            </g>
          </svg>
        </a>
        <a
          href="https://www.facebook.com/MehfoozurRehmanIjaz"
          className="social-link"
        >
          <svg
            id="facebook"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 15.31 28.317"
          >
            <path
              id="Path_58"
              data-name="Path 58"
              d="M36.81.006,33.138,0c-4.126,0-6.792,2.735-6.792,6.969v3.213H22.654a.577.577,0,0,0-.577.578v4.655a.577.577,0,0,0,.577.577h3.692V27.74a.577.577,0,0,0,.577.577h4.817a.577.577,0,0,0,.577-.577V15.993h4.317a.577.577,0,0,0,.577-.577l0-4.655a.578.578,0,0,0-.578-.578H32.319V7.458c0-1.309.312-1.974,2.017-1.974H36.81a.577.577,0,0,0,.577-.577V.583A.578.578,0,0,0,36.81.006Z"
              transform="translate(-22.077)"
            />
          </svg>
        </a>
      </div>
      <div className="section-content jumbotron-section">
        <div className="jumbotron-left">
          <div className="section-heading">
            <span>Hey I'm</span> Mehfooz-ur-Rehman
          </div>
          <div className="section-about">Let's Build Your Digital Identity</div>
          <p>Web Developer & UI/UX Designer</p>
          <p>
            I'm a Web Developer and UI/UX Designer from Samundri, Pakistan,
            working in web development. I enjoy turning complex problems into
            simple, beautiful and intuitive solutions.
          </p>
          <div className="jumbotron-cta">
            <a href="#contact" className="nav-btn">
              Hire me!
            </a>
            <a href="#portfolio" className="nav-btn-reverse">
              Explore
            </a>
          </div>
        </div>
        <div className="jumbotron-right">
          <img src={jumbotronPic} alt="jumbotron-pic" />
        </div>
      </div>
    </section>
  );
}
