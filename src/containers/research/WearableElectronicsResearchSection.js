import React, {useEffect} from "react";
import {Fade} from "react-reveal";
import "../skills/Skills.scss";

export default function WearableElectronicsResearchSection({isDark}) {
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
      <div className="skills-header" id="wearable-electronics-detail">
        <h2
          className={
            isDark
              ? "dark-mode skills-project-title wearable-electronics-title"
              : "skills-project-title wearable-electronics-title"
          }
        >
          Wearable Electronics
        </h2>

        <p className="skills-project-status-top">Research Project (2026)</p>
      </div>

      <Fade duration={300}>
        <div className="skills-video-row">
          <div className="skills-video-block">
            <video
              className="skills-video"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Soft LED-ring prototype demonstrated during handling and activation"
            >
              <source src={`${publicUrl}/Wearables2.mp4`} type="video/mp4" />
            </video>

            <p className="skills-video-caption">
              Soft LED-ring prototype demonstrated during handling and repeated
              activation.
            </p>
          </div>

          <div className="skills-video-block">
            <video
              className="skills-video"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Button-controlled soft LED-ring prototype operating on a benchtop"
            >
              <source src={`${publicUrl}/Wearables.mp4`} type="video/mp4" />
            </video>

            <p className="skills-video-caption">
              Button-controlled LED ring switching between off and illuminated
              states.
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
            style={{textAlign: "left", marginBottom: "3.5rem"}}
          >
            A Self-Contained Soft LED-Ring Wearable with Printed Circuits
          </h3>

          <p
            className={
              isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"
            }
            style={{lineHeight: 1.6}}
          >
            This project explores a soft, self-contained platform for wearable
            sensing and visual feedback. The LED-ring prototype integrates
            printed conductive pathways, surface-mounted LEDs, a compact
            battery, and push-button control in a conformable polymer structure.
            The completed ring shows button-controlled illumination during
            repeated handling without external wiring. I fabricated SIS- and
            EGaIn-based devices, printed circuits on TPU, assembled the
            prototypes, performed UV-epoxy bonding and battery integration, and
            supported mechanical testing.
          </p>

          <div className="skills-video-row" style={{marginTop: "3rem"}}>
            <div className="skills-video-block">
              <video
                className="skills-video"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label="Voltera printer printing an LED-ring circuit prototype"
              >
                <source src={`${publicUrl}/PrintedE.mp4`} type="video/mp4" />
              </video>

              <p className="skills-video-caption">
                Voltera printing an LED-ring circuit prototype.
              </p>
            </div>
          </div>

          <div className="skills-divider" />
        </div>
      </Fade>
    </>
  );
}