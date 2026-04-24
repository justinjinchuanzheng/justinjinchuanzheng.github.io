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
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <Achievement />
        <Footer />
        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
}