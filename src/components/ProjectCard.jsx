import React from 'react';

const ProjectCard = props => {
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
          {props.title}
        </div>
        <div className="card__side card__side--back">
          {props.back}
        </div>
      </div>
  );
};

export default ProjectCard;
