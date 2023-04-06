import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h3>Movies</h3>
      <Link to="/signup">SignUp</Link>
      <Link to="/login">Login</Link>

      <Link to="/company">Company Info</Link>
    </div>
  );
};

export default Navbar;
