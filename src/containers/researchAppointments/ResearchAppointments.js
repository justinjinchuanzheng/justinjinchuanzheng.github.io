import React from "react";
import "../education/Education.scss";
import "./ResearchAppointments.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {researchAppointmentsInfo} from "../../portfolio";

export default function ResearchAppointments() {
  if (!researchAppointmentsInfo.display) {
    return null;
  }

  return (
    <div
      className="education-section research-appointments-section"
      id="research-appointments"
    >
      <h1 className="education-heading">Research Appointments</h1>

      <div className="education-card-container">
        {researchAppointmentsInfo.schools.map((school, index) => {
          const linkedSchool = {
            ...school,
            descBullets: (school.descBullets || []).map((bullet, bulletIndex) => {
              if (bullet === "Faculty Host: Prof. Carmel Majidi") {
                return (
                  <React.Fragment key={bulletIndex}>
                    Faculty Host:{" "}
                    <a
                      href="https://www.meche.engineering.cmu.edu/directory/bios/majidi-carmel.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="education-bullet-link"
                      title="View Prof. Carmel Majidi's CMU profile"
                      aria-label="Prof. Carmel Majidi — CMU profile (opens in a new tab)"
                      style={{
                        textDecoration: "underline",
                        textUnderlineOffset: "4px",
                        textDecorationThickness: "1px"
                      }}
                    >
                      Prof. Carmel Majidi
                      <span
                        className="education-link-arrow"
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </a>
                  </React.Fragment>
                );
              }

              return bullet;
            })
          };

          return <EducationCard key={index} school={linkedSchool} />;
        })}
      </div>
    </div>
  );
}