import React from 'react';
import ProjectCard from './ProjectCard';
import OpenPyImg from '../assets/sq_open_py.png';
import OpenRbImg from '../assets/sq_open_rb.png';
import AstroImg from '../assets/sq_astro.png';
import ConntextImg from '../assets/sq_conntext.png';
import QSmartImg from '../assets/sq_qsmart.png';
import PixelImg from '../assets/sq_pixel.png';

const Projects = () => {
  const projects = [
    {
      img: OpenPyImg,
      title: "OpenGraph.io Python",
      url: "https://pypi.org/project/opengraphio/",
      code: "https://github.com/wbdana/opengraph-io-python",
      demoText: "Package",
      description: () => (
        <div>
          <li>Python 2.7</li>
          <li>Python 3.7</li>
          <li>Travis CI</li>
          <li>Coveralls</li>
          <li>OpenGraph.io</li>
        </div>
      ),
    },
    {
      img: OpenRbImg,
      title: "OpenGraph.io Ruby",
      url: "https://rubygems.org/gems/opengraph-io",
      code: "https://github.com/wbdana/opengraph-io-ruby",
      demoText: "Gem",
      description: () => (
        <div>
          <li>Ruby 2.4</li>
          <li>RSpec</li>
          <li>Travis CI</li>
          <li>Coveralls</li>
          <li>OpenGraph.io</li>
        </div>
      ),
    },
    {
      img: AstroImg,
      title: "Asteroids Online",
      url: "https://asteroids-online.herokuapp.com",
      code: "https://github.com/wbdana/astro",
      description: () => (
        <div>
          <li>React</li>
          <li>Redux</li>
          <li>Redux Thunk</li>
        </div>
      ),
    },
    {
      img: ConntextImg,
      title: "Connected Text",
      url: "https://conntext.herokuapp.com",
      code: "https://github.com/wbdana/conntext",
      codeTwo: "https://github.com/wbdana/conntext-api",
      description: () => (
        <div>
          <li>Ruby on Rails</li>
          <li>Rails Action Cable</li>
          <li>React</li>
          <li>React Router</li>
          <li>Postgres</li>
          <li>GitHub API</li>
        </div>
      ),
    },
    {
      img: QSmartImg,
      title: "QSmart",
      url: "https://qsmart-react.herokuapp.com",
      code: "https://github.com/davidtom/qsmart-react",
      codeTwo: "https://github.com/davidtom/qsmart-api",
      description: () => (
        <div>
          <li>Ruby on Rails</li>
          <li>Rails Action Cable</li>
          <li>Redis</li>
          <li>Postgres</li>
          <li>React</li>
          <li>Twilio API</li>
        </div>
      ),
    },
    {
      img: PixelImg,
      title: "Pixel Playground",
      url: "https://pixel-playground.herokuapp.com/",
      code: "https://github.com/cwooley/pixel-playground",
      description: () => (
        <div>
          <li>JavaScript</li>
          <li>Ruby on Rails</li>
          <li>Rails Action Cable</li>
          <li>HTML5 Canvas</li>
        </div>
      ),
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
                description={project.description}
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