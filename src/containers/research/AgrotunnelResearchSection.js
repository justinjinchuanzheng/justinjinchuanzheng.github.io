import React from "react";
import {Link} from "react-router-dom";
import {Fade} from "react-reveal";
import appropediaLogo from "../../assets/images/AppropediaLogo.png";
import "./AgrotunnelResearchSection.scss";

const solarGallery = [
  {
    src: "JustinandSolar2.jpg",
    alt: "Justin Zheng working with an agrivoltaic photovoltaic test array",
    caption: "Working with the solar array",
    featured: true
  },
  {
    src: "JustinandSolar.jpg",
    alt: "Justin Zheng beside semitransparent photovoltaic modules",
    caption: "Semitransparent solar panels"
  },
  {
    src: "SolarPanelS.jpg",
    alt: "Outdoor agrivoltaic test structures",
    caption: "Outdoor test structures"
  },
  {
    src: "SolarPanel.jpg",
    alt: "Wide view of the outdoor agrivoltaic research site",
    caption: "A wider view of the site"
  },
  {
    src: "SolarPanelB.jpg",
    alt: "Colored semitransparent solar panels on a wooden structure",
    caption: "Colored semitransparent panels"
  }
];

const cropGallery = [
  {
    src: "Lettuce2.png",
    alt: "Dense lettuce growth on a vertical wall inside the Agrotunnel",
    caption: "Lettuce on the growing wall",
    featured: true
  },
  {
    src: "Pollination.png",
    alt: "Pollinating indoor strawberry flowers by hand",
    caption: "Pollinating strawberry flowers by hand"
  },
  {
    src: "Lettuce.png",
    alt: "Vertical lettuce wall beside hanging grow lights",
    caption: "Lettuce under grow lights"
  },
  {
    src: "Kale.jpg",
    alt: "Kale plants growing on a vertical wall",
    caption: "Kale on the growing wall"
  },
  {
    src: "Strawberry.jpg",
    alt: "Strawberry plants growing inside the Agrotunnel",
    caption: "Strawberries in the Agrotunnel"
  }
];

function PhotoGallery({images, publicUrl}) {
  return (
    <div className="agrotunnel-gallery">
      {images.map(image => (
        <figure
          className={
            image.featured
              ? "agrotunnel-photo-card agrotunnel-photo-card-featured"
              : "agrotunnel-photo-card"
          }
          key={image.src}
        >
          <img
            className="agrotunnel-photo"
            src={`${publicUrl}/agrotunnel/${image.src}`}
            alt={image.alt}
            loading="lazy"
            decoding="async"
          />
          <figcaption className="agrotunnel-photo-caption">
            {image.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function AgrotunnelResearchSection() {
  const publicUrl = process.env.PUBLIC_URL || "";

  return (
    <section className="agrotunnel-research" id="agrivoltaic-agrotunnel">
      <header className="agrotunnel-header">
        <p className="agrotunnel-eyebrow">AI-Enabled Sustainable Agriculture</p>

        <h1 className="agrotunnel-title">
          <a
            className="agrotunnel-title-link"
            href="https://www.appropedia.org/Agrivoltaic_agrotunnel"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agrivoltaic Agrotunnel{"\u00a0"}
            <span aria-hidden="true">↗</span>
          </a>
        </h1>

        <div className="agrotunnel-meta">
          <p className="agrotunnel-affiliation">
            <a
              className="agrotunnel-affiliation-link"
              href="https://www.appropedia.org/FAST"
              target="_blank"
              rel="noopener noreferrer"
            >
              Free Appropriate Sustainable Technology (FAST) Research Group{"\u00a0"}
              <span className="agrotunnel-external-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </p>

          <p className="agrotunnel-status">
            Summer 2024 in Canada · Ongoing remote collaboration
          </p>

          <p className="agrotunnel-photo-date">Photos from summer 2024</p>

          <p className="agrotunnel-profile">
            <a
              className="agrotunnel-profile-link"
              href="https://www.appropedia.org/User:Justin_Jinchuan_Zheng"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="agrotunnel-profile-logo"
                src={appropediaLogo}
                alt=""
                width={20}
                height={20}
              />
              <span>My Appropedia profile</span>
              <span className="agrotunnel-external-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </p>
        </div>
      </header>

      <Fade duration={300}>
        <div className="agrotunnel-introduction">
          <p className="agrotunnel-copy">
            In summer 2024, I conducted in-person research in Canada with the{" "}
            <a
              className="agrotunnel-inline-link"
              href="https://www.appropedia.org/FAST"
              target="_blank"
              rel="noopener noreferrer"
            >
              Free Appropriate Sustainable Technology (FAST) Research Group{"\u00a0"}
              <span className="agrotunnel-external-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            , led by{" "}
            <a
              className="agrotunnel-inline-link"
              href="https://en.wikipedia.org/wiki/Joshua_Pearce"
              target="_blank"
              rel="noopener noreferrer"
            >
              Professor Joshua M. Pearce{"\u00a0"}
              <span className="agrotunnel-external-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            . I worked on the Agrivoltaic Agrotunnel project, which combines
            solar energy with controlled-environment crop production.
          </p>

          <p className="agrotunnel-copy">
            I formed and coordinated a University of Michigan team that includes
            fellow senior Robotics undergraduates, and I now lead our remote
            research collaboration with Professor Pearce’s team. His team
            provides all study data, including images and plant measurements.
            Our team develops computer vision methods to track plant growth and
            investigate how those measurements relate to harvest yield.
          </p>
        </div>

        <div className="agrotunnel-divider" />

        <section className="agrotunnel-block">
          <div className="agrotunnel-section-heading">
            <p className="agrotunnel-section-number">01</p>
            <div>
              <h2 className="agrotunnel-subtitle">
                Agrivoltaic Infrastructure
              </h2>
              <p className="agrotunnel-copy">
                The outdoor arrays use semitransparent solar panels to generate
                electricity while allowing some sunlight through for crop
                studies. Different panels let us compare the light available
                for plant growth.
              </p>
            </div>
          </div>

          <PhotoGallery images={solarGallery} publicUrl={publicUrl} />
        </section>

        <div className="agrotunnel-divider" />

        <section className="agrotunnel-block">
          <div className="agrotunnel-section-heading">
            <p className="agrotunnel-section-number">02</p>
            <div>
              <h2 className="agrotunnel-subtitle">
                Controlled-Environment Crop Studies
              </h2>
              <p className="agrotunnel-copy">
                Inside the Agrotunnel, lettuce, kale, and strawberries grow on
                vertical hydroponic-aeroponic walls with controlled lighting and
                irrigation. The photos also show strawberry flowers being
                pollinated by hand.
              </p>
            </div>
          </div>

          <PhotoGallery images={cropGallery} publicUrl={publicUrl} />
        </section>

        <div className="agrotunnel-divider" />

        <section className="agrotunnel-block agrotunnel-vision-block">
          <div className="agrotunnel-section-heading">
            <p className="agrotunnel-section-number">03</p>
            <div>
              <h2 className="agrotunnel-subtitle">
                Computer Vision for Plant Phenotyping
              </h2>
              <p className="agrotunnel-copy">
                Our lettuce study uses images to measure plant height, leaf
                count, side-view area, and canopy area. We are investigating
                whether these measurements can help predict harvest mass. In
                our nasturtium study, we track leaves, flowers, and seed pods
                through the full growth cycle, from seed to maturity.
              </p>
            </div>
          </div>

          <div className="agrotunnel-publications">
            <article className="agrotunnel-publication-card">
              <p className="agrotunnel-publication-label">Lettuce study</p>
              <h3>
                Wall-Scale Computer Vision for Plant Phenotyping: Full-Cycle
                Lettuce Leaf Counting and Yield Prediction in Vertical
                Agrivoltaics
              </h3>
              <p className="agrotunnel-publication-status">
                Manuscript in preparation, 2026
              </p>
            </article>

            <article className="agrotunnel-publication-card">
              <p className="agrotunnel-publication-label">Nasturtium study</p>
              <h3>
                Longitudinal Plant Phenotyping with Computer Vision:
                Seed-to-Maturity Leaf and Fruit Counting in Nasturtium under
                Vertical Agrivoltaics
              </h3>
              <p className="agrotunnel-publication-status">
                Manuscript in preparation, 2026
              </p>
            </article>
          </div>

          <div className="agrotunnel-links">
            <a
              className="agrotunnel-link"
              href="https://www.appropedia.org/Agrivoltaic_agrotunnel"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agrotunnel on Appropedia
              <span aria-hidden="true">↗</span>
            </a>

            <Link className="agrotunnel-link" to="/publications">
              Publications
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </Fade>
    </section>
  );
}