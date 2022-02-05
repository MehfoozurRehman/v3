import React from "react";
import "./Blog.css";
import blogCardPic1 from "../../Assets/blog/b2.png";
import blogCardPic2 from "../../Assets/blog/b5.png";
import blogCardPic3 from "../../Assets/blog/b7.png";

export default function Blog() {
  return (
    <section className="section" id="blog">
      <div className="section-header">
        <div className="section-heading">Blog</div>
        <div className="section-about">Trendy News Feeds</div>
      </div>
      <div className="section-content">
        <div className="blog-row">
          <div className="blog-card">
            <img src={blogCardPic1} alt="card-pic" className="blog-card-img" />
            <div className="blog-card-content">
              <div className="blog-card-content-date">26th October,2019</div>
              <div className="blog-card-content-heading">
                I Used The Web For A Day On A 50 MB Budget
              </div>
              <div className="blog-card-content-pattren">
                <div className="blog-card-content-pattren-child"></div>
                <div className="blog-card-content-pattren-child"></div>
                <div className="blog-card-content-pattren-child"></div>
              </div>
              <div className="blog-card-content-detail">
                Lorem ipsum dolor sit amet,Stet clita kasd is the most lorem
                ipsum dolor sit amet.
              </div>
              <a href="#" title="learn-more" className="blog-card-content-link">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 14.75 10.372"
                >
                  <path
                    id="arrow"
                    d="M9.933,4.83a.523.523,0,0,0-.743.736l3.769,3.769H.52A.518.518,0,0,0,0,9.856a.524.524,0,0,0,.52.528H12.959L9.189,14.146a.534.534,0,0,0,0,.743.521.521,0,0,0,.743,0l4.662-4.662a.512.512,0,0,0,0-.736Z"
                    transform="translate(0 -4.674)"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="blog-card">
            <img src={blogCardPic2} alt="card-pic" className="blog-card-img" />
            <div className="blog-card-content">
              <div className="blog-card-content-date">26th October,2019</div>
              <div className="blog-card-content-heading">
                I Used The Web For A Day On A 50 MB Budget
              </div>
              <div className="blog-card-content-pattren">
                <div className="blog-card-content-pattren-child"></div>
                <div className="blog-card-content-pattren-child"></div>
                <div className="blog-card-content-pattren-child"></div>
              </div>
              <div className="blog-card-content-detail">
                Lorem ipsum dolor sit amet,Stet clita kasd is the most lorem
                ipsum dolor sit amet.
              </div>
              <a href="#" title="learn-more" className="blog-card-content-link">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 14.75 10.372"
                >
                  <path
                    id="arrow"
                    d="M9.933,4.83a.523.523,0,0,0-.743.736l3.769,3.769H.52A.518.518,0,0,0,0,9.856a.524.524,0,0,0,.52.528H12.959L9.189,14.146a.534.534,0,0,0,0,.743.521.521,0,0,0,.743,0l4.662-4.662a.512.512,0,0,0,0-.736Z"
                    transform="translate(0 -4.674)"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="blog-card">
            <img src={blogCardPic3} alt="card-pic" className="blog-card-img" />
            <div className="blog-card-content">
              <div className="blog-card-content-date">26th October,2019</div>
              <div className="blog-card-content-heading">
                I Used The Web For A Day On A 50 MB Budget
              </div>
              <div className="blog-card-content-pattren">
                <div className="blog-card-content-pattren-child"></div>
                <div className="blog-card-content-pattren-child"></div>
                <div className="blog-card-content-pattren-child"></div>
              </div>
              <div className="blog-card-content-detail">
                Lorem ipsum dolor sit amet,Stet clita kasd is the most lorem
                ipsum dolor sit amet.
              </div>
              <a href="#" title="learn-more" className="blog-card-content-link">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 14.75 10.372"
                >
                  <path
                    id="arrow"
                    d="M9.933,4.83a.523.523,0,0,0-.743.736l3.769,3.769H.52A.518.518,0,0,0,0,9.856a.524.524,0,0,0,.52.528H12.959L9.189,14.146a.534.534,0,0,0,0,.743.521.521,0,0,0,.743,0l4.662-4.662a.512.512,0,0,0,0-.736Z"
                    transform="translate(0 -4.674)"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
