import React from 'react';
import Agent from './Agent';

const Agents = ({ agents }) => {
  return (
    <>
      <div className="agents-container">
        <div className="agents">
          {agents.map((agent, index) => (
            <Agent key={index} agent={agent} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Agents;