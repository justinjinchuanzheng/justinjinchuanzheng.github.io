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
  const parts = authors.split(/(Justin (?:J\.|Jinchuan) Zheng|\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part === "Justin J. Zheng" || part === "Justin Jinchuan Zheng") {
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

function JournalDetails({volume, issue, articleNumber, year}) {
  return (
    <span className="publication-status">
      {", "}
      {volume && <strong className="publication-volume">{volume}</strong>}
      {issue && `(${issue})`}
      {articleNumber && `, ${articleNumber}`}
      {volume ? ` (${year}).` : `${year}.`}
    </span>
  );
}

const citationLinkStyles = `
  .publications-page .journal-citation-link,
  .publications-page .journal-citation-link:visited {
    color: #4f2683;
    text-decoration: none;
  }

  .publications-page.dark-mode .journal-citation-link {
    color: #9ac8ff;
  }

  .publications-page .journal-citation-link:hover,
  .publications-page .journal-citation-link:focus {
    text-decoration: none;
  }

  .publications-page .journal-citation-link:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 3px;
  }
`;

function PublicationCitation({publication, acknowledged = false}) {
  const {
    authors,
    title,
    status,
    journal,
    year,
    volume,
    issue,
    articleNumber,
    url
  } = publication;

  const published = acknowledged || /^published\b/i.test(status || "");
  const publishedJournal = published && journal;
  const titleText = published ? `${title}.` : `“${title}.”`;
  const volumeIssue = issue && volume ? `${volume}(${issue})` : volume;
  const details = [year, volumeIssue, articleNumber].filter(Boolean).join(", ");

  const journalCitation = (
    <>
      <strong>
        <em>{journal}</em>
      </strong>
      {details && `, ${details}`}.
    </>
  );

  return (
    <p className="publication-citation">
      {authors && (
        <span className="publication-authors">{renderAuthors(authors)} </span>
      )}
      {url && !publishedJournal ? (
        <a
          className="publication-title publication-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {titleText}
        </a>
      ) : (
        <span className="publication-title">{titleText}</span>
      )}{" "}
      {publishedJournal ? (
        url ? (
          <a
            className="journal-citation-link"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {journalCitation}
          </a>
        ) : (
          <span className="publication-status">{journalCitation}</span>
        )
      ) : (
        <>
          {!published && (
            <span className="publication-status">
              {status}
              {status && journal && " "}
            </span>
          )}
          {journal && <span className="publication-journal">{journal}</span>}
          <JournalDetails {...publication} />
        </>
      )}
    </p>
  );
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
        <style>{citationLinkStyles}</style>
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
                      <PublicationCitation publication={publication} />
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
              {publicationsInfo.acknowledgedContributions.map(entry => (
                <li className="publication-item" key={entry.title}>
                  <PublicationCitation publication={entry} acknowledged />

                  {entry.contribution && (
                    <p className="publication-contribution-note">
                      <strong className="contribution-label">
                        Contribution:
                      </strong>{" "}
                      {entry.contribution}
                    </p>
                  )}
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
