import { useEffect } from "react";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProfileData } from "../redux/actions";

const Aside = () => {
  const listProfiles = useSelector((state) => state.userProfile.listProfiles);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <Col xs={{ span: 3 }}>
      <div className="aside">
        <div className="profile-info">
          <div>
            <span className="text-black fw-bold">
              Lingua del profilo{" "}
              <img
                className="icon-pensil"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9ImVkaXQtbWVkaXVtIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0ibm9uZSIgZGF0YS1zdXBwb3J0ZWQtZHBzPSIyNHgyNCIgZmlsbD0iY3VycmVudENvbG9yIj4KICA8cGF0aCBkPSJNMjEuMTMgMi44NmEzIDMgMCAwMC00LjE3IDBsLTEzIDEzTDIgMjJsNi4xOS0yTDIxLjEzIDdhMyAzIDAgMDAwLTQuMTZ6TTYuNzcgMTguNTdsLTEuMzUtMS4zNEwxNi42NCA2IDE4IDcuMzV6Ii8+Cjwvc3ZnPg=="
              ></img>
            </span>{" "}
            <br></br>
            <p className="text-normal text-secondary pt1">Italiano</p>
            <hr></hr>
          </div>

          <div>
            <span className="text-black fw-bold">
              Profilo pubblico e URL{" "}
              <img
                className="icon-pensil"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9ImVkaXQtbWVkaXVtIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0ibm9uZSIgZGF0YS1zdXBwb3J0ZWQtZHBzPSIyNHgyNCIgZmlsbD0iY3VycmVudENvbG9yIj4KICA8cGF0aCBkPSJNMjEuMTMgMi44NmEzIDMgMCAwMC00LjE3IDBsLTEzIDEzTDIgMjJsNi4xOS0yTDIxLjEzIDdhMyAzIDAgMDAwLTQuMTZ6TTYuNzcgMTguNTdsLTEuMzUtMS4zNEwxNi42NCA2IDE4IDcuMzV6Ii8+Cjwvc3ZnPg=="
              ></img>
            </span>
            <p className="text-secondary ">www.linkedin.com/in/luca-rossi </p>
          </div>
        </div>
        <div className="profile-info mt-3">
          <div className="mb-2">
            <span className="text-black fw-bold">Altri profili simili</span>
          </div>

          {listProfiles.length > 0 &&
            listProfiles.slice(2, 6).map((profile) => (
              <div className="container" key={profile._id}>
                <div className="row align-items-left">
                  <div className="col-md-2 ">
                    <img
                      src={profile.image}
                      alt="Descrizione"
                      className="img-fluid rounded-circle"
                      style={{ maxWidth: "50px" }}
                    />
                  </div>
                  <div className="col-md-10">
                    <p className="text-black ms-4 fw-bold ">
                      {profile.name} {profile.surname} <br /> <span className="text-secondary">{profile.title}</span>
                    </p>
                  </div>
                </div>
                <div className="btn-msg">
                  {" "}
                  <i className="fa fa-paper-plane me-2" aria-hidden="true"></i>Messaggio
                </div>
                <hr></hr>
              </div>
            ))}

          <div className="profile-info mt-3">
            <div>
              <span className="text-black fw-bold">Persone che potresti conoscere</span> <br></br>
              <p className="text-normal text-secondary pt1">Dalla tua scuola o università</p>
            </div>
            {listProfiles.length > 0 &&
              listProfiles.slice(6, 10).map((profile) => (
                <div className="container" key={profile._id}>
                  <div className="row align-items-left">
                    <div className="col-md-2 ">
                      <img
                        src={profile.image}
                        alt="Descrizione"
                        className="img-fluid rounded-circle"
                        style={{ maxWidth: "50px" }}
                      />
                    </div>
                    <div className="col-md-10">
                      <p className="text-black ms-4 fw-bold ">
                        {profile.name} {profile.surname}
                        <br /> <span className="text-secondary">{profile.title}</span>
                      </p>
                    </div>
                  </div>
                  <div className="btn-msg">
                    <i className="fa fa-paper-plane me-2" aria-hidden="true"></i>Messaggio
                  </div>
                  <hr></hr>
                </div>
              ))}
          </div>
          <img
            className="img-sponsor"
            src="https://francescoursino.it/wp-content/uploads/2021/04/hero-barilla-1024x633.jpg"
          ></img>
        </div>
      </div>
    </Col>
  );
};
export default Aside;
