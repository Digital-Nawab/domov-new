import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import { MdAddCall } from "react-icons/md";
import { PiMedalDuotone, PiCompassRose } from "react-icons/pi";
import { LiaSwimmingPoolSolid } from "react-icons/lia";

function Home() {
  return (
    <div>
      <div>
        {/*==================== Preloader Start ====================*/}
        <div className="preloader">
          <div className="loader" />
        </div>
        {/*==================== Preloader End ====================*/}
        {/*==================== Overlay Start ====================*/}
        <div className="overlay" />
        {/*==================== Overlay End ====================*/}
        {/*==================== Sidebar Overlay End ====================*/}
        <div className="side-overlay" />
        {/*==================== Sidebar Overlay End ====================*/}
        {/* ==================== Scroll to Top End Here ==================== */}
        <div className="progress-wrap">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
        {/* ==================== Scroll to Top End Here ==================== */}
        {/* ==================== Mobile Menu Start Here ==================== */}
        <div className="mobile-menu d-lg-none d-block">
          <button type="button" className="close-button">
            <i className="las la-times" />
          </button>
          <div className="mobile-menu__inner">
            <a href="index.html" className="mobile-menu__logo">
              <img src="assets/images/logo/logo.png" alt="Logo" />
            </a>
            <div className="mobile-menu__menu">
              <ul className="nav-menu flx-align nav-menu--mobile">
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
              <a
                href="#"
                className="btn btn-outline-light d-lg-none d-block mt-4"
              >
                Sell Property
                <span className="icon-right text-gradient">
                  <i className="fas fa-arrow-right" />
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* ==================== Mobile Menu End Here ==================== */}
        {/* ==================== Right Offcanvas Start Here ==================== */}
        <div className="common-offcanvas d-lg-block d-none">
          <div className="flx-between">
            <a href="index.html" className="mobile-menu__logo">
              <img src="assets/images/logo/white-logo.png" alt="Logo" />
            </a>
            <button
              type="button"
              className="close-button d-flex position-relative top-0 end-0"
            >
              <i className="las la-times" />
            </button>
          </div>
          <div className="search-box mt-5">
            <form action="#">
              <input
                type="text"
                className="common-input common-input--light"
                placeholder="Search..."
              />
              <button type="submit" className="icon">
                <i className="fas fa-search" />
              </button>
            </form>
          </div>
          <ul className="address-list mt-5">
            <li className="address-list__item flx-align">
              <span className="address-list__icon">
                <i className="fas fa-map-marker-alt" />
              </span>
              <div className="address-list__content">
                <p className="address-list__text">
                  Burmsille Street, MN 55337, <br />
                  United States
                </p>
              </div>
            </li>
            <li className="address-list__item flx-align">
              <span className="address-list__icon">
                {" "}
                <i className="fas fa-phone" />
              </span>
              <div className="address-list__content">
                <a href="tel:" className="address-list__text">
                  +(1) 123 456 7890{" "}
                </a>
                <a href="tel:" className="address-list__text">
                  +(1) 098 765 4321{" "}
                </a>
              </div>
            </li>
            <li className="address-list__item flx-align">
              <span className="address-list__icon">
                <i className="fas fa-envelope" />
              </span>
              <div className="address-list__content">
                <a href="mailto:" className="address-list__text">
                  {" "}
                  info@driller.com
                </a>
                <a href="mailto:" className="address-list__text">
                  info.example@driller.com
                </a>
              </div>
            </li>
          </ul>
          <div className="google-map mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1511.2499674845235!2d-73.99553882767792!3d40.75102778252164!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1686536419224!5m2!1sen!2sbd"
              loading="lazy"
              className="w-100 h-100"
            />
          </div>
          <ul className="social-list">
            <li className="social-list__item">
              <a
                href="https://www.facebook.com/"
                className="social-list__link flx-center"
              >
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li className="social-list__item">
              <a
                href="https://www.twitter.com/"
                className="social-list__link flx-center"
              >
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className="social-list__item">
              <a
                href="https://www.linkedin.com/"
                className="social-list__link flx-center"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li className="social-list__item">
              <a
                href="https://www.pinterest.com/"
                className="social-list__link flx-center"
              >
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
        {/* ==================== Right Offcanvas End Here ==================== */}
        {/* <div className="floating-chat">
          <button type="button" className="floating-chat__icon">
            <i className="fa fa-comments" />
          </button>
          <div className="floating-chat__box">
            <div className="floating-chat__box--inner">
              <div className="floating-chat__header">
                <span className="floating-chat____title">
                  {" "}
                  What's on your mind?{" "}
                </span>
                <button className="floating-chat__close">
                  <i className="fa fa-times" />
                </button>
              </div>
              <ul className="floating-chat__list">
                <li className="floating-chat__item other">
                  <img
                    src="assets/images/thumbs/user-img1.png"
                    alt
                    className="floating-chat__img"
                  />
                  <p className="floating-chat__text">Hey! How are you doing?</p>
                </li>
                <li className="floating-chat__item self">
                  <img
                    src="assets/images/thumbs/user-img2.png"
                    alt
                    className="floating-chat__img"
                  />
                  <p className="floating-chat__text">Hello! I am doing well</p>
                </li>
                <li className="floating-chat__item other">
                  <img
                    src="assets/images/thumbs/user-img1.png"
                    alt
                    className="floating-chat__img"
                  />
                  <p className="floating-chat__text">Hey! How are you doing?</p>
                </li>
                <li className="floating-chat__item self">
                  <img
                    src="assets/images/thumbs/user-img2.png"
                    alt
                    className="floating-chat__img"
                  />
                  <p className="floating-chat__text">Hello! I am doing well</p>
                </li>
                <li className="floating-chat__item other">
                  <img
                    src="assets/images/thumbs/user-img1.png"
                    alt
                    className="floating-chat__img"
                  />
                  <p className="floating-chat__text">Hey! How are you doing?</p>
                </li>
                <li className="floating-chat__item self">
                  <img
                    src="assets/images/thumbs/user-img2.png"
                    alt
                    className="floating-chat__img"
                  />
                  <p className="floating-chat__text">Hello! I am doing well</p>
                </li>
              </ul>
              <div className="floating-chat__footer">
                <input
                  type="text"
                  className="common-input common-input--sm flex-grow-1"
                  placeholder="Write Message"
                />
                <button className="btn btn-main btn-sm flex-shrink-0">
                  send
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <main className="body-bg">
        {/* ==================== Header Top Four Start Here ==================== */}
        <Header />
        {/* ==================== Header Top Four End Here ==================== */}
        {/* ==================== Header Start Here ==================== */}
        <Navbar />
        {/* ==================== Header End Here ==================== */}
        {/* ========================== Banner Five Start ========================= */}
        <section className="banner-five banner bg-white">
          <div className="container container-two">
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="banner-inner position-relative">
                  <div className="banner-content">
                    <span className="banner-content__subtitle text-uppercase font-14">
                      FinTech Fusion
                    </span>
                    <h1 className="banner-content__title">
                      Beyond Walls We Build Dreams
                    </h1>
                    <p className="banner-content__desc font-18">
                      Unlock the Power of Real Estate Making Your Real Estate
                      Dreams a Reality Real Estate here Unlock the Power of Real
                      Estate
                    </p>
                    <div className="banner-content__button">
                      <a href="#" className="btn btn-main fw-normal">
                        Learn More
                        <span className="icon-right">
                          <i className="fas fa-arrow-right" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-0 order-1">
                <div className="banner-five__thumb">
                  <img src="assets/images/thumbs/housenew.png" alt />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========================== Banner Five End ========================= */}
        {/* ======================= About five Start ========================= */}
        <section className="about-five padding-y-120">
          <div className="container container-two">
            <div className="row flex-wrap-reverse">
              <div className="col-lg-5 col-md-6">
                <div className="about-five__thumbs">
                  <div className="row gy-4">
                    <div className="col-sm-6 col-6">
                      <div className="about-five__thumb one h-100 d-flex">
                        <video
                          class="elementor-video inited"
                          src="https://weamplify.in/test/wp-domov/wp-content/uploads/2023/05/Domov-1.mp4"
                          autoplay=""
                          loop
                          muted="muted"
                          playsinline=""
                          controlslist="nodownload"
                        ></video>
                      </div>
                    </div>
                    <div className="col-sm-6 col-6">
                      <div className="about-five__thumb two">
                        <img
                          src="assets/images/thumbs/about-five-img2.png"
                          alt="Image"
                        />
                      </div>
                      <div className="about-five__thumb three">
                        <img
                          src="assets/images/thumbs/about-five-img3.png"
                          alt="Image"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="about-five__content d-inline-flex align-items-center">
                    <span className="about-five__icon">
                      <i className="fas fa-users" />
                    </span>
                    <div className="about-five__texts">
                      <h5 className="about-five__amount mb-0 text-white">
                        25K+
                      </h5>
                      <span className="about-five__text text-white font-18">
                        Services We Provide
                      </span>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-7 col-md-6 ps-xl-5">
                <div className="about-contents">
                  <div className="section-heading style-left">
                    <span className="section-heading__subtitle">
                      <span className="text-gradient fw-semibold">
                        ABOUT DOMOV
                      </span>
                    </span>
                    <h2 className="section-heading__title">
                      In the right home, the heart discovers tranquility and
                      peace.
                    </h2>
                    <ul className="check-list mt-4 mt-lg-5">
                      <li className="check-list__item d-flex align-items-center">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        <span className="text text-body fw-normal font-16">
                          Derived from Czech-Slovak, DOMOV translates to ‘home’.
                        </span>
                      </li>
                      <li className="check-list__item d-flex align-items-center">
                        <span className="icon">
                          <i className="fas fa-check" />
                        </span>
                        <span className="text text-body fw-normal font-16">
                          At Domov Housing, we craft secure havens that redefine
                          luxury living.
                        </span>
                      </li>
                    </ul>
                    <p className="section-heading__desc">
                      With a commitment to luxury, comfort, honesty, and
                      exclusivity, we ensure a seamless purchasing experience
                      and aspire to transform your dream into reality.
                    </p>
                    <div className="mt-4">
                      <a
                        href="#"
                        className="simple-btn text-heading fw-semibold"
                      >
                        Read More
                        <span className="icon-right text-gradient">
                          <i className="fas fa-arrow-right" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================= About five End ========================= */}
        {/* ======================= Service Slider Section Start ======================= */}
        <div className="service-slider-section overflow-hidden">
          <div className="service-slider d-flex align-items-center gap-4">
            <div className="service-slider__item d-flex align-items-center gap-3">
              <span className="service-slider__icon">
                <img src="assets/images/icons/service-slider-icon1.svg" alt />
              </span>
              <h2 className="service-slider__text mb-0 fw-semibold">
                Infinite Insight Realty
              </h2>
            </div>
            <div className="service-slider__item d-flex align-items-center gap-3">
              <span className="service-slider__icon">
                <img src="assets/images/icons/service-slider-icon2.svg" alt />
              </span>
              <h2 className="service-slider__text mb-0 fw-semibold">
                Elite Scape
              </h2>
            </div>
            <div className="service-slider__item d-flex align-items-center gap-3">
              <span className="service-slider__icon">
                <img src="assets/images/icons/service-slider-icon3.svg" alt />
              </span>
              <h2 className="service-slider__text mb-0 fw-semibold">
                Capital Crest Estates
              </h2>
            </div>
            <div className="service-slider__item d-flex align-items-center gap-3">
              <span className="service-slider__icon">
                <img src="assets/images/icons/service-slider-icon4.svg" alt />
              </span>
              <h2 className="service-slider__text mb-0 fw-semibold">
                Property Consultants
              </h2>
            </div>
          </div>
        </div>
        {/* ======================= Service Slider Section Ends ======================= */}
        {/* ====================== property Type Five Start =============================== */}
        {/* <section className="property-type-five padding-y-120">
          <div className="container container-two">
            <div className="section-heading">
              <span className="section-heading__subtitle">
                <span className="text-gradient fw-semibold">
                  Clients Testimonials
                </span>
              </span>
              <h2 className="section-heading__title">
                Investing in Real Estate for Brighter Tomorrow
              </h2>
            </div>
            <div className="row gy-4">
              <div className="col-lg-4 col-sm-6">
                <div className="property-type-five-item">
                  <div className="property-type-five-item__thumb">
                    <img
                      src="assets/images/thumbs/property-type-five-img1.png"
                      alt="Image"
                      className="cover-img"
                    />
                  </div>
                  <div className="property-type-five-item__content">
                    <span className="property-type-five-item__date">01</span>
                    <h6 className="property-type-five-item__title">
                      Dream Dwell Properties
                    </h6>
                    <p className="property-type-five-item__desc">
                      Real Estate is a vast industry that deals with the buying,
                      selling
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="property-type-five-item">
                  <div className="property-type-five-item__thumb">
                    <img
                      src="assets/images/thumbs/property-type-five-img2.png"
                      alt="Image"
                      className="cover-img"
                    />
                  </div>
                  <div className="property-type-five-item__content">
                    <span className="property-type-five-item__date">02</span>
                    <h6 className="property-type-five-item__title">
                      Seamless Solutions
                    </h6>
                    <p className="property-type-five-item__desc">
                      Real Estate is a vast industry that deals with the buying,
                      selling
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="property-type-five-item">
                  <div className="property-type-five-item__thumb">
                    <img
                      src="assets/images/thumbs/property-type-five-img3.png"
                      alt="Image"
                      className="cover-img"
                    />
                  </div>
                  <div className="property-type-five-item__content">
                    <span className="property-type-five-item__date">03</span>
                    <h6 className="property-type-five-item__title">
                      Skyline Homes Realty
                    </h6>
                    <p className="property-type-five-item__desc">
                      Real Estate is a vast industry that deals with the buying,
                      selling
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* ====================== property Type Five End =============================== */}
        {/* ===================== Choose Us Start =========================== */}
        <section className="choose-us padding-y-120 bg-gray-900">
          <div className="container">
            <div className="row gy-4 flex-wrap-reverse">
              <div className="col-lg-6">
                <div className="choose-us__thumb">
                  <div className="choose-us__thumb-inner">
                    <video
                      className="elementor-video inited w-full h-[350px] md:h-[450px]"
                      src="https://weamplify.in/test/wp-domov/wp-content/uploads/2023/05/Domov-1.mp4"
                      autoplay=""
                      loop
                      muted="muted"
                      playsinline=""
                      controlslist="nodownload"
                    ></video>
                  </div>
                  <img
                    src="assets/images/shapes/pipes.png"
                    alt="Pipe Shape"
                    className="pipe-shape"
                  />
                </div>
              </div>
              <div className="col-lg-6 ps-lg-5">
                <div className="choose-us__content">
                  <div className="section-heading mb-0 style-left">
                    <span className="section-heading__subtitle bg-gray-700">
                      <span className="text-gradient fw-semibold">
                        why chose us
                      </span>
                    </span>
                    <h2 className="section-heading__title text-white">
                      An epitome of elegance in design and living
                    </h2>
                    <p className="section-heading__desc text-white fw-light font-18">
                      Our homes harmoniously combine style and comfort, blending
                      contemporary aesthetics with intimate living spaces for a
                      refined living experience. <br /> <br />
                      With a commitment to luxury, comfort, honesty, and
                      exclusivity, we ensure a seamless purchasing experience
                      and aspire to transform your dream into reality.
                    </p>
                    <div className="choose-us__button">
                      <a
                        href="blog-details.html"
                        className="btn btn-outline-lightInDark text-white fw-normal"
                      >
                        Read More
                        <span className="icon-right icon text-gradient">
                          <i className="fas fa-arrow-right" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================== Choose Us End =========================== */}

        {/* ===============================Coastal Section Start ============================  */}

        <section className="padding-y-120 relative w-full">
          <div className="mx-auto w-full max-w-7xl px-8">
            <div className="flex flex-col gap-y-[120px]  justify-center items-center">
              <div className="flex flex-col justify-center items-center ">
                <h3 className="text-xl font-semibold mb-4">
                  WE CREATE & CURATE EXCEPTIONAL HOMES
                </h3>
                <h1 className="text-[46px] leading-[47px]  font-[500] text-center">
                  Our emphasis on building homes where you may create memories
                  with your loved ones is rooted in the values of providing
                  bespoke luxury.
                </h1>
              </div>
              <div className="md:flex  md:gap-5">
                <img
                  src="/assets/images/thumbs/map.png"
                  alt=""
                  className=" w-[70%] h-[70%] md:w-full rounded-lg "
                />
                <div className="flex flex-col pt-5 ">
                  <h2 className="text-[15px] leading-[18px] font-[600]">
                    SCENIC LANDSCAPES
                  </h2>
                  <h3 className="leading-[38px] text-[35px] font-[600] my-3">
                    Goa, a paradise <br /> for coastal getaways
                  </h3>
                  <p className="w-[500px] text-[17px] leading-[30px] font-normal">
                    Our projects are focussed in the Western Indian region to
                    offer a versatile experience that allows you to relax and
                    have fun. Renowned for its stunning beaches, delightful
                    dining options, and vibrant nightlife, Goa caters to
                    individuals of all ages.
                  </p>
                  <div className="flex mt-4 gap-5 mb-4">
                    <button className="btn btn-main">About Us &nbsp; →</button>
                    <div className="flex items-center gap-x-2">
                      <div className="bg-gray-300 p-3 rounded-[50%] cursor-pointer">
                        <MdAddCall />
                      </div>
                      <p className="text-lg font-semibold text-[#2f2f2f]">
                        +91 11 4579 1145
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===============================Coastal Section End ============================  */}

        <section className="choose-us padding-y-120 bg-white   ">
          <div className="container ">
            <div className="row gy-4 flex-wrap-reverse flex-row-reverse">
              <div className="col-lg-6">
                <img src="..\public\assets\images\thumbs\CasaVida.png" alt="" />
              </div>
              <div className="col-lg-6 ps-lg-5">
                <div className="choose-us__content">
                  <div className="section-heading mb-0 style-left">
                    <span className="section-heading__subtitle text-[#181616] font-semibold font-serif">
                      Project
                    </span>
                    <h2 className="section-heading__title text-4xl font-bold text-[#181616]">
                      Casa Vida,
                      <br />
                      Vagator Beach Goa
                    </h2>
                    <p className="section-heading__desc text-[#8886A3] fw-light font-18">
                      Casa Vida, which means ‘Home Life’, draws its inspiration
                      from the rich Portuguese heritage of Goa. Located at the
                      core of this cultural influence, our luxury villas are
                      meticulously constructed to combine the essence of a
                      comfortable home with the vibrant spirit of life. We
                      strive to create a harmonious blend of contemporary design
                      and intimate living.
                    </p>
                    <div className="choose-us__button">
                      <button className="btn btn-main">
                        Read More &nbsp; →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="counter-six">
          <div className="container container-two">
            <div className="counter-six__inner md:flex md:flex-row md:justify-evenly bg-white">
              <div className="md:flex md:flex-rox flex g-2 m-2 md:items-center md:gap-4">
                <div>
                  <PiMedalDuotone className="md:flex md:flex-col text-orange-700 h-10 w-10" />
                </div>
                <div className=" md:flex md:flex-col  md:gap-3 ">
                  <p>
                    <span className="md:text-2xl">Exceptional Quality</span>
                  </p>
                  <a href="#" className="simple-btn font-semibold text-heading">
                    Read More
                    <span className="icon-right text-gradient">
                      <i className="fas fa-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="md:flex md:flex-rox flex gap-2 m-2 md:tems-center md:gap-4">
                <div>
                  <LiaSwimmingPoolSolid className="md:flex md:flex-col text-orange-700 h-10 w-10" />
                </div>
                <div className=" md:flex md:flex-col  md:gap-3 ">
                  <p>
                    <span className="md:text-2xl">Exclusive Amenities</span>
                  </p>
                  <a href="#" className="font-semibold simple-btn text-heading">
                    Read More
                    <span className="icon-right text-gradient">
                      <i className="fas fa-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="md:flex md:flex-rox md:items-center flex g-2 m-2 md:gap-4">
                <div>
                  <PiCompassRose className="md:flex md:flex-col text-orange-700 h-10 w-10" />
                </div>
                <div className=" md:flex md:flex-col  md:gap-3 ">
                  <p>
                    <span className="md:text-2xl"> Prime Locations</span>
                  </p>
                  <a href="#" className="simple-btn font-semibold text-heading">
                    Read More
                    <span className="icon-right text-gradient">
                      <i className="fas fa-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================= Property Section Start ===================== */}
        <section className="property-five padding-y-120">
          <div className="container container-two">
            <div className="section-heading style-left style-flex">
              <div className="section-heading__inner">
                <span className="section-heading__subtitle">
                  <span className="text-gradient fw-semibold">
                    Latest Offer
                  </span>
                </span>
                <h2 className="section-heading__title">
                  Live Your Best Life in a New life Home
                </h2>
              </div>
            </div>
            <div className="property-five-slider arrow-style-two">
              <div className="property-item p-2 m-2 bg-white rounded style-white">
                <div className="property-item__thumb rounded">
                  <a href="property-details.html" className="link">
                    <img
                      src="assets/images/thumbs/property-1.png"
                      alt
                      className="cover-img"
                    />
                  </a>
                </div>
                <div className="property-item__content p-lg-4 p-3 bg-white">
                  <h6 className="property-item__price text-heading fw-semibold">
                    $500.00 <span className="day fw-500">/per day</span>
                  </h6>
                  <h6 className="property-item__title text-heading fw-semibold">
                    <a href="property-details.html" className="link">
                      Paramount Investments Prestige Property Management
                    </a>
                  </h6>
                  <p className="property-item__location text-heading fw-normal d-flex gap-2">
                    <span className="icon text-gradient">
                      <i className="fas fa-map-marker-alt" />
                    </span>
                    66 Broklyant, New York America
                  </p>
                  <div className="property-item__bottom border-color text-heading fw-semibold flx-between gap-2">
                    <ul className="amenities-list flx-align">
                      <li className="amenities-list__item flx-align">
                        <span className="icon text-gradient">
                          <i className="fas fa-bed" />
                        </span>
                        <span className="text text-heading fw-500">3 Beds</span>
                      </li>
                      <li className="amenities-list__item flx-align">
                        <span className="icon text-gradient">
                          <i className="fas fa-bath" />
                        </span>
                        <span className="text text-heading fw-500">
                          3 Baths
                        </span>
                      </li>
                    </ul>
                    <a href="#" className="simple-btn text-heading">
                      Book Now
                      <span className="icon-right text-gradient">
                        <i className="fas fa-arrow-right" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="property-item p-2 m-2 bg-white rounded style-white">
                <div className="property-item__thumb rounded">
                  <a href="property-details.html" className="link">
                    <img
                      src="assets/images/thumbs/property-2.png"
                      alt
                      className="cover-img"
                    />
                  </a>
                </div>
                <div className="property-item__content p-lg-4 p-3 bg-white">
                  <h6 className="property-item__price text-heading fw-semibold">
                    $500.00 <span className="day fw-500">/per day</span>
                  </h6>
                  <h6 className="property-item__title text-heading fw-semibold">
                    <a href="property-details.html" className="link">
                      Paramount Investments Prestige Property Management
                    </a>
                  </h6>
                  <p className="property-item__location text-heading fw-normal d-flex gap-2">
                    <span className="icon text-gradient">
                      <i className="fas fa-map-marker-alt" />
                    </span>
                    66 Broklyant, New York America
                  </p>
                  <div className="property-item__bottom border-color text-heading fw-semibold flx-between gap-2">
                    <ul className="amenities-list flx-align">
                      <li className="amenities-list__item flx-align">
                        <span className="icon text-gradient">
                          <i className="fas fa-bed" />
                        </span>
                        <span className="text text-heading fw-500">3 Beds</span>
                      </li>
                      <li className="amenities-list__item flx-align">
                        <span className="icon text-gradient">
                          <i className="fas fa-bath" />
                        </span>
                        <span className="text text-heading fw-500">
                          3 Baths
                        </span>
                      </li>
                    </ul>
                    <a href="#" className="simple-btn text-heading">
                      Book Now
                      <span className="icon-right text-gradient">
                        <i className="fas fa-arrow-right" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="property-item p-2 m-2 bg-white rounded style-white">
                <div className="property-item__thumb rounded">
                  <a href="property-details.html" className="link">
                    <img
                      src="assets/images/thumbs/property-3.png"
                      alt
                      className="cover-img"
                    />
                  </a>
                </div>
                <div className="property-item__content p-lg-4 p-3 bg-white">
                  <h6 className="property-item__price text-heading fw-semibold">
                    $500.00 <span className="day fw-500">/per day</span>
                  </h6>
                  <h6 className="property-item__title text-heading fw-semibold">
                    <a href="property-details.html" className="link">
                      Paramount Investments Prestige Property Management
                    </a>
                  </h6>
                  <p className="property-item__location text-heading fw-normal d-flex gap-2">
                    <span className="icon text-gradient">
                      <i className="fas fa-map-marker-alt" />
                    </span>
                    66 Broklyant, New York America
                  </p>
                  <div className="property-item__bottom border-color text-heading fw-semibold flx-between gap-2">
                    <ul className="amenities-list flx-align">
                      <li className="amenities-list__item flx-align">
                        <span className="icon text-gradient">
                          <i className="fas fa-bed" />
                        </span>
                        <span className="text text-heading fw-500">3 Beds</span>
                      </li>
                      <li className="amenities-list__item flx-align">
                        <span className="icon text-gradient">
                          <i className="fas fa-bath" />
                        </span>
                        <span className="text text-heading fw-500">
                          3 Baths
                        </span>
                      </li>
                    </ul>
                    <a href="#" className="simple-btn text-heading">
                      Book Now
                      <span className="icon-right text-gradient">
                        <i className="fas fa-arrow-right" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="property-item p-2 m-2 bg-white rounded style-white">
                <div className="property-item__thumb rounded">
                  <a href="property-details.html" className="link">
                    <img
                      src="assets/images/thumbs/property-4.png"
                      alt
                      className="cover-img"
                    />
                  </a>
                </div>
                <div className="property-item__content p-lg-4 p-3 bg-white">
                  <h6 className="property-item__price text-heading fw-semibold">
                    $500.00 <span className="day fw-500">/per day</span>
                  </h6>
                  <h6 className="property-item__title text-heading fw-semibold">
                    <a href="property-details.html" className="link">
                      Paramount Investments Prestige Property Management
                    </a>
                  </h6>
                  <p className="property-item__location text-heading fw-normal d-flex gap-2">
                    <span className="icon text-gradient">
                      <i className="fas fa-map-marker-alt" />
                    </span>
                    66 Broklyant, New York America
                  </p>
                  <div className="property-item__bottom border-color text-heading fw-semibold flx-between gap-2">
                    <ul className="amenities-list flx-align">
                      <li className="amenities-list__item flx-align">
                        <span className="icon text-gradient">
                          <i className="fas fa-bed" />
                        </span>
                        <span className="text text-heading fw-500">3 Beds</span>
                      </li>
                      <li className="amenities-list__item flx-align">
                        <span className="icon text-gradient">
                          <i className="fas fa-bath" />
                        </span>
                        <span className="text text-heading fw-500">
                          3 Baths
                        </span>
                      </li>
                    </ul>
                    <a href="#" className="simple-btn text-heading">
                      Book Now
                      <span className="icon-right text-gradient">
                        <i className="fas fa-arrow-right" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ======================= Property Section End ===================== */}

        <section className="choose-us padding-y-120 bg-gray-900">
          <div className="container ">
            <div className="row gy-4 flex-wrap-reverse flex items-center justify-center">
              <div className="col-lg-6 ">
                <img
                  className="rounded-lg  hover:scale-[1.01]"
                  src="../public/assets/images/thumbs/beach.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-6 ps-lg-5">
                <div className="choose-us__content">
                  <div className="section-heading mb-0 style-left">
                    <p className="section-heading__desc text-white  fw-light font-18">
                      Vagator is a lively area in Northern Goa. It is known to
                      be the best beach in Goa, for its tranquillity and
                      serenity. In Vagator, you can find a variety of things to
                      do, from shopping at flea markets, having a meal at a 5
                      star hotel to water sports and more. The whole area is
                      where all the fun takes place in North Goa, and a great
                      location to get the ideal luxury home in.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================= Counter Section Start ======================= */}
        <section className="counter-six my-5">
          <div className="container container-two">
            <div className="counter-six__inner md:flex md:flex-row md:justify-evenly m-4 bg-white">
              <div className="md:flex md:flex-rox flex gap-2 md:items-center  md:gap-4 m-2">
                <div>
                  <span className="counter-six-item__icon">
                    <img src="assets/images/icons/counter-six-img1.svg" alt />
                  </span>
                </div>
                <div className=" md:flex md:flex-col  md:gap-3 ">
                  <p>
                    <span className="text-2xl text-orange-700">
                      Happy Customer
                    </span>
                  </p>
                  <h2 className="counter-six-item__number mb-0">200+</h2>
                </div>
              </div>

              <div className="md:flex md:flex-rox flex gap-2 md:items-center md:gap-4 m-2">
                <div>
                  <span className="counter-six-item__icon">
                    <img src="assets/images/icons/counter-six-img2.svg" alt />
                  </span>
                </div>
                <div className=" md:flex md:flex-col  md:gap-3 ">
                  <p>
                    <span className="text-2xl text-orange-700">Property</span>
                  </p>
                  <h2 className="counter-six-item__number mb-0">100+</h2>
                </div>
              </div>
              <div className="md:flex md:flex-rox md:items-center md:gap-4 flex gap-2 m-2">
                <div>
                  <span className="counter-six-item__icon">
                    <img src="assets/images/icons/counter-six-img3.svg" alt />
                  </span>
                </div>
                <div className=" md:flex md:flex-col  md:gap-3 ">
                  <p>
                    <span className="md:text-2xl text-orange-700">
                      {" "}
                    Location
                    </span>
                  </p>
                  <h2 className="counter-six-item__number mb-0 ">50+</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ======================= Counter Section End ======================= */}

        <section className="choose-us padding-y-120 bg-white   ">
          <div className="container ">
            <div className="row gy-4 flex-wrap-reverse ">
              <div className="col-lg-6">
                <img src="..\public\assets\images\thumbs\FSiolim.webp" alt="" />
              </div>
              <div className="col-lg-6 ps-lg-5">
                <div className="choose-us__content">
                  <div className="section-heading mb-0 style-left">
                    <span className="section-heading__subtitle text-[#181616] font-semibold font-serif">
                      UPCOMING PROJECT
                    </span>
                    <h2 className="section-heading__title text-4xl font-bold text-[#181616]">
                      Siolim Goa
                    </h2>
                    <p className="section-heading__desc text-[#8886A3] fw-light font-18">
                      Welcome to our upcoming project in the serene town of
                      Siolim, Goa! Situated in a prime location, our development
                      boasts not one but two units within a single plot,
                      offering a unique opportunity for both residents and
                      investors. We are currently in the exciting phase of
                      finalising the floor plans. <br /><br />Our team of experts is
                      diligently working to create a harmonious blend of modern
                      design and local charm, ensuring that each unit becomes a
                      sanctuary of comfort and relaxation.
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default Home;
