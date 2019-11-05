import React, { useState } from 'react';
import Modal from "../util/Modal";

const Agent = ({ agent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="agent">
      <div>
        <img
          className="agent-img"
          src={process.env.PUBLIC_URL + "/img/" + agent.img.src}
          alt={agent.img.alt}
        />
      </div>
      <div className="agents-info">
        <h3>{agent.name}</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={agent.arealink}
          className="place-container"
        >
          <i className="fas fa-map-marker-alt"></i>
          <span className="icon-text">{agent.area}</span>
        </a>
        <a href={`tel:${agent.phone}`} className="phone-container">
          <i className="fas fa-phone"></i>
          <span className="icon-text">{agent.phone}</span>
        </a>
        <a href={`mailto:${agent.email}`} className="email-container">
          <i className="fas fa-envelope"></i>
          <span className="icon-text">{agent.email}</span>
        </a>
      </div>
      <div className="agents__btn_container">
        <button className="agents__btn" onClick={() => setIsOpen(true)}>
          Læs mere
        </button>
      </div>
      {isOpen && <Modal content={agent.modalContent} setIsOpen={setIsOpen} />}
    </div>
  );
}

export default Agent
