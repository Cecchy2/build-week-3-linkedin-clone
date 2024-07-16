import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "../App.css";
import { Container } from "react-bootstrap";

function MyNavbar() {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleFocus = () => setSearchExpanded(true);
  const handleBlur = () => setSearchExpanded(false);

  return (
    <Container fluid className="navbar-custom bg-light">
      <Navbar expand="lg" className="navbar-custom container">
        <div className="navbar-content">
          <Navbar.Brand href="#home" className="navbar-brand-custom">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="linkedin-icon"
              width="30"
              height="30"
            >
              <path d="M22.23,0H1.77A1.77,1.77,0,0,0,0,1.77V22.23A1.77,1.77,0,0,0,1.77,24H22.23A1.77,1.77,0,0,0,24,22.23V1.77A1.77,1.77,0,0,0,22.23,0ZM7.06,20.45H3.56V9H7.06ZM5.31,7.54A2.07,2.07,0,1,1,7.37,5.48,2.07,2.07,0,0,1,5.31,7.54ZM20.44,20.45H17V14.54c0-1.42-.53-2.39-1.87-2.39a2,2,0,0,0-1.88,1.34,2.46,2.46,0,0,0-.12.86v6.1H9.56s.05-9.91,0-10.95h3.48V11a3.37,3.37,0,0,1,3-1.64c2.2,0,3.84,1.44,3.84,4.55Z"></path>
            </svg>
          </Navbar.Brand>
          {isMobile ? (
            <Nav.Link href="#search" className="nav-item-custom">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon" width="30" height="30">
                <path d="M10 2a8 8 0 106.32 12.9l5.38 5.38 1.41-1.41-5.38-5.38A8 8 0 0010 2zm0 14a6 6 0 110-12 6 6 0 010 12z"></path>
              </svg>
            </Nav.Link>
          ) : (
            <Form inline className={`flex-grow-1 search-bar ${searchExpanded ? "active" : ""}`}>
              <FormControl
                type="text"
                placeholder="Cerca"
                className="mr-sm-2 search-input"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </Form>
          )}
          <div className={`nav-items-grid ${isMobile ? "mobile" : ""}`}>
            <Nav.Link href="#home" className="nav-item-custom">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon" width="30" height="30">
                <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
              </svg>
              <span>Home</span>
            </Nav.Link>
            <Nav.Link href="#network" className="nav-item-custom">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon" width="30" height="30">
                <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
              </svg>
              <span>Rete</span>
            </Nav.Link>
            <Nav.Link href="#jobs" className="nav-item-custom">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon" width="30" height="30">
                <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
              </svg>
              <span>Lavoro</span>
            </Nav.Link>
            <Nav.Link href="#messaging" className="nav-item-custom">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon" width="30" height="30">
                <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
              </svg>
              <span>Messaggistica</span>
            </Nav.Link>
            <Nav.Link href="#notifications" className="nav-item-custom">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon" width="30" height="30">
                <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
              </svg>
              <span>Notifiche</span>
            </Nav.Link>
            <Nav.Link href="#me" className="nav-item-custom">
              <img
                width="30"
                src="https://media.licdn.com/dms/image/C5603AQEsE-ujh9vJ1w/profile-displayphoto-shrink_100_100/0/1619603516362?e=1726704000&v=beta&t=BJ5CPVL_8Mr5SGuxa-PZ_mRF5EjekPnP5F2TqyfM45E"
                height="30"
                alt="Umberto Amoroso"
                className="profile-photo"
              />
              <span>
                Tu{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="chevron-down"
                  width="16"
                  height="16"
                >
                  <path d="M12 14.5l-4-4h8z"></path>
                </svg>
              </span>
            </Nav.Link>
          </div>
          {!isMobile && (
            <>
              <div className="nav-divider"></div>
              <Nav.Link href="#work" className="nav-item-custom">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon" width="30" height="30">
                  <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                </svg>
                <span>
                  Per le aziende{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="chevron-down"
                    width="16"
                    height="16"
                  >
                    <path d="M12 14.5l-4-4h8z"></path>
                  </svg>
                </span>
              </Nav.Link>
            </>
          )}
        </div>
      </Navbar>
    </Container>
  );
}

export default MyNavbar;
