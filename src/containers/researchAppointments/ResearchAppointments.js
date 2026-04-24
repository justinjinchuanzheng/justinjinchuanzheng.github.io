import React from "react";
import "../education/Education.scss";
import "./ResearchAppointments.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import { researchAppointmentsInfo } from "../../portfolio";

export default function ResearchAppointments() {
  if (researchAppointmentsInfo.display) {
    return (
      <div
        className="education-section research-appointments-section"
        id="research-appointments"
      >
        <h1 className="education-heading">Research Appointments</h1>
        <div className="education-card-container">
          {researchAppointmentsInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
