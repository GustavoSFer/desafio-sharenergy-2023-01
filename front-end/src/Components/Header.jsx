import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="text-end mt-4 border border-success p-3 rounded bg-primary">
      <Link
        to="/home"
        className="m-4 text-light text-decoration-none fw-bolder"
      >
        Home
      </Link>
      <Link
        to="/cats"
        className="m-4 text-light text-decoration-none fw-bolder"
      >
        Cats
      </Link>
      <Link
        to="/dogs"
        className="m-4 text-light text-decoration-none fw-bolder"
      >
        Dogs
      </Link>
    </header>
  );
}

export default Header;
