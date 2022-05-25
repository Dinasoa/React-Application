import { NavDropdown } from "../../../../components/NavDropdown";
import { SearchBar } from "../../../../components/SearchBar";
export function Navbar(props) {
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <a className="navbar-brand ps-3" href="index.html">
        Start Bootstrap
      </a>
      <SearchBar placeholder="Search for ..." />
      <NavDropdown>
        <li>
          <a class="dropdown-item" href="#!">
            Settings
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#!">
            Activity Log
          </a>
        </li>
        <li>
          <hr class="dropdown-divider" />
        </li>
        <li>
          <a class="dropdown-item" href="#!">
            Logout
          </a>
        </li>
      </NavDropdown>
    </nav>
  );
}
