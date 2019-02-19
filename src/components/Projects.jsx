import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      img: "https://i.imgur.com/SzsSGDt.jpg",
      position: 1,
      title: "Asteroids Online",
      url: "https://asteroids-online.herokuapp.com",
    },
    {
      img: "https://i.imgur.com/7jG8L5r.png",
      position: 2,
      title: "Connected Text",
      url: "https://conntext.herokuapp.com",
    },
    {
      img: "http://i.imgur.com/MubF8Tb.png",
      position: 3,
      title: "QSmart",
      url: "https://qsmart-react.herokuapp.com",
    },
    {
      img: "http://i.imgur.com/UUo9URs.png",
      position: 4,
      title: "Pixel Playground",
      url: "https://pixel-playground.herokuapp.com/",
    },
  ];

  return (
    <section className="section-projects">
      <h2 className="header-projects">
        Projects
      </h2>
      <div className="projects mw9 center ph3-ns">
        <div className="cf ph2-ns">
        {
          projects.map((project, index) => (
            <div className="fl w-100 w-25-ns pa2">
              <ProjectCard
                key={index}
                img={project.img}
                position={project.position}
                title={project.title}
                url={project.url}
              />
            </div>
          ))
        }
        </div>
      </div>
    </section>
  );
};

export default Projects;