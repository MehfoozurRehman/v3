import React from "react";
import "./Testimonails.css";
import Swiper from "react-id-swiper";

export default function Testimonails() {
  return (
    <section className="section" id="testimonails">
      <div className="section-header">
        <div className="section-heading">TESTIMONIALS</div>
        <div className="section-about">What People Says</div>
      </div>
      <div className="section-content">
        <Swiper>
          <div className="testimonals-slider">
            <div className="testimonals-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 57 237"
                fill="currentColor"
              >
                <text
                  id="_"
                  data-name='"'
                  transform="translate(57 45) rotate(180)"
                  fontSize="200"
                  fontFamily="PerpetuaTitlingMT-Light, Perpetua Titling MT"
                  fontWeight="300"
                >
                  <tspan x="0" y="0">
                    &quot;
                  </tspan>
                </text>
              </svg>
              <p className="testimonals-card-details">
                I will recommend you to my colleagues. Man, this thing is
                getting better and better as I learn more about it. It's
                incredible.
              </p>
              <div className="testimonals-card-name">Jonah G.</div>
              {/* <div className="testimonals-card-designation">
                CEO, ABC Company
              </div> */}
            </div>
          </div>
          <div className="testimonals-slider">
            <div className="testimonals-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 57 237"
                fill="currentColor"
              >
                <text
                  id="_"
                  data-name='"'
                  transform="translate(57 45) rotate(180)"
                  fontSize="200"
                  fontFamily="PerpetuaTitlingMT-Light, Perpetua Titling MT"
                  fontWeight="300"
                >
                  <tspan x="0" y="0">
                    &quot;
                  </tspan>
                </text>
              </svg>
              <p className="testimonals-card-details">
                This is simply unbelievable! You won't regret it. Development is
                great.
              </p>
              <div className="testimonals-card-name">Henrietta D.</div>
              {/* <div className="testimonals-card-designation">
                CEO, ABC Company
              </div> */}
            </div>
          </div>
          <div className="testimonals-slider">
            <div className="testimonals-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 57 237"
                fill="currentColor"
              >
                <text
                  id="_"
                  data-name='"'
                  transform="translate(57 45) rotate(180)"
                  fontSize="200"
                  fontFamily="PerpetuaTitlingMT-Light, Perpetua Titling MT"
                  fontWeight="300"
                >
                  <tspan x="0" y="0">
                    &quot;
                  </tspan>
                </text>
              </svg>
              <p className="testimonals-card-details">
                Great job, I will definitely be ordering again! You won't regret
                it. It's the perfect solution for our business.
              </p>
              <div className="testimonals-card-name">Brook N.</div>
              {/* <div className="testimonals-card-designation">
                CEO, ABC Company
              </div> */}
            </div>
          </div>
          <div className="testimonals-slider">
            <div className="testimonals-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 57 237"
                fill="currentColor"
              >
                <text
                  id="_"
                  data-name='"'
                  transform="translate(57 45) rotate(180)"
                  fontSize="200"
                  fontFamily="PerpetuaTitlingMT-Light, Perpetua Titling MT"
                  fontWeight="300"
                >
                  <tspan x="0" y="0">
                    &quot;
                  </tspan>
                </text>
              </svg>
              <p className="testimonals-card-details">
                Man, this thing is getting better and better as I learn more
                about it. I love development. I would be lost without
                development. I don't know what else to say.
              </p>
              <div className="testimonals-card-name">Philippa S.</div>
              {/* <div className="testimonals-card-designation">
                CEO, ABC Company
              </div> */}
            </div>
          </div>
          <div className="testimonals-slider">
            <div className="testimonals-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 57 237"
                fill="currentColor"
              >
                <text
                  id="_"
                  data-name='"'
                  transform="translate(57 45) rotate(180)"
                  fontSize="200"
                  fontFamily="PerpetuaTitlingMT-Light, Perpetua Titling MT"
                  fontWeight="300"
                >
                  <tspan x="0" y="0">
                    &quot;
                  </tspan>
                </text>
              </svg>
              <p className="testimonals-card-details">
                Your company is truly upstanding and is behind its product 100%.
                We were treated like royalty. I am really satisfied with my
                development. I will refer everyone I know.
              </p>
              <div className="testimonals-card-name">Sanderson D.</div>
              {/* <div className="testimonals-card-designation">
                CEO, ABC Company
              </div> */}
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
