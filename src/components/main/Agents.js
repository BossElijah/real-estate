import React from 'react';

const Agents = ({ title, agents }) => {
  return (
    <div className="agents-container">
      <div className="agents">
        {agents.map((agent, index) => (
          <div className="agent" key={index}>
            <div>
              <img className="agent-img"
                src={process.env.PUBLIC_URL + '/img/' + agent.img.src}
                alt={agent.img.alt}
              />
            </div>
            <div className="agents-info">
              <h3>{agent.name}</h3>
              <div className="place-container">
                <i class="fas fa-map-marker-alt"></i>
                <span className="icon-text">{agent.area}</span>
              </div>  
              <div className="phone-container">
                <i className="fas fa-phone"></i>
                <span className="icon-text">{agent.phone}</span>
              </div>
              <div className="email-container">
                <i className="fas fa-envelope"></i>
                <span className="icon-text">{agent.email}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;