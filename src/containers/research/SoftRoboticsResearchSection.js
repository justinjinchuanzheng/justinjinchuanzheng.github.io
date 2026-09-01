import React, {useEffect} from "react";
import {Fade} from "react-reveal";
import "../skills/Skills.scss";

export default function SoftRoboticsResearchSection({isDark}) {
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

  return (
    <>
      <div className="skills-header" id="soft-robotics">
        <h2
          className={
            isDark
              ? "dark-mode skills-project-title soft-robotics-title"
              : "skills-project-title soft-robotics-title"
          }
        >
          Soft Robotics
        </h2>

        <p className="skills-project-status-top">
          Research Project (2025-2026)
        </p>
      </div>

      <Fade duration={300}>
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

        <div className="skills-fourth-project">
          <h3
            className={
              isDark
                ? "dark-mode skills-project-subheading"
                : "skills-project-subheading"
            }
          >
            Synaptic Plasticity in a Liquid-Metal Actuator
          </h3>

          <p className="skills-project-status-top">
            Research Project (2025-2026)
          </p>

          <div className="synaptic-video-grid">
            <div className="skills-video-block">
              <video className="skills-video" autoPlay loop muted playsInline>
                <source src={`${publicUrl}/LMA1.mp4`} type="video/mp4" />
              </video>

              <p className="skills-video-caption">
                Oxidation-driven flattening of the liquid-metal actuator.
              </p>
            </div>

            <div className="skills-video-block">
              <video className="skills-video" autoPlay loop muted playsInline>
                <source src={`${publicUrl}/LMA4.mp4`} type="video/mp4" />
              </video>

              <p className="skills-video-caption">
                Reversible shape modulation during cyclic actuation.
              </p>
            </div>

            <div className="skills-video-block">
              <video className="skills-video" autoPlay loop muted playsInline>
                <source src={`${publicUrl}/LMA3.mp4`} type="video/mp4" />
              </video>

              <p className="skills-video-caption">
                Reduction-driven recovery of the raised liquid-metal state.
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
              This project explores synaptic-like short- and long-term
              plasticity in a liquid-metal actuator through electrochemical
              oxide retention. Systematic sweeps of KOH concentration, input
              voltage, waveform, and frequency reveal how the actuator
              transitions from temporary deformation to retained intermediate
              shapes.
            </p>

            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text"
                  : "subTitle skills-text"
              }
            >
              My contributions included setting up the complete experiment;
              preparing carbon ink, KOH electrolyte, and SIS samples;
              independently conducting and recording the actuation experiments;
              and performing image-based motion tracking and data analysis.
            </p>
          </div>
        </div>
      </Fade>
    </>
  );
}