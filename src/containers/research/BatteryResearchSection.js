import React from "react";
import {Fade} from "react-reveal";
import "../skills/Skills.scss";

export default function BatteryResearchSection({isDark}) {
  const publicUrl = process.env.PUBLIC_URL || "";

  return (
    <Fade duration={300}>
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

      <div className="skills-battery-image">
        <img
          className="skills-battery-cell-img"
          src={`${publicUrl}/cell.png`}
          alt="Schematic of a liquid-state sodium metal coin cell with Na₂MnFe(CN) cathode, Celgard 3501 separator, and sodium anode."
        />

        <p className="skills-battery-image-caption">
          Schematic of a liquid-state sodium metal coin cell with Na₂MnFe(CN)
          cathode, Celgard 3501 separator, and sodium anode.
        </p>
      </div>

      <div className="skills-subtitle-wrapper">
        <h3
          className={
            isDark ? "dark-mode skills-project-title" : "skills-project-title"
          }
        >
          Microstructure (SEM Gallery)
        </h3>
      </div>

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
  );
}