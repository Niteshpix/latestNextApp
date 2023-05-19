"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Slider.module.css";
import { Nav, Navbar } from "react-bootstrap";
import { usePathname } from "next/navigation";

function Header({ slides }) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const pathname = usePathname();

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      2500
    );

    return resetTimeout;
  }, [index, slides.length]);

  return (
    <div className={styles.slideshow}>
      {pathname === "/" ? (
        <div className={styles.sliderContent}>
          <div className={styles.contentLeft}>
            <h1>Open mindedness</h1>
            <p>
              Discover stories, thinking, and expertise from writers on any
              topic.
            </p>
            <button>Your Button</button>
          </div>
        </div>
      ) : (
        ""
      )}

      <div
        className={pathname === "/" ? styles.navbarWrapper : styles.navbarouter}
      >
        <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
          <Navbar.Brand className={styles.navbarbrand} href="/">
            Nav
          </Navbar.Brand>
          <Navbar.Toggle
            style={{ background: "white" }}
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className={styles.navbarbrand} href="#features">
                Features
              </Nav.Link>
              <Nav.Link className={styles.navbarbrand} href="/about">
                About
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className={styles.navbarbrand} href="#deets">
                More deets
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href="#memes"
                className={styles.navbarbrand}
              >
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      {pathname === "/" ? (
        <div
          className={styles.slideshowSlider}
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {slides.map((data, idx) => (
            <div className={styles.slide} key={idx}>
              <img src={data} alt="slide" />
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default Header;
