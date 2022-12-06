import { Link } from 'react-router-dom';

import '../styles/NavBar.css';

const NavBar = () => (
  <nav className="navbar">
    <Link to="/" className="link"><h1>Math Magicians</h1></Link>
    <ul className="links">
      <li><Link to="/" className="link">Home</Link></li>
      <li><Link to="/calculator" className="link">Calculator</Link></li>
      <li><Link to="/quote" className="link">Quote</Link></li>
    </ul>
  </nav>
);
export default NavBar;
