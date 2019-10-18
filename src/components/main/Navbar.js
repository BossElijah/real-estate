import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <Link to="/">
        <img src={process.env.PUBLIC_URL + '/img/logo.jpg'} alt="Logo" />
      </Link>
    </Fragment>
  );
};

export default Navbar;
