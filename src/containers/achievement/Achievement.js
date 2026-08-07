import React, {useContext} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);

  if (!achievementSection.display) {
    return null;
  }

  return (
    <Fade duration={300}>
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              Graduate-Level Courses
            </h1>

            <p
              className={
                isDark
                  ? "achievement-subtitle achievement-subtitle-dark"
                  : "achievement-subtitle achievement-subtitle-light"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>

          {/* Top cards for each course */}
          <div className="achievement-cards-div">
            {achievementSection.achievementsCards.map((card, i) => {
              return (
                <AchievementCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: card.courseNumber,
                    description: (
                      <>
                        <span className="course-card-title-line">
                          {card.courseTitle}
                        </span>

                        <span className="course-card-credits">
                          {card.credits}
                        </span>

                        {card.grade && (
                          <span className="course-card-grade">
                            {card.grade}
                          </span>
                        )}
                      </>
                    ),
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink
                  }}
                />
              );
            })}
          </div>

          {/* Detailed course descriptions under the cards */}
          <div className="course-detail-list">
            <div className="course-detail">
              <hr className="course-detail-divider" />

              <h2
                className={
                  isDark
                    ? "dark-mode course-detail-title"
                    : "course-detail-title"
                }
              >
                Robotics 560 · Bio-Inspired Robotic Design
              </h2>

              <p
                className={
                  isDark
                    ? "dark-mode course-detail-text"
                    : "course-detail-text"
                }
              >
                Examines original scientific research to extract general
                principles that can be applied to robotics, such as template and
                anchor models, walking, running, swimming, flying, sensing, and
                navigation. Students build functional prototypes and learn about
                the bioinspired design process through case studies that
                highlight health, the environment, and safety.
              </p>

              <hr className="course-detail-divider" />
            </div>

            <div className="course-detail">
              <hr className="course-detail-divider" />

              <h2
                className={
                  isDark
                    ? "dark-mode course-detail-title"
                    : "course-detail-title"
                }
              >
                Robotics 535 · Self Driving Cars: Perception and Control
              </h2>

              <p
                className={
                  isDark
                    ? "dark-mode course-detail-text"
                    : "course-detail-text"
                }
              >
                Self-driving cars are a transformative technology for society.
                This course covers the underlying technologies in perception and
                control. Topics include deep learning, computer vision, sensor
                fusion, localization, trajectory optimization, obstacle
                avoidance, vehicle dynamics. Course includes theoretical
                underpinnings of self-driving car algorithms and practical
                application of the material in hands-on labs.
              </p>

              <hr className="course-detail-divider" />
            </div>

            <div className="course-detail">
              <hr className="course-detail-divider" />

              <h2
                className={
                  isDark
                    ? "dark-mode course-detail-title"
                    : "course-detail-title"
                }
              >
                Robotics 530 · Mobile Robotics: Methods and Algorithms
              </h2>

              <p
                className={
                  isDark
                    ? "dark-mode course-detail-text"
                    : "course-detail-text"
                }
              >
                Theory and application of probabilistic techniques for
                autonomous mobile robotics. This course will present and
                critically examine contemporary algorithms for robot perception
                using a variety of modalities, state estimation, mapping, and
                path planning. Topics include Bayesian filtering; stochastic
                representations of the environment; motion and sensor models for
                mobile robots; algorithms for mapping, localization, planning
                and control in the presence of uncertainty; application to
                autonomous marine, ground, and air vehicles.
              </p>

              <hr className="course-detail-divider" />
            </div>

            <div className="course-detail">
              <hr className="course-detail-divider" />

              <h2
                className={
                  isDark
                    ? "dark-mode course-detail-title"
                    : "course-detail-title"
                }
              >
                BIOMEDE 561 · Biological Micro- and Nanotechnology
              </h2>

              <p
                className={
                  isDark
                    ? "dark-mode course-detail-text"
                    : "course-detail-text"
                }
              >
                Many life processes occur at small size-scales. This course
                covers scaling laws, biological solutions to coping with or
                taking advantage of small size, micro- and nanofabrication
                techniques, biochemistry, and biomedical applications, including
                genomics, proteomics, cell biology, and diagnostics. There is an
                emphasis on microfluidics, surface science, and non-traditional
                fabrication techniques.
              </p>

              <hr className="course-detail-divider" />
            </div>

            <div className="course-detail">
              <hr className="course-detail-divider" />

              <h2
                className={
                  isDark
                    ? "dark-mode course-detail-title"
                    : "course-detail-title"
                }
              >
                MECHENG 570 · Fundamentals of Defects in Materials and
                Applications of Atomistic Modeling
              </h2>

              <p
                className={
                  isDark
                    ? "dark-mode course-detail-text"
                    : "course-detail-text"
                }
              >
                Introduction on the correlation between various types of
                microstructural defects and materials' macroscopic phenomena,
                such as diffusion, deformation, radiation response, phase
                transformations, etc. Fundamentals of atomistic modeling and
                demo applications are also introduced to help students build
                better intuition about defects' structures and behaviors.
              </p>

              <hr className="course-detail-divider" />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}