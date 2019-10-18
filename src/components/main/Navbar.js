import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <Link to="/">
        <img src={process.env.PUBLIC_URL + '/img/logo.svg'} alt="Logo" />
      </Link>
    </Fragment>
  );
};

export default Navbar;
