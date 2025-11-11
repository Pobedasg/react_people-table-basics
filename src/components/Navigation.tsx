import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export const Navigation = () => (
  <nav
    data-cy="nav"
    className="navbar is-fixed-top has-shadow"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `navbar-item ${isActive ? 'has-background-grey-lighter' : ''}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/people"
          className={({ isActive }) =>
            classNames('navbar-item', { 'is-active': isActive })
          }
        >
          People
        </NavLink>
      </div>
    </div>
  </nav>
);
