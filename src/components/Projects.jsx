import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section className="section-projects">
      <div className="row u-grid-max-width">
        <div className="col-1-of-4">
          <ProjectCard
            img={"https://i.imgur.com/SzsSGDt.jpg"}
            url={"https://asteroids-online.herokuapp.com"}
            title={"Asteroids Online"}
          />
        </div>
        <div className="col-1-of-4">
          <ProjectCard
            img={"https://i.imgur.com/7jG8L5r.png"}
            url={"https://conntext.herokuapp.com"}
            title={"Connected Text"}
          />
        </div>
        <div className="col-1-of-4">
          <ProjectCard
            img={"http://i.imgur.com/MubF8Tb.png"}
            url={"https://qsmart-react.herokuapp.com/"}
            title={"QSmart"}
          />
        </div>
        <div className="col-1-of-4">
          <ProjectCard
            img={"http://i.imgur.com/UUo9URs.png"}
            url={"https://pixel-playground.herokuapp.com/"}
            title={"Pixel Playground"}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;