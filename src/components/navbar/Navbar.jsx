import React from "react";

function Navbar() {
  return (
    <div>
      <header className="header bg-gray-100">
        <div className="container container-two">
          <nav className="header-inner flx-between">
            {/* Logo Start */}
            <div className="logo">
              <a href="index.html" className="link text-3xl">
                {/* <img src="assets/images/logo/logo.png" alt="Logo" /> */}
                dOmOv
              </a>
            </div>
            {/* Logo End */}
            {/* Menu Start  */}
            <div className="header-menu d-lg-block d-none">
              <ul className="nav-menu flx-align">
                <li className="nav-menu__item has-submenu">
                  <a href="javascript:void(0)" className="nav-menu__link">
                    Home
                  </a>
                  
                </li>
                <li className="nav-menu__item has-submenu">
                  <a href="javascript:void(0)" className="nav-menu__link">
                    Pages
                  </a>
                  
                </li>
                <li className="nav-menu__item has-submenu">
                  <a href="javascript:void(0)" className="nav-menu__link">
                    Project
                  </a>
                  
                </li>
                <li className="nav-menu__item has-submenu">
                  <a href="javascript:void(0)" className="nav-menu__link">
                    Blog
                  </a>
                  
                </li>
                <li className="nav-menu__item">
                  <a href="contact.html" className="nav-menu__link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* Menu End  */}
            {/* Header Right start */}
            <div className="header-right flx-align">
              <a
                href="#"
                className="contact-number text-poppins text-gray-800 fw-500 d-flex align-items-center gap-2"
              >
                <span className="icon text-gradient font-20">
                  <i className="fas fa-phone" />
                </span>
                <span className="text">(629) 555-0129</span>
              </a>
              <button
                type="button"
                className="offcanvas-btn d-lg-block d-none me-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={24}
                  viewBox="0 0 30 24"
                  fill="none"
                >
                  <line
                    x1="0.0078125"
                    y1="12.293"
                    x2="30.0078"
                    y2="12.293"
                    stroke="#181616"
                    strokeWidth={3}
                  />
                  <path
                    d="M5.00781 22.293H30.0078"
                    stroke="#181616"
                    strokeWidth={3}
                  />
                  <path
                    d="M10.0078 2.29297H30.0078"
                    stroke="#181616"
                    strokeWidth={3}
                  />
                </svg>
              </button>
              <button type="button" className="toggle-mobileMenu d-lg-none">
                <i className="las la-bars" />
              </button>
            </div>
            {/* Header Right End  */}
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
