import React, {useContext, useEffect} from "react";
import "./Skills.scss";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  const publicUrl = process.env.PUBLIC_URL || "";

  useEffect(() => {
    const videos = Array.from(document.querySelectorAll("#skills video"));

    if (!("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const video = entry.target;

          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      {
        rootMargin: "1200px 0px",
        threshold: 0.01
      }
    );

    videos.forEach(video => {
      video.muted = true;
      video.playsInline = true;
      observer.observe(video);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!skillsSection.display) {
    return null;
  }

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      {/* Header */}
      <div className="skills-header" id="liquid-metal-actuators">
        <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
          Research
        </h1>
        <h2 className="skills-project-title">Liquid-Metal Actuators</h2>
        <p className="skills-project-status-top">
          Manuscript in Preparation (2025-2026)
        </p>
      </div>

      <Fade duration={300}>
        {/* Dragonfly: two videos side by side */}
        <div className="skills-video-row">
          <div className="skills-video-block">
            <video className="skills-video" autoPlay loop muted playsInline>
              <source src={`${publicUrl}/Dragonfly.mp4`} type="video/mp4" />
            </video>
            <p className="skills-video-caption">
              Dragonfly-inspired liquid-metal actuator shown at 0.25x speed.
            </p>
          </div>

          <div className="skills-video-block">
            <video className="skills-video" autoPlay loop muted playsInline>
              <source src={`${publicUrl}/Dragonfly2.mp4`} type="video/mp4" />
            </video>
            <p className="skills-video-caption">
              Dragonfly-inspired liquid-metal actuator operating in real time.
            </p>
          </div>
        </div>

        {/* Dragonfly text */}
        <div className="skills-text-below">
          <h3
            className={
              isDark
                ? "dark-mode skills-project-subheading"
                : "skills-project-subheading"
            }
          >
            Dragonfly-Inspired Millirobot Driven by a Liquid-Metal Muscle
          </h3>

          <p
            className={
              isDark ? "subTitle skills-text" : "subTitle skills-text-dark"
            }
          >
            This video shows a millimeter-scale flapping-wing robot driven by a
            liquid-metal hydrogel actuator. The demonstration shows how
            low-voltage, high-bandwidth soft actuators can be integrated into
            insect-scale robotic platforms. My contributions included hydrogel
            material synthesis and quantitative video analysis of wing
            trajectory and flapping frequency.
          </p>

          <div className="skills-divider" />
        </div>

        {/* Axisymmetric muscle: single video + caption */}
        <div className="skills-second-project">
          <h3
            className={
              isDark
                ? "dark-mode skills-project-subheading"
                : "skills-project-subheading"
            }
          >
            Axisymmetric Liquid-Metal Hydrogel Muscle Characterization
          </h3>

          <div className="skills-single-video">
            <div className="skills-video-block">
              <video
                className="skills-video-wide"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={`${publicUrl}/Actuator.mp4`} type="video/mp4" />
              </video>
              <p className="skills-video-caption">
                Axisymmetric liquid-metal hydrogel muscle operating in real
                time.
              </p>
            </div>
          </div>

          <div className="skills-text-below">
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text"
                  : "subTitle skills-text"
              }
            >
              This video shows an axisymmetric liquid-metal hydrogel muscle
              operating in real time. My contributions included synthesizing the
              hydrogel membrane and performing image-based motion tracking to
              quantify actuator kinematics using recorded videos.
            </p>
          </div>

          <div className="skills-divider" />
        </div>

        {/* Linear tracking: single video + caption */}
        <div className="skills-third-project">
          <div className="skills-text-above">
            <h3
              className={
                isDark
                  ? "dark-mode skills-project-subheading"
                  : "skills-project-subheading"
              }
            >
              Linear Kinematic Tracking of an Axisymmetric Liquid-Metal Hydrogel
              Muscle
            </h3>
          </div>

          <div className="skills-single-video">
            <div className="skills-video-block">
              <video
                className="skills-video-wide"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={`${publicUrl}/Tracking.mp4`} type="video/mp4" />
              </video>
              <p className="skills-video-caption">
                Image-based tracking overlay used to extract axial strain and
                time-resolved response curves.
              </p>
            </div>
          </div>

          <div className="skills-text-below">
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text"
                  : "subTitle skills-text"
              }
            >
              For this project, I designed and implemented an image-based
              tracking workflow to quantify the linear deformation of an
              axisymmetric liquid-metal hydrogel muscle. The pipeline tracked
              actuator boundaries frame by frame, converted pixel motion into
              physical displacement, and extracted axial strain, actuation
              frequency, and time-resolved response curves.
            </p>

            <div className="skills-divider" />
          </div>
        </div>

        {/* Battery demo video gallery */}
        <div className="skills-battery-video-grid-wrapper">
          <div className="skills-battery-video-grid">
            <div className="skills-battery-video-block">
              <video
                className="skills-battery-video"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={`${publicUrl}/Bubblevid.mp4`} type="video/mp4" />
              </video>
            </div>

            <div className="skills-battery-video-block">
              <video
                className="skills-battery-video"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={`${publicUrl}/Bluevid2.mp4`} type="video/mp4" />
              </video>
            </div>

            <div className="skills-battery-video-block">
              <video
                className="skills-battery-video"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={`${publicUrl}/Bubblevid2.mp4`} type="video/mp4" />
              </video>
            </div>

            <div className="skills-battery-video-block">
              <video
                className="skills-battery-video"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={`${publicUrl}/Bluevid.mp4`} type="video/mp4" />
              </video>
            </div>

            <div className="skills-battery-video-block">
              <video
                className="skills-battery-video"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={`${publicUrl}/Bluevid1.mp4`} type="video/mp4" />
              </video>
            </div>

            <div className="skills-battery-video-block">
              <video
                className="skills-battery-video"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={`${publicUrl}/Greyvid.mp4`} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="skills-battery-video-divider" />
        </div>

        {/* Batteries section */}
        <div className="skills-battery-header" id="liquid-state-batteries">
          <h2
            className={
              isDark ? "dark-mode skills-project-title" : "skills-project-title"
            }
          >
            Liquid-State Batteries
          </h2>
          <p className="skills-project-status-top">2024-2025</p>
        </div>

        <div className="skills-battery-project">
          <p
            className={
              isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"
            }
          >
            I led a battery research project developing dry-processed,
            high-loading sodium-ion cathodes using PTFE binder and hot-roll
            pressing. This route achieved areal loadings up to about 20 mg cm⁻²
            while maintaining strong cycling performance compared with a
            lower-loading wet-electrode control. My work included electrode
            fabrication, coin cell assembly, cycling tests, SEM preparation, and
            data analysis.
          </p>
        </div>

        {/* Coin cell schematic image */}
        <div className="skills-battery-image">
          <img
            className="skills-battery-cell-img"
            src={`${publicUrl}/cell.png`}
            alt="Schematic of a liquid-state sodium metal coin cell with 
            Na₂MnFe(CN) cathode, Celgard 3501 separator, and sodium anode."
          />
          <p className="skills-battery-image-caption">
            Schematic of a liquid-state sodium metal coin cell with Na₂MnFe(CN)
            cathode, Celgard 3501 separator, and sodium anode.
          </p>
        </div>

        {/* Subheading above SEM gallery */}
        <div className="skills-subtitle-wrapper">
          <h3
            className={
              isDark ? "dark-mode skills-project-title" : "skills-project-title"
            }
          >
            Microstructure (SEM Gallery)
          </h3>
        </div>

        {/* SEM gallery */}
        <div className="skills-sem-gallery">
          <div className="skills-sem-row">
            <img
              className="skills-sem-img"
              src={`${publicUrl}/SEM1.png`}
              alt="SEM 1"
            />
            <img
              className="skills-sem-img"
              src={`${publicUrl}/SEM2.png`}
              alt="SEM 2"
            />
            <img
              className="skills-sem-img"
              src={`${publicUrl}/SEM3.png`}
              alt="SEM 3"
            />
            <img
              className="skills-sem-img"
              src={`${publicUrl}/SEM4.png`}
              alt="SEM 4"
            />
            <img
              className="skills-sem-img"
              src={`${publicUrl}/SEM5.png`}
              alt="SEM 5"
            />
            <img
              className="skills-sem-img"
              src={`${publicUrl}/SEM6.png`}
              alt="SEM 6"
            />
            <img
              className="skills-sem-img"
              src={`${publicUrl}/SEM7.png`}
              alt="SEM 7"
            />
            <img
              className="skills-sem-img"
              src={`${publicUrl}/SEM8.png`}
              alt="SEM 8"
            />
            <img
              className="skills-sem-img"
              src={`${publicUrl}/SEM9.png`}
              alt="SEM 9"
            />
            <img
              className="skills-sem-img"
              src={`${publicUrl}/SEM10.png`}
              alt="SEM 10"
            />
            <img
              className="skills-sem-img"
              src={`${publicUrl}/SEM11.png`}
              alt="SEM 11"
            />
            <img
              className="skills-sem-img"
              src={`${publicUrl}/SEM12.png`}
              alt="SEM 12"
            />
          </div>
        </div>

        <p
          className={
            isDark
              ? "dark-mode subTitle skills-text skills-sem-caption"
              : "subTitle skills-text skills-sem-caption"
          }
        >
          SEM micrographs of dry-processed NMF333 composite cathodes at multiple
          length scales, showing PTFE fibrils linking secondary particles into a
          connected electrode network.
        </p>
      </Fade>
    </div>
  );
}
