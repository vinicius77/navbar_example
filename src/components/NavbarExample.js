import React from "react";

const NavbarExample = () => {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top navbar-dark bg-dark">
      <div className="navbar-inner">
        <div className="container">
          <ul className="nav">
            <li class="navbar-brand">Navbar</li>
            <li className="dropdown ">
              <a href="#">Home</a>
            </li>
            <li className="dropdown menu-spacing">
              <a href="#">Example</a>
            </li>
            <li className="dropdown ">
              <a
                href="#"
                className="dropdown-toggle"
                style={{ cursor: "none" }}
                data-toggle="dropdown"
              >
                Hover Me!
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Github</a>
                </li>
                <li>
                  <a href="#">Linkedin</a>
                </li>
                <li>
                  <a href="#">Stack Overflow</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarExample;
