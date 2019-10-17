import React from 'react';

const TextMedia = ({ title, text }) => {
  return (
    <>
      <div className="newsletter">
        <div>
          <h2 className="newsletter__title">{title}</h2>
        </div>
        <div>
          <p className="newsletter__text">{text}</p>
        </div>
        <a href=
        // eslint-disable-next-line 
        "javascript:window.open('','_self').close();"
         className=
         "btn-l"
         ><b>Tilbage</b></a>
      </div>
    </>
  );
};

export default TextMedia;
