import React from "react";

import Header from "../../components/header/Header";
import Achievement from "../achievement/Achievement";
import Footer from "../../components/footer/Footer";
import ScrollToTopButton from "../topbutton/Top";

import {StyleProvider} from "../../contexts/StyleContext";
import {useLocalStorage} from "../../hooks/useLocalStorage";

import "../Main.scss";
import "./Courses.scss";

export default function Courses() {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode courses-page" : "courses-page"}>
      <StyleProvider value={{isDark, changeTheme}}>
        <Header />

        <section
          className="courses-teaching-section"
          id="teaching-experience"
        >
          <h1 className="courses-teaching-heading">
            Teaching Experience
          </h1>

          <div className="teaching-entry">
            <div className="teaching-logo-container">
              <img
                src={require("../../assets/images/umichLogo.png")}
                alt="University of Michigan"
                className="teaching-logo"
              />
            </div>

            <div className="teaching-content">
              <h2 className="teaching-role">
                Instructional Aide,{" "}
                <a
                  href="https://robotics.umich.edu/academics/courses/course-offerings/rob-204-winter-2022/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="teaching-course-link"
                  aria-label="View the official Robotics 204 course page"
                >
                  Robotics 204: Introduction to Human-Robot Systems
                  <span className="teaching-link-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </h2>

              <p className="teaching-meta">
                <span className="teaching-date">Fall 2026</span>
              </p>

              <ul className="teaching-responsibilities">
                <li>
                  Hold office hours and provide instructional support to students
                </li>
                <li>
                  Assist with hands-on robotics laboratory sessions
                </li>
                <li>
                  Grade coursework and contribute to quiz and exam development
                </li>
              </ul>
            </div>
          </div>

          <div className="teaching-divider" />
        </section>

        <Achievement />
        <Footer />
        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
}