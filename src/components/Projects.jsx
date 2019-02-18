import React from 'react';
import Footer from './Footer';
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
      <div className="row u-grid-max-width">
        {
          projects.map((project, index) => (
            <div className="col-1-of-4 resp">
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
        {/*<div className="col-1-of-4">*/}
          {/*<ProjectCard*/}
            {/*img={"https://i.imgur.com/SzsSGDt.jpg"}*/}
            {/*position={1}*/}
            {/*title={"Asteroids Online"}*/}
            {/*url={"https://asteroids-online.herokuapp.com"}*/}
          {/*/>*/}
        {/*</div>*/}
        {/*<div className="col-1-of-4">*/}
          {/*<ProjectCard*/}
            {/*img={"https://i.imgur.com/7jG8L5r.png"}*/}
            {/*position={2}*/}
            {/*title={"Connected Text"}*/}
            {/*url={"https://conntext.herokuapp.com"}*/}
          {/*/>*/}
        {/*</div>*/}
        {/*<div className="col-1-of-4">*/}
          {/*<ProjectCard*/}
            {/*img={"http://i.imgur.com/MubF8Tb.png"}*/}
            {/*position={3}*/}
            {/*title={"QSmart"}*/}
            {/*url={"https://qsmart-react.herokuapp.com/"}*/}
          {/*/>*/}
        {/*</div>*/}
        {/*<div className="col-1-of-4">*/}
          {/*<ProjectCard*/}
            {/*img={"http://i.imgur.com/UUo9URs.png"}*/}
            {/*position={4}*/}
            {/*title={"Pixel Playground"}*/}
            {/*url={"https://pixel-playground.herokuapp.com/"}*/}
          {/*/>*/}
        {/*</div>*/}
      </div>
      <Footer />
    </section>
  );
};

export default Projects;