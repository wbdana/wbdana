import React from 'react';

const ProjectCard = props => {
  return (
      <div className="card">
        <div className="card__side card__side--front">
          <div className="card__picture">
            <img src={`${props.img}`} alt={props.title} />
          </div>
          <div className="card__title">
            {props.title}
          </div>
        </div>
        <div className={"card__side card__side--back card__side--back-" + props.position}>
          <span className="card__side--back-text">View the</span>
          <a href={props.url} target="_blank" rel="noopener noreferrer" className="btn__demo">
            Demo
          </a>
        </div>
      </div>
  );
};

export default ProjectCard;
