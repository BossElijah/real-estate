import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <div>
        <Link to="/">
          <img className="logo" src={process.env.PUBLIC_URL + '/img/logo.png'} alt="Logo" />
        </Link>
      </div>
      <div>
        <Link to="/" className="navbar__btn">Forside</Link>
        <Link to="/leje" className="navbar__btn">Til leje</Link>
        <Link to="/salg" className="navbar__btn">Til salg</Link>
        <Link to="/salgstjek" className="navbar__btn">Salgstjek</Link>
        <Link to="/find" className="navbar__btn">Ejendomsmægler</Link>
      </div>
    </Fragment>
  );
};

export default Navbar;
