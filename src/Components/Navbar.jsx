import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";
import Modal from "./Modal";

function Navbar({ favourites }) {
  const [openModal, setOpenModal] = useState(false);

  const [click, setClick] = useState(false); //change the state
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click); //set the click and reverses the state(changes the icons)
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  //Invoke showButton
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* logo */}
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Voyage <i className="fa-brands fa-viadeo" />
          </Link>
          {/* navbar icons */}
          <div className="menu-icon" onClick={handleClick}>
            {" "}
            {/*update state*/}
            <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="./" className="nav-links" onClick={closeMobileMenu}>
                Home{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Places to go{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Things to do
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/favourite"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <i class="fa-regular fa-heart"></i>
                {favourites?.length !== 0 ? favourites?.length : ""}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && (
            <Button
              buttonStyle="btn--outline"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              SIGN UP
            </Button>
          )}
        </div>
      </nav>

      {openModal && <Modal closeModal={setOpenModal} />}
    </>
  );
}

export default Navbar;
