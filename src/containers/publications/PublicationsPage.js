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
  const myName = "Justin J. Zheng";
  const parts = authors.split(/(Justin J\. Zheng|\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part === myName) {
          return <strong key={index}>{part}</strong>;
        }

        if (part === "*") {
          return <sup key={index}>*</sup>;
        }

        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </>
  );
}

function isAcceptedOrPublished(publication) {
  return /^(accepted|published)\b|^in press$/i.test(publication.status || "");
}

export default function PublicationsPage() {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);

  const publications = publicationsInfo.publications || [];
  const hasEqualContributions = publications.some(publication =>
    publication.authors.includes("*")
  );

  const publicationGroups = [
    {
      title: "Publications",
      entries: publications.filter(isAcceptedOrPublished)
    },
    {
      title: "Manuscripts",
      entries: publications.filter(
        publication => !isAcceptedOrPublished(publication)
      )
    }
  ].filter(group => group.entries.length > 0);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
      <div
        className={isDark ? "dark-mode publications-page" : "publications-page"}
      >
        <Header />

        <main className="main publications-main" id="publications">
          {publicationGroups.map((group, groupIndex) => {
            const Heading = groupIndex === 0 ? "h1" : "h2";

            return (
              <section
                className="publications-section"
                key={group.title}
                style={
                  groupIndex > 0
                    ? {marginTop: "clamp(3.2rem, 5vw, 4rem)"}
                    : undefined
                }
              >
                <Heading
                  className="publications-section-title"
                  style={{
                    marginTop: 0,
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "0.35rem 1rem"
                  }}
                >
                  <span>{group.title}</span>

                  {groupIndex === 0 && hasEqualContributions && (
                    <span
                      className="publication-status"
                      style={{
                        fontSize: "0.65em",
                        fontWeight: 400,
                        lineHeight: 1.4,
                        whiteSpace: "nowrap"
                      }}
                    >
                      * Equal contribution
                    </span>
                  )}
                </Heading>

                <ol
                  className="publications-list"
                  reversed
                  start={group.entries.length}
                >
                  {group.entries.map(publication => (
                    <li className="publication-item" key={publication.title}>
                      <p className="publication-citation">
                        <span className="publication-authors">
                          {renderAuthors(publication.authors)}
                        </span>{" "}
                        <span className="publication-title">
                          “{publication.title}.”
                        </span>{" "}
                        <span className="publication-status">
                          {publication.status}
                        </span>
                        {publication.journal && (
                          <>
                            {" "}
                            <span className="publication-journal">
                              {publication.journal}
                            </span>
                          </>
                        )}
                        <span className="publication-status">
                          , {publication.year}.
                        </span>
                      </p>
                    </li>
                  ))}
                </ol>
              </section>
            );
          })}

          <section className="publications-section acknowledged-section">
            <h2 className="publications-section-title">
              Acknowledged Contributions
            </h2>

            <ol className="publications-list">
              {publicationsInfo.acknowledgedContributions.map(
                (contribution, index) => (
                  <li className="publication-item" key={index}>
                    <div className="acknowledged-publication-entry">
                      <p className="publication-citation">
                        <a
                          className="publication-title publication-link"
                          href={contribution.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          “{contribution.title}.”
                        </a>{" "}
                        <span className="publication-journal">
                          {contribution.journal}
                        </span>
                        <span className="publication-status">, </span>
                        <strong className="publication-volume">
                          {contribution.volume}
                        </strong>
                        <span className="publication-status">
                          ({contribution.issue}), {contribution.articleNumber} (
                          {contribution.year}).
                        </span>
                      </p>

                      <p className="publication-contribution-note">
                        <strong className="contribution-label">
                          Contribution:
                        </strong>{" "}
                        {contribution.contribution}
                      </p>

                      <a
                        className="publication-view-link"
                        href={contribution.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Published article ↗
                      </a>
                    </div>
                  </li>
                )
              )}
            </ol>
          </section>
        </main>

        <Footer />
        <ScrollToTopButton />
      </div>
    </StyleProvider>
  );
}
