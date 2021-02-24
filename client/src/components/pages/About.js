import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="about">
          <p className="x-large text-weight-light text-center my-3">
            ABOUT RITE EDITIONS
          </p>
          <p>
            Steven Leiber and Robin Wright founded RITE Editions in 2007 in San
            Francisco with the intent of commissioning artists to make limited
            edition publications.
          </p>
          <br />
          <p>
            Since its inception, RITE Editions has published 24 editions. The
            inaugural edition was Sound of Music, A Record of the Sound of Its
            Own Making by Jonathan Monk, an LP recording referencing Robert
            Morris’s Box with the Sound of Its Own Making (1961). Subsequent
            multiples include The White Album by Mungo Thomson (2009), Paul
            Sietsema’s At the hour of tea (2014) Margo Wolowiec’s Blanket (2017)
            and Steven Leiber Catalogs (2019). This year, in addition to
            producing limited edition face masks designed by Jeffry Mitchell and
            Leah Rosenberg, RE will publish three books: Rumi Koshino’s Solo
            Walks, First 100 Days (Fall 2020), Laeh Glenn MUM, (September 2020)
            and Ant Farm, Media Burn and the Making of an Image (October 2020).
          </p>
          <br />
          <p>
            Every RITE Editions is produced in close collaboration with each
            respective artist, and is distinguished by its conceptual nature and
            high production values. Containers, packaging, and mailers have also
            been developed in great detail in collaboration with the artists. A
            variety of mediums are explored in RITE Editions publications. And
            notably, all editions are intimate and interactive and necessitate
            close examination.
          </p>
          <br />
          <p>
            Steven Leiber passed away in 2012. RITE Editions published Artists &
            Editions in 2013 as a tribute to Steven and his work as a dealer,
            collector, and teacher. Fourteen artists, many of whom engaged in an
            ongoing dialogue with Steven during his lifetime, contributed
            extraordinary works to the edition. (For more information, see the
            publication in the RE EDITIONS section.)
          </p>
          <br />
          <p className="lead">
            RITE Editions are represented in the following public collections:
          </p>
          <ul className="about-collections-list my-1">
            <li>MoMa, NY</li>
            <li>SFMOMA, San Francisco</li>
            <li>Fogg Art Museum, Harvard, Cambridge</li>
            <li>National Gallery of Canada, Ottawa</li>
            <li>Walker Art Center, Minneapolis</li>
            <li>Henry Art Gallery, Seattle</li>
            <li>Seattle Art Museum</li>
            <li>ArtNow International</li>
            <li>Berkeley Art Museum and Pacific Film Archive</li>
            <li>Clark Art Institute, Williams College</li>
          </ul>
          <p className="lead">Acknowledgements</p>
          <p>
            All editions photography is by <strong>Ian Reeves</strong>
          </p>
          <p>
            Website built and maintained by <strong>Dillon Titcomb</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
