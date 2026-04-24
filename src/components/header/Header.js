import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import umichLogo from "../../assets/images/umichLogo.png";
import {
  greeting,
  workExperiences,
  skillsSection,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection,
  educationInfo
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);

  // Section visibility flags from portfolio.js
  const viewSkills = skillsSection.display; // About
  const viewResearch = skillsSection.display; // Research
  const viewEducation = educationInfo.display; // Education
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        {/* Logo and title: now NON-clickable */}
        <div className="logo">
          <img
            src={umichLogo}
            alt="University of Michigan logo"
            style={{height: "80px", marginRight: "12px"}}
          />
          <span className="logo-title">
            Justin J. Zheng | Research Portfolio
          </span>
        </div>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>

        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              {/* About – hero section */}
              <a href="#/about">About</a>
            </li>
          )}

          {viewEducation && (
            <li>
              {/* Education section */}
              <a href="#/education">Education</a>
            </li>
          )}

          {viewResearch && (
            <li>
              {/* Research goes to the Skills/Research section */}
              <a href="#/research">Research</a>
            </li>
          )}

          {viewAchievement && (
            <li>
              <a href="#/courses">Courses</a>
            </li>
          )}

          {viewBlog && (
            <li>
              <a href="#/blogs">Blogs</a>
            </li>
          )}

          {viewTalks && (
            <li>
              <a href="#/talks">Talks</a>
            </li>
          )}

          {viewResume && (
            <li>
              <a href="#/resume">Resume</a>
            </li>
          )}

          <li>
            <a href="#/contact">Contact Me</a>
          </li>

          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
