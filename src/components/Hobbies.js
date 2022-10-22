import React from "react";
import { Outlet } from "react-router-dom";

const Hobbies = () => {
  return (
    <>
      <div className="hobbies">
        <div className="w3-content w3-container w3-padding-64" id="portfolio">
          <h3 className="w3-center">How do I spend my weekend!!</h3>
          <p className="w3-center">
            <em>
              Here are some of my Hobbies and Interest. Look at the pictures and
              make some guess...
            </em>
          </p>

          <div className="w3-row-padding w3-center">
            <div className="w3-col m3">
              <img
                src="https://images.immediate.co.uk/production/volatile/sites/32/2020/04/Creative_hobbies_for_adults-939a018.jpg"
                style={{ width: "100%" }}
                onclick="onClick(this)"
                className="w3-hover-opacity"
                alt="The mist over the mountains"
              />
            </div>

            <div className="w3-col m3">
              <img
                src="https://www.pastimegeek.com/wp-content/uploads/2021/10/is-yoga-a-hobby.jpg"
                style={{ width: "100%" }}
                onclick="onClick(this)"
                className="w3-hover-opacity"
                alt="yoga"
              />
            </div>

            <div className="w3-col m3">
              <img
                src="https://thumbs.dreamstime.com/b/happy-friends-playing-badminton-summer-garden-leisure-holidays-people-sport-concept-couple-shuttlecock-82133913.jpg"
                style={{ width: "100%" }}
                onclick="onClick(this)"
                className="w3-hover-opacity"
                alt="badminton"
              />
            </div>

            <div className="w3-col m3">
              <img
                src="https://www.c-and-a.com/shop-img/content/2021/kochen-backen-frau-mit-ipad.jpg"
                style={{ width: "100%" }}
                onclick="onClick(this)"
                className="w3-hover-opacity"
                alt="Quiet ocean"
              />
            </div>
          </div>

          <div className="w3-row-padding w3-center w3-section">
            <div className="w3-col m3">
              <img
                src="https://tanzschule-oberursel.de/wp-content/uploads/2020/01/Fotolia_JAZZ-1920.jpg"
                style={{ width: "100%" }}
                onclick="onClick(this)"
                className="w3-hover-opacity"
                alt="The mist"
              />
            </div>

            <div className="w3-col m3">
              <img
                src="http://www.barneyfrank.net/wp-content/uploads/2015/07/gardening-as-a-hobby.jpg"
                style={{ width: "100%" }}
                onclick="onClick(this)"
                className="w3-hover-opacity"
                alt="My beloved typewriter"
              />
            </div>

            <div className="w3-col m3">
              <img
                src="https://www.pixinfocus.com/wp-content/uploads/2019/01/Get-Started-in-Photography-2.jpg"
                style={{ width: "100%" }}
                onclick="onClick(this)"
                className="w3-hover-opacity"
                alt="Empty ghost train"
              />
            </div>

            <div className="w3-col m3">
              <img
                src="https://s3.envato.com/files/290689207/DSC09761.jpg"
                style={{ width: "100%" }}
                onclick="onClick(this)"
                className="w3-hover-opacity"
                alt="Sailing"
              />
            </div>
            <button
              className="w3-button w3-padding-large w3-light-grey"
              style={{ marginTop: "64px" }}
            >
              LOAD MORE
            </button>
          </div>
        </div>

        <div
          id="modal01"
          className="w3-modal w3-black"
          onclick="this.style.display='none'"
        >
          <span
            className="w3-button w3-large w3-black w3-display-topright"
            title="Close Modal Image"
          >
            <i className="fa fa-remove"></i>
          </span>
          <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
            <img
              id="https://www.psd.gov.sg/images/default-source/challenge-library/ideas/work-better/how-to-keep-a-hobby-when-you-have-no-time/hobby-01-1600x900.jpeg"
              className="w3-image"
            />
            <p id="caption" className="w3-opacity w3-large"></p>
          </div>
        </div>

        <div className="bgimg-3 w3-display-container w3-opacity-min">
          <div className="w3-display-middle">
            <span className="w3-xxlarge w3-text-white w3-wide">CONTACT</span>
          </div>
        </div>

        <div
          id="modal01"
          className="w3-modal w3-black"
          onclick="this.style.display='none'"
        >
          <span
            className="w3-button w3-large w3-black w3-display-topright"
            title="Close Modal Image"
          >
            <i className="fa fa-remove"></i>
          </span>
          <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
            <img id="img01" className="w3-image" />
            <p id="caption" className="w3-opacity w3-large"></p>
          </div>
        </div>

        <div className="bgimg-3 w3-display-container w3-opacity-min">
          <div className="w3-display-middle">
            <span className="w3-xxlarge w3-text-white w3-wide">CONTACT</span>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Hobbies;
