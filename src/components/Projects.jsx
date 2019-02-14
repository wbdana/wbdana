import React from 'react';

const Projects = () => {
  return (
    <section className="projects">
      <div className="row">
        {/* Start col */}
        <div className="col-1-of-4">
          <div className="card">

            {/* Front of card */}
            <div className="card__side card__side--front">
              Front
            </div>


            {/* Back of card */}
            <div className="card__side card__side--back">
              Back
            </div>

          </div>
          {/* End col */}
        </div>
        <div className="col-1-of-4">
          Card 2
        </div>
        <div className="col-1-of-4">
          Card 3
        </div>
        <div className="col-1-of-4">
          Card 4
        </div>
      </div>
    </section>
  );
};

export default Projects;