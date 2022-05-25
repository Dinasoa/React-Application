import { Link } from "../../../../components/Link";
import { NavDropdown } from "../../../../components/NavDropdown";
import { SearchBar } from "../../../../components/SearchBar";
export function Navbar(props) {
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <a className="navbar-brand ps-3" href="index.html">
        Start Bootstrap
      </a>
      <SearchBar placeholder="Search for ..." id="btnNavbarSearch" />
      <NavDropdown>
        <Link label="Settings"/>
        <Link label="Activity Log"/>
        <li>
          <hr class="dropdown-divider" />
        </li>
        <Link label="Log out"/>
      </NavDropdown>
    </nav>
  );
}
