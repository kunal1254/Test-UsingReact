import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/tabs">Tabs</Link> | <Link to="/accordion">Accordion</Link>
    </nav>
  );
}

export default Navbar;