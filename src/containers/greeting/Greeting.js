import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import profileImage from "../../assets/images/Award.png";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade duration={300}>
      <div className="greet-main">
        <div className="video-background">
          <video
            className="video-background__video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={process.env.PUBLIC_URL + "/MetalPoster.png"}
          >
            <source
              src={process.env.PUBLIC_URL + "/Metal.mp4"}
              type="video/mp4"
            />
          </video>

          <p className="video-caption">
            Liquid-metal actuator research project led by Dr. Jiahe Liao.
          </p>
        </div>

        <div className="greeting-main" id="about">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title}
              </h1>

              <p
                className={
                  isDark ? "dark-mode greeting-text-p" : "greeting-text-p"
                }
              >
                {greeting.subTitle}
              </p>

              <div id="resume" className="empty-div"></div>
              <SocialMedia />

              <div className="button-greeting-div">
                <a
                  href="#/contact"
                  className={`greeting-cta ${isDark ? "dark" : "light"}`}
                >
                  Contact me
                </a>

                {greeting.resumeLink && (
                  <a
                    href={greeting.resumeLink}
                    target="_blank"
                    rel="noreferrer"
                    className={`greeting-cta ${isDark ? "dark" : "light"}`}
                  >
                    Google Scholar
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="greeting-image-div">
            <img
              src={profileImage}
              alt="Justin Zheng with Associate Dean Kevin Pipe"
              className="greeting-profile-image"
            />

            <div
              className={`greeting-image-caption ${
                isDark ? "dark-caption" : "light-caption"
              }`}
            >
              <p className="greeting-image-caption-main">
                Justin Zheng with Associate Dean Kevin Pipe after receiving the
                Michigan Engineering Distinguished Academic Achievement
                Undergraduate Award, March 2026.
              </p>

              <p className="greeting-image-caption-sub">
                Selected as the sole undergraduate award recipient in Robotics.
              </p>

              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7451976673643880448/"
                target="_blank"
                rel="noreferrer"
                className={`greeting-image-link ${
                  isDark ? "dark-link" : "light-link"
                }`}
              >
                <span className="linkedin-icon">in</span>
                <span>Featured by UMich Robotics on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}