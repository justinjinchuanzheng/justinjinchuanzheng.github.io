import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ScrollToTopButton from "../topbutton/Top";
import {StyleProvider} from "../../contexts/StyleContext";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import "../Main.scss";
import "./ResearchPage.scss";

export default function ResearchPage() {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);
  const publicUrl = process.env.PUBLIC_URL || "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
      <div className={isDark ? "dark-mode research-page" : "research-page"}>
        <Header />

        <main className="main research-main" id="research">
          <div className="research-project-list">
            <article className="research-project" id="liquid-metal-actuators">
              <div className="research-project-media">
                <video
                  key="dragonfly2-video"
                  className="research-project-video"
                  src={`${publicUrl}/Dragonfly2.mp4`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="Dragonfly-inspired liquid-metal actuator operating in real time"
                />
              </div>

              <div className="research-project-content">
                <h2 className="research-project-title">
                  <Link
                    className="research-project-title-link"
                    to="/research/soft-robotics"
                  >
                    Soft Robotics
                  </Link>
                </h2>

                <p className="research-project-description">
                  My soft-robotics research focuses on liquid-metal actuators
                  for fast, compliant, and adaptive motion. Across projects led
                  by Dr. Jiahe Liao and Marta Calisto Freitas, I prepared
                  hydrogel and SIS materials, conducted KOH and EGaIn
                  experiments, and used computer vision to quantify actuator
                  deformation and movement.
                </p>
              </div>
            </article>

            <article className="research-project" id="wearable-electronics">
              <div className="research-project-media">
                <video
                  key="wearables-video"
                  className="research-project-video"
                  src={`${publicUrl}/Wearables.mp4`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="Flexible wearable-electronics device demonstration"
                />
              </div>

              <div className="research-project-content">
                <h2 className="research-project-title">
                  <Link
                    className="research-project-title-link"
                    to="/research/wearable-electronics"
                  >
                    Wearable Electronics
                  </Link>
                </h2>

                <p className="research-project-description">
                  My wearable-electronics research focuses on soft, conformable
                  devices for physiological sensing and healthcare monitoring.
                  In collaboration with Daniel Ranke, I fabricated SIS- and
                  EGaIn-based devices, printed circuits on TPU, assembled
                  LED-ring prototypes, and performed UV-epoxy bonding, battery
                  integration, and mechanical testing.
                </p>
              </div>
            </article>

            <article className="research-project" id="liquid-state-batteries">
              <div className="research-project-media">
                <img
                  className="research-project-image"
                  src={`${publicUrl}/SEM13.png`}
                  alt="SEM micrograph of a dry-processed sodium-ion composite cathode"
                />
              </div>

              <div className="research-project-content">
                <h2 className="research-project-title">
                  <Link
                    className="research-project-title-link"
                    to="/research/next-generation-batteries"
                  >
                    Next-Generation Batteries
                  </Link>
                </h2>

                <p className="research-project-description">
                  My battery research spans liquid-electrolyte sodium-ion cells
                  and anode-free solid-state batteries. I fabricated
                  high-loading, PTFE-bound cathodes through solvent-free dry
                  processing and hot-roll pressing, evaluated their
                  microstructure and electrochemical performance, and
                  contributed to solid-state research involving LPSC argyrodite
                  sulfide electrolytes.
                </p>
              </div>
            </article>
          </div>
        </main>

        <Footer />
        <ScrollToTopButton />
      </div>
    </StyleProvider>
  );
}