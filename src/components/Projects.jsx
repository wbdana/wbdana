import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      img: "https://i.imgur.com/VsmiDLI.png",
      title: "OpenGraph.io Python",
      url: "https://pypi.org/project/opengraphio/",
      code: "https://github.com/wbdana/opengraph-io-python",
      demoText: "Package",
    },
    {
      img: "https://i.imgur.com/atLXEqN.png",
      title: "OpenGraph.io Ruby",
      url: "https://rubygems.org/gems/opengraph-io",
      code: "https://github.com/wbdana/opengraph-io-ruby",
      demoText: "Gem",
    },
    {
      img: "https://i.imgur.com/SzsSGDt.jpg",
      title: "Asteroids Online",
      url: "https://asteroids-online.herokuapp.com",
      code: "https://github.com/wbdana/astro",
    },
    {
      img: "https://i.imgur.com/7jG8L5r.png",
      title: "Connected Text",
      url: "https://conntext.herokuapp.com",
      code: "https://github.com/wbdana/conntext",
      codeTwo: "https://github.com/wbdana/conntext-api",
    },
    {
      img: "http://i.imgur.com/MubF8Tb.png",
      title: "QSmart",
      url: "https://qsmart-react.herokuapp.com",
      code: "https://github.com/davidtom/qsmart-react",
      codeTwo: "https://github.com/davidtom/qsmart-api",
    },
    {
      img: "http://i.imgur.com/UUo9URs.png",
      title: "Pixel Playground",
      url: "https://pixel-playground.herokuapp.com/",
      code: "https://github.com/cwooley/pixel-playground",
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
            <div className="fl w-100 w-25-ns pa2" key={index}>
              <ProjectCard
                code={project.code}
                codeTwo={project.codeTwo}
                demoText={project.demoText}
                img={project.img}
                position={(index + 1) % 4}
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