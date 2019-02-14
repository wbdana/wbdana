import React from 'react';

const ProjectCard = props => {
  // TODO WBD remove
  if (props.title && props.back) {
    return (
        <div className="card">
          <div className="card__side card__side--front">
            {props.title}
          </div>
          <div className="card__side card__side--back">
            {props.back}
          </div>
        </div>
    );
  }

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
        <div className="card__side card__side--back">
          Test back
        </div>
      </div>
  );
};

export default ProjectCard;
