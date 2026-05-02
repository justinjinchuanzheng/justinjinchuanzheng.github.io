import React, {useContext, useEffect} from "react";
import "./Skills.scss";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  const publicUrl = process.env.PUBLIC_URL || "";

  useEffect(() => {
    const videos = Array.from(
      document.querySelectorAll("#skills video[data-lazy-video='true']")
    );

    if (!("IntersectionObserver" in window)) {
      videos.forEach(video => {
        video.muted = true;
        video.playsInline = true;
        video.play().catch(() => {});
      });
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const video = entry.target;

          if (entry.isIntersecting) {
            video.muted = true;
            video.playsInline = true;
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      {
        rootMargin: "300px 0px",
        threshold: 0.2
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

  const mainVideoProps = {
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    preload: "metadata",
    "data-lazy-video": "true"
  };

  const actuatorGalleryVideoProps = {
    loop: true,
    muted: true,
    playsInline: true,
    preload: "none",
    "data-lazy-video": "true"
  };

  const lazyImageProps = {
    loading: "lazy",
    decoding: "async"
  };

  const semImages = [
    "SEM1.png",
    "SEM2.png",
    "SEM3.png",
    "SEM4.png",
    "SEM5.png",
    "SEM6.png",
    "SEM7.png",
    "SEM8.png",
    "SEM9.png",
    "SEM10.png",
    "SEM11.png",
    "SEM12.png"
  ];

  const actuatorGalleryVideos = [
    "Bubblevid.mp4",
    "Greyvid.mp4",
    "Bubblevid2.mp4",
    "Bluevid.mp4",
    "Bluevid1.mp4",
    "Bluevid2.mp4"
  ];

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
            <video className="skills-video" {...mainVideoProps}>
              <source src={`${publicUrl}/Dragonfly.mp4`} type="video/mp4" />
            </video>

            <p className="skills-video-caption">
              Dragonfly-inspired liquid-metal actuator shown at 0.25x speed.
            </p>
          </div>

          <div className="skills-video-block">
            <video className="skills-video" {...mainVideoProps}>
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
              isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"
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
              <video className="skills-video-wide" {...mainVideoProps}>
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
              <video className="skills-video-wide" {...mainVideoProps}>
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

        {/* Liquid-metal actuator video gallery */}
        <div className="skills-actuator-gallery-video-grid-wrapper">
          <div className="skills-actuator-gallery-video-grid">
            {actuatorGalleryVideos.map(videoName => (
              <div
                className="skills-actuator-gallery-video-block"
                key={videoName}
              >
                <video
                  className="skills-actuator-gallery-video"
                  {...actuatorGalleryVideoProps}
                >
                  <source src={`${publicUrl}/${videoName}`} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>

          <div className="skills-actuator-gallery-video-divider" />
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
            alt="Schematic of a liquid-state sodium metal coin cell with Na₂MnFe(CN) cathode, Celgard 3501 separator, and sodium anode."
            {...lazyImageProps}
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
            {semImages.map((imageName, index) => (
              <img
                className="skills-sem-img"
                src={`${publicUrl}/${imageName}`}
                alt={`SEM ${index + 1}`}
                key={imageName}
                {...lazyImageProps}
              />
            ))}
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
