import React from "react";
import "./ProjectDetailsPage.css";
import prImg from "../../Assets/portfolio/project (5).png";
const projectImage = prImg;

export default function ProjectDetailsPage() {
  return (
    <section id="ProjectDetailsPage">
      <div className="section-content ProjectDetailsPage-section">
        <div className="ProjectDetailsPage-section-content">
          <div className="section-heading ProjectDetailsPage-section-heading">
            Project Name
          </div>
          <img
            src={projectImage}
            className="ProjectDetailsPage-project-image"
          />
          <div className="section-about ">Project Overview</div>
          <p>
            This project attempts to approximate the development process of a
            “real world” web application. To that end, it has three overarching
            purposes.
          </p>
          <p>
            <span className="bullets">1.</span> The project will incorporate
            several popular web development technologies. Much of the time, the
            tools and programming languages taught in a classroom setting are
            learned and practiced in isolation from one another. Although this
            approach has its place, it is not typically representative of how
            software is developed for applications in industry. The ability to
            make different technologies “play nicely” with one another
            effectively, efficiently, and elegantly is a key strength of
            successful software engineers. This web development project will
            give you an opportunity to develop the important skill of
            integrating various technologies with one another in a single
            application
          </p>
          <p>
            <span className="bullets">2.</span> The project will incorporate
            several popular web development technologies. Much of the time, the
            tools and programming languages taught in a classroom setting are
            learned and practiced in isolation from one another. Although this
            approach has its place, it is not typically representative of how
            software is developed for applications in industry. The ability to
            make different technologies “play nicely” with one another
            effectively, efficiently, and elegantly is a key strength of
            successful software engineers. This web development project will
            give you an opportunity to develop the important skill of
            integrating various technologies with one another in a single
            application
          </p>
          <div className="section-about ">High Level Project Description</div>
          <p>
            For this project, you will build a web application that allows users
            to assemble a shopping cart of items to purchase. This system will
            provide the means to manage data about products and how they relate
            to each sother. It will include features to help users locate stores
            and to enable usage on mobile devices. The system will be built
            using the following technologies <br /> • On the front-end, the user
            experience will be crafted using HTML, CSS, JavaScript , and some
            libraries (bootstrap, jquery, ...) <br /> • Data managed by the
            application will be stored in a MySQL. <br /> • The web application
            itself will be written in php using MVC. (Pure/Framework) <br /> •
            Various REST-ful web services will be integrated into the project to
            enable it to interact with third party services (i.e. Google Maps,
            etc.)
          </p>
          <div className="section-about ">Milestones</div>
          <p>
            Specifications for each milestone will be provided to you as the
            project progresses. The following is a listing of each milestone
            along with its focus and scope.
            <br /> 1. Application responsive home page mock-up using HTML, CSS,
            and JS
            <br /> 2. Responsive page mock-ups for items list, product details
            page and shopping cart page using HTML, CSS, and JS
            <br /> 3. Responsive page mock-ups for admin product edit page using
            HTML, CSS, and JS
            <br /> 4. Database schema diagram and SQL to create and drop the
            system’s tables and constraints in MySql.
            <br /> 5. Home page controller, models and views using PHP
            <br />
            6. Product Controller, models, and views using PHP.
            <br />
            7. User interface enhancements (i.e. promotion timer widget, product
            upload progress bar) using JavaScript and PHP.
            <br />
            8. Login controllers and views, wish list using PHP
            <br />
            9. Admin Controller and views using PHP (this is a stretch
            milestone)
            <br />
            10. Displaying maps of stores, using web services
          </p>
          <div className="btn-row">
            <a
              href="https://github.com/MehfoozurRehman/vscode-clone"
              className="ProjectDetailsPage-btn-primary"
            >
              See Code
            </a>
            <a
              href="https://github.com/MehfoozurRehman/vscode-clone"
              className="ProjectDetailsPage-btn-secondary"
            >
              Live
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
