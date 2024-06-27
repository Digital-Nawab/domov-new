import React from "react";

function Header() {
  return (
    <div>
      <div className="header-top bg--gradient">
        <div className="container container-two">
          <div className="flx-between justify-content-sm-between justify-content-center gap-2">
            <div className="header-info flx-align">
              <div className="header-info__item text-white flx-align">
                <span className="header-info__icon">
                  <i className="fas fa-map-marker-alt" />
                </span>
                <span className="header-info__text text-white fw-light">
                  6391 Elgin St. Celina, 10299
                </span>
              </div>
              <div className="header-info__item text-white flx-align">
                <span className="header-info__icon">
                  <i className="fas fa-envelope" />
                </span>
                <a
                  href="mailto:"
                  className="header-info__text text-white fw-light"
                >
                  info@example.com
                </a>
              </div>
            </div>
            <ul className="social-icon-list flx-align gap-2">
              <li className="social-icon-list__item">
                <a
                  href="https://www.facebook.com/"
                  className="social-icon-list__link"
                >
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="social-icon-list__item">
                <a
                  href="https://www.twitter.com/"
                  className="social-icon-list__link"
                >
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="social-icon-list__item">
                <a
                  href="https://www.linkedin.com/"
                  className="social-icon-list__link"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
              <li className="social-icon-list__item">
                <a
                  href="https://www.pinterest.com/"
                  className="social-icon-list__link"
                >
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
