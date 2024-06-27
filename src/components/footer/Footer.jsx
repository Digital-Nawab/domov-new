import React from 'react'

const Footer = () => {
  return (
    <>
       {/* =================== Footer Three Start ====================== */}
       <footer className="footer padding-y-120">
          <div className="container container-two">
            <div className="footer-top flx-between gap-3">
              <div className="footer-top__left">
                <span className="icon">
                  <img src="assets/images/icons/envelop-icon.svg" alt />
                </span>
                <h2 className="text text-white mb-0">
                  Subscribe to My newsletter
                </h2>
              </div>
              <form
                action="#"
                className="subscribe-form d-flex align-items-center gap-3"
              >
                <div className="position-relative w-100">
                  <input
                    type="text"
                    className="common-input common-input--withLeftIcon w-100"
                    placeholder="Enter Your Email Address"
                  />
                  <span className="input-icon input-icon--left text-gradient font-20 line-height-1">
                    <i className="far fa-envelope" />
                  </span>
                </div>
                <button
                  type="submit"
                  className="btn btn-main flex-shrink-0 fw-normal"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="row gy-5">
              <div className="col-xl-5 col-sm-6 col-xsm-6">
                <div className="footer-item">
                  <div className="footer-item__logo">
                    <a href="index.html">
                      <img src="assets/images/logo/white-logo.png" alt />
                    </a>
                  </div>
                  <p className="footer-item__desc max-w-unset">
                    Lorem Ipsum is simply is dumiomy is text Lorem ta Ipsum is
                    simply Lorem Ipsum is simply
                  </p>
                  <ul className="social-icon-list style-two mt-4 flx-align gap-2">
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
              <div className="col-xl-4 col-sm-6 col-xsm-6">
                <div className="footer-item ms-xl-5">
                  <h6 className="footer-item__title">Services</h6>
                  <ul className="footer-menu">
                    <li className="footer-menu__item">
                      <a href="property.html" className="footer-menu__link">
                        Invest in Your Future with Real Estate
                      </a>
                    </li>
                    <li className="footer-menu__item">
                      <a href="property.html" className="footer-menu__link">
                        Discover Endless Possibilities in Real Estate
                      </a>
                    </li>
                    <li className="footer-menu__item">
                      <a href="property.html" className="footer-menu__link">
                        Experience Luxury Living Today
                      </a>
                    </li>
                    <li className="footer-menu__item">
                      <a href="property.html" className="footer-menu__link">
                        Embrace the Real Estate Lifestyle
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-xsm-6">
                <div className="footer-item">
                  <h6 className="footer-item__title">Contact Us</h6>
                  <div className="footer-contact">
                    <div className="footer-contact__item font-18 d-flex align-items-start">
                      <span className="footer-contact__icon">
                        <i className="fas fa-envelope" />
                      </span>
                      <a href="mailto:" className="footer-contact__link">
                        infoname@mail.com
                      </a>
                    </div>
                    <div className="footer-contact__item font-18 d-flex align-items-start">
                      <span className="footer-contact__icon">
                        <i className="fas fa-map-marker-alt" />
                      </span>
                      <p className="footer-contact__text">
                        Old city Street,Usa 1212 New york-3500
                      </p>
                    </div>
                    <div className="footer-contact__item font-18 d-flex align-items-start">
                      <span className="footer-contact__icon">
                        <i className="fas fa-phone" />
                      </span>
                      <a href="tel:" className="footer-contact__link">
                        (+888) 123 456 765
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* bottom Footer */}
        <div className="bottom-footer">
          <div className="container container-two">
            <div className="bottom-footer__inner flx-between gap-3">
              <p className="bottom-footer__text">
                © CityScape 2024 | All Rights Reserved.
              </p>
              <div className="footer-links">
                <a href="#" className="footer-link">
                  Terms &amp; Condition
                </a>
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
                <a href="#" className="footer-link">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* =================== Footer Three End ====================== */}
    </>
  )
}

export default Footer
