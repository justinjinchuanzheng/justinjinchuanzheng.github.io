import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ResearchAppointments from "./researchAppointments/ResearchAppointments";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  // Always start in dark mode for first-time users
  const location = useLocation();
  const [isDark, setIsDark] = useLocalStorage("isDark", true);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  useEffect(() => {
  if (isShowingSplashAnimation && splashScreen.enabled) {
    return;
  }

  const sectionMap = {
    "/about": "about",
    "/education": "education",
    "/research": "skills",
    "/blogs": "blogs",
    "/talks": "talks",
    "/resume": "resume",
    "/contact": "contact"
  };

  const sectionId = sectionMap[location.pathname];

  if (sectionId) {
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({behavior: "smooth", block: "start"});
      }
    }, 100);
  }
}, [location.pathname, isShowingSplashAnimation]);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <Education />
            <ResearchAppointments />
            <Skills />
            <StackProgress />
            <WorkExperience />
            <Projects />
            <StartupProject />
            <Blogs />
            <Talks />
            <Twitter />
            <Podcast />
            <Profile />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
