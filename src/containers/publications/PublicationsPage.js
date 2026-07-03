import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ScrollToTopButton from "../topbutton/Top";
import {StyleProvider} from "../../contexts/StyleContext";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {publicationsInfo} from "../../portfolio";
import "../Main.scss";
import "./Publications.scss";

function renderAuthors(authors) {
  const myName = "Justin Jinchuan Zheng";

  if (!authors.includes(myName)) {
    return authors;
  }

  const parts = authors.split(myName);

  return (
    <>
      {parts[0]}
      <strong>{myName}</strong>
      {parts[1]}
    </>
  );
}

export default function PublicationsPage() {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
      <div
        className={
          isDark ? "dark-mode publications-page" : "publications-page"
        }
      >
        <Header />

        <main className="main publications-main" id="publications">
          <h1 className="publications-page-title">Publications</h1>

          <section className="publications-section">
            <h2 className="publications-section-title">Manuscripts</h2>

            <ol className="publications-list">
              {publicationsInfo.publications.map((publication, index) => (
                <li className="publication-item" key={index}>
                  <p className="publication-citation">
                    <span className="publication-authors">
                      {renderAuthors(publication.authors)}
                    </span>{" "}
                    <span className="publication-title">
                      “{publication.title}.”
                    </span>{" "}
                    <span className="publication-status">
                      Manuscript submitted to
                    </span>{" "}
                    <span className="publication-journal">
                      {publication.journal}
                    </span>
                    <span className="publication-status">
                      , {publication.year}.
                    </span>
                  </p>
                </li>
              ))}
            </ol>
          </section>
        </main>

        <Footer />
        <ScrollToTopButton />
      </div>
    </StyleProvider>
  );
}