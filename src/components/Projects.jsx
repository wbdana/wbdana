import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section className="projects">
      <div className="row">
        <div className="col-1-of-4">
          <ProjectCard
            title={"Front 1"}
            back={"Back 1"}
          />
        </div>
        <div className="col-1-of-4">
          <ProjectCard
              title={"Front 2"}
              back={"Back 2"}
          />
        </div>
        <div className="col-1-of-4">
          <ProjectCard
              title={"Front 3"}
              back={"Back 3"}
          />
        </div>
        <div className="col-1-of-4">
          <ProjectCard
              title={"Front 4"}
              back={"Will do Mom"}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;