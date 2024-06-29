import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import "../style.css"


library.add(faMoon);

export default function Nav() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    document.documentElement.dataset.bsTheme = theme === 'light' ? 'dark' : 'light';
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary estatico-sidebar">
        <div className="container-fluid">
          <Link className="navbar-brand fs-4" to="/paginaprivada">Fisica Moderna en 1 minuto</Link>
          <span className='d-flex'>
            <FontAwesomeIcon icon={faMoon} size="xl" onClick={toggleTheme} />
          </span>
        </div>
      </nav>
      
    </>
  );
}
