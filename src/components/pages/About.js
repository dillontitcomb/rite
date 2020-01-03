import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="container my-2">
      <p className="x-large">About RITE Editions</p>
      <p>
        Steven Leiber and Robin Wright founded RITE Editions in 2007 in San
        Francisco with the intent of commissioning artists to make limited
        edition publications.
      </p>
      <br />
      <p>
        Since its inception, RITE Editions has published 16 editions. The
        inaugural edition was Sound of Music, A Record of the Sound of Its Own
        Making by Jonathan Monk, an LP recording referencing Robert Morris’s Box
        with the Sound of Its Own Making (1961). Subsequent multiples include
        The White Album by Mungo Thomson (2009), Travis Meinolf’s Social Fabric
        Berlin Mitte (2010), and Paul Sietsema’s At the hour of tea (2014). This
        year, three editions will be published: Davina Semo’s Letter Opener,
        2019, a monograph entitled Steven Leiber Catalogs, and an edition by
        Carissa Potter.
      </p>
      <br />
      <p>
        Every RITE Editions is produced in close collaboration with each
        respective artist, and is distinguished by its conceptual nature and
        high production values. Containers, packaging, and mailers have also
        been developed in great detail in collaboration with the artists. A
        variety of mediums are explored in RITE Editions publications. And
        notably, all editions are intimate and interactive and necessitate close
        examination.
      </p>
      <br />
      <p>
        Steven Leiber passed away in 2012. RITE Editions published Artists &
        Editions in 2013 as a tribute to Steven and his work as a dealer,
        collector, and teacher. Fourteen artists, many of whom engaged in an
        ongoing dialogue with Steven during his lifetime, contributed
        extraordinary works to the edition. All proceeds from the sale of this
        boxed edition will benefit the Steven Leiber Scholarship fund at
        California College of Arts in San Francisco.
      </p>
      <br />
      <p className="lead">
        RITE Editions are represented in the following public collections:
      </p>
      <ul className="about-collections-list my-1">
        <li>MoMa, NY</li>
        <li>SFMOMA, San Francisco</li>
        <li>Fogg Art Museum, Harvard, Cambridge</li>
        <li>National Gallery of Canada, Ottowa</li>
        <li>Walker Art Center, Minneapolis</li>
        <li>Henry Art Gallery, Seattle</li>
        <li>Seattle Art Museum</li>
        <li>ArtNow International</li>
      </ul>
      <p className="lead">Acknowledgements</p>
      <p className="my-1">
        All editions photography is by <strong>Ian Reeves</strong>
      </p>
      <p className="my-1">
        Website built and maintained by <strong>Dillon Titcomb</strong>
      </p>
    </div>
  );
};

export default About;
