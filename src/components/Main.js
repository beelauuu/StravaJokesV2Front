import React, { useState, useEffect } from "react";
import jokesImage from "./jokes.jpg";
import jokesImageMobile from "./jokesTwo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const Main = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
    };

    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageSource = isMobile ? jokesImageMobile : jokesImage;

  const handleEnableJokes = () => {
    window.location.href = "https://strava-jokes.onrender.com/login";
  };

  const handleDisableJokes = () => {
    window.location.href = "https://strava-jokes.onrender.com/delete";
  };

  return (
    <div className="main container">
      <div className="row">
        <div className="d-flex align-items-center justify-content-center">
          <div>
            <h2 className="display-2 text-center mt-2">
              Seamlessly integrate the highest quality jokes everyday on Strava
            </h2>
            <div className="text-center">
              <img src={imageSource} alt="Jokes" className="img-fluid mt-3 mb-3" />
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="text-center">
            <button className="btn btn-outline-dark btn-lg my-2 mx-5" onClick={handleEnableJokes}>
              Enable Jokes
            </button>
            <button className="btn btn-outline-dark btn-lg my-2 mx-5" onClick={handleDisableJokes}>
              Disable Jokes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
