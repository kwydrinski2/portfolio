import "../App.css";

const STORE_NAME = "KW";

const Navbar = () => {
  return (
    <nav
      id="Footer"
      className='footer'
    >
      <div className="nav-left">
        <span className="store-name">{STORE_NAME}</span>
      </div>

      <p>Website created using ReactJS and deployed using Vercel.</p>
    </nav>
  );
};

export default Navbar;