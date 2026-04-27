import React from "react";
import Header from "../../components/header/Header";
import Contact from "./Contact";
import Footer from "../../components/footer/Footer";
import ScrollToTopButton from "../topbutton/Top";
import {StyleProvider} from "../../contexts/StyleContext";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import "../Main.scss";
import "./Contact.scss";

export default function ContactPage() {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <div className="contact-page-wrapper">
          <Contact />
        </div>
        <Footer />
        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
}
