/* eslint-disable jsx-a11y/anchor-is-valid */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";

export default function NavBar({ user, setUser }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={styles.navbar__link}>
            Characters
          </Link>

          <Link to="/favorite" className={styles.navbar__link}>
            Favorite
          </Link>

          {!user ? (
            <Link to="/login" className={styles.navbar__link}>
              Login
            </Link>
          ) : (
            <a className={styles.navbar__link} onClick={() => setUser(null)}>
              Logout
            </a>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
