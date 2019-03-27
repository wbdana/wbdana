import React from 'react';

const ProjectCard = props => {
  const codeLinks = props.codeTwo ?
    (
      <div>
        <span className="card__side--back-text">Front end</span>
        <a
          href={props.code}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn__demo"
        >
          Code
        </a>
        <span className="card__side--back-text">Back end</span>
        <a
          href={props.codeTwo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn__demo"
        >
          Code
        </a>
      </div>
    ) :
    (
      <div>
        <span className="card__side--back-text">Check out the</span>
        <a
          href={props.code}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn__demo"
        >
          Code
        </a>
      </div>
    );

  const demoText = props.demoText || "Demo";
  const description = () => (
    props.description ?
      props.description() :
      null
  );

  return (
      <div className="card">
        <div className="card__side card__side--front">
          <div className="card__picture">
            <img src={`${props.img}`} alt={props.title} />
          </div>
          <div className="card__title">
            {props.title}
          </div>
          <div className="card__description">
            <span>Technologies used:</span>
            <ul>
              {description()}
            </ul>
          </div>
        </div>
        <div className={"card__side card__side--back card__side--back-" + props.position}>
          <span className="card__side--back-text">See the</span>
          <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn__demo"
          >
            {demoText}
          </a>
          {codeLinks}
        </div>
      </div>
  );
};

export default ProjectCard;
