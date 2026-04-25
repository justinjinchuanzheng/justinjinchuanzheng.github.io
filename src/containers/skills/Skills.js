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
        <h2 className="skills-project-title">Liquid Metal Actuators</h2>
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
              Dragonfly-inspired liquid metal actuator (0.25x).
            </p>
          </div>

          <div className="skills-video-block">
            <video className="skills-video" autoPlay loop muted playsInline>
              <source src={`${publicUrl}/Dragonfly2.mp4`} type="video/mp4" />
            </video>
            <p className="skills-video-caption">
              Dragonfly actuator in real time.
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
            Dragonfly-Inspired Millirobot Driven by a Liquid-Metal Hydrogel
            Muscle
          </h3>

          <p
            className={
              isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"
            }
          >
            This video shows a millimeter scale flapping-wing robot driven by a
            liquid-metal core encapsulated in a {/*polyacrylamide/KOH*/}{" "}
            hydrogel membrane.{" "}
            {/*By modulating the surface tension of the liquid metal with
            electrical inputs of about 1 V, the actuator produces more than 40%
            strain with strain rates above 1,000% per second and maintains
            measurable motion up to 50 Hz, comparable to biological dragonfly
            wingbeat frequencies.*/}{" "}
            This demonstration illustrates that low-voltage, high-bandwidth soft
            actuators can be integrated into insect-scale robotic platforms for
            controlled flapping flight. My contributions to this work include
            synthesizing the hydrogel material used in the actuator and
            performing quantitative data analysis and movement tracking from
            high-speed videos, including wing trajectory and flapping-frequency
            extraction.
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
            Axisymmetric Liquid-Metal Hydrogel Muscle: Single-Actuator
            Characterization
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
                Axisymmetric liquid-metal hydrogel muscle actuator operating in
                real time.
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
              This video shows a single-axis, axisymmetric liquid-metal hydrogel
              actuator operating in real time.{" "}
              {/*A ~24.5 µL droplet of eutectic
              liquid metal is encapsulated in a ~120 µm thick
              polyacrylamide/KOH hydrogel membrane and driven with an activation
              voltage of ±2.6 V at 0.5 Hz, producing large, reversible radial
              deformation of the cylinder. This experiment is used to
              characterize strain, response time, cyclic stability, and
              interfacial bubble dynamics, providing quantitative data for the
              design of low-voltage soft actuators.*/}{" "}
              My contributions include synthesizing the hydrogel membrane and
              performing image-based motion tracking and data analysis of the
              actuator kinematics from the recorded videos.
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
              Linear Kinematic Tracking of Axisymmetric Liquid-Metal Hydrogel
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
                response curves.
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
              For this project, I designed and implemented the tracking workflow
              and carried out all motion analysis and data processing for the
              full set of experimental videos.
            </p>

            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text"
                  : "subTitle skills-text"
              }
            >
              This video shows the linear kinematics tracking workflow used to
              quantify the one dimensional deformation of the axisymmetric
              liquid-metal hydrogel muscle. An image-based analysis pipeline
              tracks the actuator boundaries frame by frame, converts pixel
              motion to physical displacement, and extracts axial strain,
              actuation frequency, and time-resolved response curves. The
              resulting datasets are then used to generate experimental graphs
              and to perform quantitative calculations of response speed, cyclic
              stability, and voltage-dependent performance.
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
                <source src={`${publicUrl}/Greyvid.mp4`} type="video/mp4" />
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
                <source src={`${publicUrl}/Bluevid2.mp4`} type="video/mp4" />
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
            High-Performance Liquid-State Batteries
          </h2>
          <p className="skills-project-status-top">2024-2025</p>
        </div>

        <div className="skills-battery-project">
          <p
            className={
              isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"
            }
          >
            I led a battery research project developing a dry-electrode
            fabrication route for high-loading sodium-ion cathodes using PTFE
            binder and hot-roll pressing. This approach enabled areal loadings
            up to about 20 mg cm⁻² while maintaining strong electrochemical
            performance, including better long-term retention than a
            lower-loading wet-electrode control. I carried out the full
            workflow, including electrode fabrication, coin cell assembly,
            cycling tests, SEM sample preparation, and electrochemical data
            analysis.
          </p>
        </div>

        {/* Coin cell schematic image */}
        <div className="skills-battery-image">
          <img
            className="skills-battery-cell-img"
            src={`${publicUrl}/cell.png`}
            alt="Schematic of a liquid state sodium metal coin cell with Na2MnFe(CN) cathode, Celgard 3501 separator, and sodium anode."
          />
          <p className="skills-battery-image-caption">
            Schematic of a liquid state sodium metal coin cell with Na₂MnFe(CN)
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
          SEM micrographs of dry-processed NMF333 composite cathodes at
          different magnifications (1-50 µm), showing the PTFE fibril network
          tying secondary particles together.
        </p>
      </Fade>
    </div>
  );
}