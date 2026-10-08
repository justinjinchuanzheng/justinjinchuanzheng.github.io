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
  publicationsInfo
} from "../../portfolio";

export default function Header() {
  const {isDark} = useContext(StyleContext);

  const menuLinks = [
    {
      label: "About",
      href: "#/about",
      section: "about",
      visible: skillsSection.display
    },
    {
      label: "Research",
      href: "#/research",
      visible: skillsSection.display
    },
    {
      label: "Publications",
      href: "#/publications",
      visible: publicationsInfo.display
    },
    {
      label: "Courses",
      href: "#/courses",
      visible: achievementSection.display
    },
    {
      label: "Blogs",
      href: "#/blogs",
      visible: blogSection.display
    },
    {
      label: "Talks",
      href: "#/talks",
      visible: talkSection.display
    },
    {
      label: "Resume",
      href: "#/resume",
      visible: resumeSection.display
    },
    {
      label: "Contact",
      href: "#/contact",
      visible: true
    }
  ];

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

  const goToTop = () => {
    if (window.location.hash !== "#/about") {
      window.location.hash = "#/about";

      setTimeout(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
      }, 400);
    } else {
      window.scrollTo({top: 0, behavior: "smooth"});
    }
  };

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <div
          className="logo"
          onClick={goToTop}
          onKeyDown={event => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              goToTop();
            }
          }}
          role="button"
          tabIndex={0}
          style={{cursor: "pointer"}}
        >
          <img
            src={umichLogo}
            alt="University of Michigan logo"
            style={{height: "80px", marginRight: "12px"}}
          />

          <span className="logo-title">
            Justin J. Zheng | Research Portfolio
          </span>
        </div>

        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          aria-label="Toggle navigation menu"
        />

        <label
          className="menu-icon"
          htmlFor="menu-btn"
          aria-label="Navigation menu"
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"} />
        </label>

        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {menuLinks
            .filter(link => link.visible)
            .map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={
                    link.section
                      ? event =>
                          goToRouteAndScroll(event, link.href, link.section)
                      : undefined
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}

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