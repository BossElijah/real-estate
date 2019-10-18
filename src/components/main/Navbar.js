import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <Link to="/">
        <img className="logo" src={process.env.PUBLIC_URL + '/img/logo.png'} alt="Logo" />
      </Link>
    </Fragment>
  );
};

export default Navbar;
