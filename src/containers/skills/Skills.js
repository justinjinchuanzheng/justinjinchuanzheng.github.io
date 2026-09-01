import React, {useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import {Fade} from "react-reveal";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import "./Skills.scss";
import "./ResearchHighlights.scss";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  const publicUrl = process.env.PUBLIC_URL || "";

  const researchHighlights = [
    {
      title: "Wearable Electronics",
      video: "Wearables2.mp4",
      route: "/research/wearable-electronics",
      ariaLabel: "Soft wearable LED-ring prototype operating during handling"
    },
    {
      title: "Dragonfly-Inspired Millirobot",
      video: "Dragonfly.mp4",
      route: "/research/soft-robotics",
      ariaLabel:
        "Dragonfly-inspired millirobot driven by a liquid-metal actuator"
    },
    {
      title: "Liquid-Metal Artificial Muscle",
      video: "Actuator.mp4",
      route: "/research/soft-robotics",
      ariaLabel:
        "Axisymmetric liquid-metal hydrogel muscle operating in real time"
    }
  ];

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
    <section
      className={
        isDark
          ? "dark-mode main research-highlights"
          : "main research-highlights"
      }
      id="skills"
    >
      <div className="research-highlights-header">
        <h1 className="research-highlights-heading">Research Highlights</h1>
      </div>

      <Fade duration={300}>
        <div>
          <div className="research-highlights-grid">
            {researchHighlights.map(highlight => (
              <Link
                className="research-highlight-card"
                to={highlight.route}
                aria-label={`View ${highlight.title} research project`}
                key={highlight.title}
              >
                <div className="research-highlight-media">
                  <video
                    className="research-highlight-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    aria-label={highlight.ariaLabel}
                  >
                    <source
                      src={`${publicUrl}/${highlight.video}`}
                      type="video/mp4"
                    />
                  </video>
                </div>

                <h2 className="research-highlight-title">{highlight.title}</h2>
              </Link>
            ))}
          </div>

          <div className="research-highlights-footer">
            <Link className="research-highlights-link" to="/research">
              View All Research
            </Link>
          </div>
        </div>
      </Fade>
    </section>
  );
}