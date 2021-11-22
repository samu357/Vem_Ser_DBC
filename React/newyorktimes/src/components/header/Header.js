import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import img from "../../image/logoNy.png";

function Header() {
  return (


    <nav className={styles.navHeader}>
      <div className={styles.divContainer}>
        <div>
          <img src={img} alt="Logo" />
        </div>
        <h1>New York Times</h1>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/ciencia">Science</Link>
          </li>

          <li>
            <Link to="/mundo">World</Link>
          </li>

          <li>
            <Link to="/saude">Health</Link>
          </li>

          <li>
            <Link to="/politica">Politics</Link>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Header;