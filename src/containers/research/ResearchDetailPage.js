import React, {useEffect} from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {StyleProvider} from "../../contexts/StyleContext";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import BatteryResearchSection from "./BatteryResearchSection";
import SoftRoboticsResearchSection from "./SoftRoboticsResearchSection";
import "../Main.scss";
import "./ResearchDetailPage.scss";

export default function ResearchDetailPage({title, pageId}) {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);

  const isBatteryPage = pageId === "next-generation-batteries";
  const isSoftRoboticsPage = pageId === "soft-robotics";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageId]);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
      <div
        className={
          isDark ? "dark-mode research-detail-page" : "research-detail-page"
        }
      >
        <Header />

        {isBatteryPage ? (
          <main className={isDark ? "dark-mode main" : "main"} id="skills">
            <BatteryResearchSection isDark={isDark} />
          </main>
        ) : isSoftRoboticsPage ? (
          <main className={isDark ? "dark-mode main" : "main"} id="skills">
            <SoftRoboticsResearchSection isDark={isDark} />
          </main>
        ) : (
          <main className="main research-detail-main" id={pageId}>
            <h1 className="research-detail-title">{title}</h1>
          </main>
        )}

        <Footer />
      </div>
    </StyleProvider>
  );
}