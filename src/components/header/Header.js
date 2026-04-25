import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import umichLogo from "../../assets/images/umichLogo.png";
import {
  skillsSection,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection,
  educationInfo
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);

  const viewSkills = skillsSection.display;
  const viewResearch = skillsSection.display;
  const viewEducation = educationInfo.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  const scrollToSection = (sectionId, delay = 0) => {
    setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }, delay);
  };

  const goToRouteAndScroll = (event, route, sectionId) => {
    event.preventDefault();

    if (window.location.hash !== route) {
      window.location.hash = route;
      scrollToSection(sectionId, 400);
    } else {
      scrollToSection(sectionId, 50);
    }
  };

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        {/* Logo and title: non-clickable */}
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
              <a href="#/about">About</a>
            </li>
          )}

          {viewEducation && (
            <li>
              <a
                href="#/education"
                onClick={event =>
                  goToRouteAndScroll(event, "#/education", "education")
                }
              >
                Education
              </a>
            </li>
          )}

          {viewResearch && (
            <li className="menu-dropdown">
              <a
                href="#/research"
                onClick={event =>
                  goToRouteAndScroll(event, "#/research", "skills")
                }
              >
                Research <span className="menu-caret">▾</span>
              </a>

              <ul className={isDark ? "dark-menu submenu" : "submenu"}>
                <li>
                  <a
                    href="#/research"
                    onClick={event =>
                      goToRouteAndScroll(
                        event,
                        "#/research",
                        "liquid-metal-actuators"
                      )
                    }
                  >
                    Liquid Metal Actuators
                  </a>
                </li>

                <li>
                  <a
                    href="#/research"
                    onClick={event =>
                      goToRouteAndScroll(
                        event,
                        "#/research",
                        "liquid-state-batteries"
                      )
                    }
                  >
                    Liquid State Batteries
                  </a>
                </li>
              </ul>
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