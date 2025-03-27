import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = [
    {
      title: "Genders",
    },
    {
      title: "Users",
    },
  ];
  return (
    <div>
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              HabloRNL
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav">
                {menuItems.map((menuItem, index) => (
                  <li className="nav-item" key={index}>
                    <Link className="nav-link" to="#">
                      {menuItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
};

export default Navbar;
