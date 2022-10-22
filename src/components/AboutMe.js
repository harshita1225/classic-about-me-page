import React from "react";
import { Outlet } from "react-router-dom";
import "../components/styles.css";

const AboutMe = () => {
  return (
    <div className="aboutme-page">
      <img
        src="https://img.freepik.com/free-vector/programmer-working-web-development-code-engineer-programming-python-php-java-script-computer_90220-249.jpg"
        alt=""
      />

      <div className="w3-display-center w3-padding" id="sub-about">
        <span className="w3-tag w3-xlarge">WEB DEVELOPER in progress...</span>

        <p className="w3-large w3-center w3-padding-16">Im really good at:</p>

        <p className="w3-wide">
          <i className="fa fa-camera"></i>HTML-CSS
        </p>
        <div className="w3-light-grey">
          <div
            className="w3-container w3-padding-small w3-dark-grey w3-center"
            style={{ width: "90%" }}
          >
            90%
          </div>
        </div>

        <p className="w3-wide">
          <i className="fa fa-camera"></i>REACT
        </p>
        <div className="w3-light-grey">
          <div
            className="w3-container w3-padding-small w3-dark-grey w3-center"
            style={{ width: "80%" }}
          >
            80%
          </div>
        </div>

        <p className="w3-wide">
          <i className="fa fa-camera"></i>JAVASCRIPT
        </p>
        <div className="w3-light-grey">
          <div
            className="w3-container w3-padding-small w3-dark-grey w3-center"
            style={{ width: "80%" }}
          >
            80%
          </div>
        </div>
        <div className="w3-content w3-container w3-padding-64" id="about">
          <h3 className="w3-center">ABOUT ME</h3>
          <p className="center">
            <em>I love Coding</em>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>

          <div className="w3-row">
            <div className="w3-col m6 w3-center w3-padding-large">
              <p>
                <b>
                  <i className="fa fa-user w3-margin-right"></i>Harshita Joshi
                </b>
              </p>
              <br />
              <img
                styles={{ width: "500px", height: "333px" }}
                id="myImg"
                src="https://ih1.redbubble.net/image.1469776909.6425/st,small,507x507-pad,600x600,f8f8f8.jpg"
                className="w3-round w3-image w3-opacity w3-hover-opacity-off"
                alt="Photo of Me"
              />
            </div>

            <div className="w3-col m6 w3-hide-small w3-padding-64">
              <p>
                Welcome to my website. I am lorem ipsum consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div className="w3-row w3-center w3-dark-grey w3-padding-16">
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">4+</span>
            <br />
            Courses
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">55+</span>
            <br />
            Projects Done
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">9+</span>
            <br />
            Course Certificates
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">5+</span>
            <br />
            Group Projects
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AboutMe;
