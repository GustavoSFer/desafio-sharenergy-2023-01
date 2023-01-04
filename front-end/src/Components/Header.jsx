import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const logoff = () => {
    localStorage.removeItem('user');
  };

  return (
    <header
      className="mt-4 border border-success p-3 rounded bg-primary d-flex justify-content-between"
    >
      <div>
        <Link
          to="/home"
          className="m-4 text-light text-decoration-none fw-bolder"
        >
          Users
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
      </div>
      <div>
        <Link
          to="/"
          onClick={logoff}
          className="m-4 text-light text-decoration-none fw-bolder"
        >
          Logoff
        </Link>
      </div>
    </header>
  );
}

export default Header;
