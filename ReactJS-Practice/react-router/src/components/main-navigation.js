import { NavLink } from "react-router-dom";
import classes from "./main-navigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              className={({isActive}) => (isActive ? classes.active : undefined)}
              to="/"
              end
            >
              Home
            </NavLink>
            <NavLink
              className={({isActive}) => (isActive ? classes.active : undefined)}
              to="/products"
            >
              Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
