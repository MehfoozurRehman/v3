import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import projectPic2 from "../../Assets/portfolio/project (2).png";
import axios from "axios";

function PortfolioCard({ data }) {
  const [image, setImage] = useState(
    "https://cdn.dribbble.com/users/2346349/screenshots/9246147/media/06971345603f8422d664fa0ea362b3a5.gif"
  );
  const [languages, setLanguages] = useState([]);
  useEffect(() => {
    axios
      .get(data.languages_url && data.languages_url, {
        Authorization: "Bearer " + "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",
      })
      .then((res) => {
        console.log(res.data);
        setLanguages(res.data);
      });
  }, []);
  useEffect(() => {
    axios
      .post(
        "https://v2.convertapi.com/convert/web/to/jpg?Secret=gWBCljB4RSMq6UEJ",
        {
          Parameters: [
            {
              Name: "Url",
              Value: data.homepage,
            },
            {
              Name: "StoreFile",
              Value: true,
            },
            {
              Name: "ImageWidth",
              Value: "1920",
            },
            {
              Name: "ImageHeight",
              Value: "1080",
            },
            {
              Name: "CropWidth",
              Value: "1920",
            },
            {
              Name: "CropHeight",
              Value: "1080",
            },
          ],
        }
      )
      .then((res) => {
        // console.log(res.data.Files[0].Url);
        setImage(res.data.Files[0].Url);
      });
  }, []);
  let repoName = data.name.replace(/-/g, " ");
  repoName = repoName.replace(/_/g, " ");
  return (
    <div className="portfolio-card">
      <img src={image} alt="card-pic" className="portfolio-card-img" />
      <div className="portfolio-card-content">
        <div style={{ flex: 1 }}>
          <div className="portfolio-card-content-date">{repoName}</div>
          <div className="portfolio-card-content-heading">
            {JSON.stringify(languages)
              .replace(/[0-9]/g, "")
              .replace(/"/g, "")
              .replace(/:/g, "")
              .replace(/,/g, ", ")
              .replace(/}/g, "")
              .replace(/{/g, "")}
          </div>
          <div className="portfolio-card-content-pattren">
            <div className="portfolio-card-content-pattren-child"></div>
            <div className="portfolio-card-content-pattren-child"></div>
            <div className="portfolio-card-content-pattren-child"></div>
          </div>
          <div className="portfolio-card-content-detail">
            {data.description}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <a
            href={data.html_url}
            title="learn-more"
            className="portfolio-card-content-link"
          >
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
          {data.homepage && (
            <a
              href={data.homepage}
              title={data.homepage}
              className="portfolio-card-content-link-reverse"
            >
              Preview
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-eye"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [noOfProject, setNoOfProject] = useState(6);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/MehfoozurRehman/repos", {
        Authorization: "Bearer " + "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",
      })
      .then((res) => {
        setProjects(res.data);
      });
  }, []);

  return (
    <section className="section" id="portfolio">
      <div className="section-header">
        <div className="section-heading">Portfolio</div>
        <div className="section-about">My Work Examples</div>
      </div>
      <div className="section-content">
        <div className="portfolio-row">
          {projects
            .sort((a, b) => (a.created_at < b.created_at ? 1 : -1))
            .filter((project, i) => i < noOfProject)
            .map((project) => (
              <PortfolioCard key={project.id} data={project} />
            ))}
        </div>
        <a
          className="about-btn"
          onClick={() => {
            setNoOfProject(noOfProject + 3);
          }}
          style={{ marginLeft: "44.2%" }}
        >
          Load More
        </a>
      </div>
    </section>
  );
}
