import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="skills-section-header">
        <div className="skills-section-header-left">
          <div className="section-heading">Skills</div>
          <div className="section-about">My Expertise</div>
        </div>
        <div className="skills-section-header-right">
          <a href="#contact" className="nav-btn">
            Hire me!
          </a>
        </div>
      </div>
      <div className="section-content">
        <div className="skills-row">
          <div className="skills-card">
            <div className="skills-card-content">
              <div className="skills-card-content-heading">Web Design</div>
              <div className="skills-card-content-pattren">
                <div className="skills-card-content-pattren-child"></div>
                <div className="skills-card-content-pattren-child"></div>
                <div className="skills-card-content-pattren-child"></div>
              </div>
              <div className="skills-card-content-detail">Adobe Xd, Figma</div>
            </div>
          </div>
          <div className="skills-card">
            <div className="skills-card-content">
              <div className="skills-card-content-heading">Graphic Design</div>
              <div className="skills-card-content-pattren">
                <div className="skills-card-content-pattren-child"></div>
                <div className="skills-card-content-pattren-child"></div>
                <div className="skills-card-content-pattren-child"></div>
              </div>
              <div className="skills-card-content-detail">
                Photo Shop, Illustrator
              </div>
            </div>
          </div>
          <div className="skills-card">
            <div className="skills-card-content">
              <div className="skills-card-content-heading">Web Development</div>
              <div className="skills-card-content-pattren">
                <div className="skills-card-content-pattren-child"></div>
                <div className="skills-card-content-pattren-child"></div>
                <div className="skills-card-content-pattren-child"></div>
              </div>
              <div className="skills-card-content-detail">
                Html 5, CSS 3, JavaScript, Bootstrap, React js, Sass, Express,
                MongoDb
              </div>
            </div>
          </div>
          <div className="skills-card">
            <div className="skills-card-content">
              <div className="skills-card-content-heading">
                Application Development
              </div>
              <div className="skills-card-content-pattren">
                <div className="skills-card-content-pattren-child"></div>
                <div className="skills-card-content-pattren-child"></div>
                <div className="skills-card-content-pattren-child"></div>
              </div>
              <div className="skills-card-content-detail">
                Electron, React Native, C++, Nodejs
              </div>
            </div>
          </div>
          <div className="skills-card">
            <div className="skills-card-content">
              <div className="skills-card-content-heading">
                Testing & Analytics
              </div>
              <div className="skills-card-content-pattren">
                <div className="skills-card-content-pattren-child"></div>
                <div className="skills-card-content-pattren-child"></div>
                <div className="skills-card-content-pattren-child"></div>
              </div>
              <div className="skills-card-content-detail">
                Fire Base, Simple Analytics
              </div>
            </div>
          </div>
          <div className="skills-card">
            <div className="skills-card-content">
              <div className="skills-card-content-heading">Web SEO</div>
              <div className="skills-card-content-pattren">
                <div className="skills-card-content-pattren-child"></div>
                <div className="skills-card-content-pattren-child"></div>
                <div className="skills-card-content-pattren-child"></div>
              </div>
              <div className="skills-card-content-detail">
                Debug, Code Reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
