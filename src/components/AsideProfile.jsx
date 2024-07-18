import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProfileData } from "../redux/actions";

const Aside = () => {
  const listProfiles = useSelector((state) => state.userProfile.listProfiles);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  const fallbackImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNK4d0igyhvVVsYW2LIAn45LUbcWZpewEerQ&s",
    "https://img.freepik.com/vettori-premium/profilo-di-avatar-uomo-su-icona-rotonda_24640-14049.jpg",
    "https://img.freepik.com/vettori-premium/profilo-di-avatar-donna-sull-icona-rotonda_24640-14042.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl6JPaMyl7e0oZfSdBa84_MTOUWwR50niJlLF79QPOlAIEYlSwWcWLG35W3EFI0iGzWFc&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA1lqDgPl7H0dLC70TEOK3luClj7HafIJBHP7WJZyKhv_TatYKCl-vc5Sgwco0dYAeuh8&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS1EUJhfkJFRPWrm0_xMgLz7rxsnr81oS5iZ3ly6AEujgWMbOoIFi8OBgkARmQhjl5X_Y&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgS9gt7bRQjO4-HPlDtfczUF7pOHNwDfqHnZgrbXm4qgyul1MgHkneswnmeMRUQNolJeM&usqp=CAU",
    "https://img.freepik.com/vettori-premium/profilo-di-avatar-uomo-su-icona-rotonda_24640-14049.jpg",
  ];

  return (
    <Container className="p-0">
      <Row>
        <Col xs={{ span: 3 }} className="p-0">
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
                listProfiles.slice(2, 6).map((profile, index) => (
                  <div className="container" key={profile._id}>
                    <div className="row align-items-left">
                      <div className="col-md-2">
                        <img
                          src={fallbackImages[index % fallbackImages.length]}
                          alt="Descrizione"
                          className="img-fluid rounded-circle"
                          style={{ maxWidth: "50px" }}
                        />
                      </div>
                      <div className="col-md-10">
                        <p className="text-black ms-4 fw-bold ">
                          {profile.name} {profile.surname} <br />{" "}
                          <span className="text-secondary">{profile.title}</span>
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
      </Row>
    </Container>
  );
};
export default Aside;
