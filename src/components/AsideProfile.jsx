
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import avatar from "../assets/avatar.png"
const Aside = () => {
  return (
    <Container>
      <Row>
        <Col xs={{ span: 3, offset: 9 }}>
        <div className="aside">
          <div className="profile-info mt-5">
          
            <div>
            <span className="text-black fw-bold">
          Lingua del profilo <img className="icon-pensil"  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9ImVkaXQtbWVkaXVtIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0ibm9uZSIgZGF0YS1zdXBwb3J0ZWQtZHBzPSIyNHgyNCIgZmlsbD0iY3VycmVudENvbG9yIj4KICA8cGF0aCBkPSJNMjEuMTMgMi44NmEzIDMgMCAwMC00LjE3IDBsLTEzIDEzTDIgMjJsNi4xOS0yTDIxLjEzIDdhMyAzIDAgMDAwLTQuMTZ6TTYuNzcgMTguNTdsLTEuMzUtMS4zNEwxNi42NCA2IDE4IDcuMzV6Ii8+Cjwvc3ZnPg=="></img>
        </span> <br></br>
            <p className="text-normal text-secondary pt1">Italiano</p><hr></hr> 
          </div>
         
           
            <div>
            <span className="text-black fw-bold">
          Profilo pubblico e URL <img className="icon-pensil"  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9ImVkaXQtbWVkaXVtIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0ibm9uZSIgZGF0YS1zdXBwb3J0ZWQtZHBzPSIyNHgyNCIgZmlsbD0iY3VycmVudENvbG9yIj4KICA8cGF0aCBkPSJNMjEuMTMgMi44NmEzIDMgMCAwMC00LjE3IDBsLTEzIDEzTDIgMjJsNi4xOS0yTDIxLjEzIDdhMyAzIDAgMDAwLTQuMTZ6TTYuNzcgMTguNTdsLTEuMzUtMS4zNEwxNi42NCA2IDE4IDcuMzV6Ii8+Cjwvc3ZnPg=="></img>
        </span> 
            <p className="text-secondary ">www.linkedin.com/in/luca-rossi </p>
            </div>
            
          </div>
          <div className="profile-info mt-3">
          
            <div className="mb-2">
            <span className="text-black fw-bold">
          Altri profili simili
        </span> 
          </div>
           
            
            
              <div className="container">
      <div className="row align-items-left">
        <div className="col-md-2 ">
        <img src={avatar}
            alt="Descrizione" 
            className="img-fluid" 
            style={{ maxWidth: '50px' }} 
          />
        </div>
        <div className="col-md-10">
          <p className="text-black ms-4 fw-bold ">Marta N. <br/> <span className="text-secondary">
          Studente presso Epicode
          
          </span></p>
          
          </div>
          
         
          </div>
          <div className="btn-msg"> <i className="fa fa-paper-plane me-2" aria-hidden="true"></i>Messaggio</div>
          <hr></hr>
</div>
<div className="container">
      <div className="row align-items-left">
        <div className="col-md-2 ">
        <img src={avatar}
            alt="Descrizione" 
            className="img-fluid" 
            style={{ maxWidth: '50px' }} 
          />
        </div>
        <div className="col-md-10">
          <p className="text-black ms-4 fw-bold ">Marta N. <br/> <span className="text-secondary">
          Studente presso Epicode
          
          </span></p>
          
          </div>
          
          </div>
          <div className="btn-msg"><i className="fa fa-paper-plane me-2" aria-hidden="true"></i>Messaggio</div>
          <hr></hr>
</div>
<div className="container">
      <div className="row align-items-left">
        <div className="col-md-2 ">
        <img src={avatar}
            alt="Descrizione" 
            className="img-fluid" 
            style={{ maxWidth: '50px' }} 
          />
        </div>
        <div className="col-md-10">
          <p className="text-black ms-4 fw-bold ">Marta N. <br/> <span className="text-secondary">
          Studente presso Epicode
          
          </span></p>
          
          </div>
         
          </div>
          <div className="btn-msg"><i className="fa fa-paper-plane me-2" aria-hidden="true"></i>Messaggio</div>
          <hr></hr>
</div>
<div className="container">
      <div className="row align-items-left">
        <div className="col-md-2 ">
        <img src={avatar}
            alt="Descrizione" 
            className="img-fluid" 
            style={{ maxWidth: '50px' }} 
          />
        </div>
        <div className="col-md-10">
          <p className="text-black ms-4 fw-bold ">Marta N. <br/> <span className="text-secondary o-3">
          Studente presso Epicode
          
          </span></p>
          
          </div>
          
          </div>
          <div className="btn-msg"><i className="fa fa-paper-plane me-2" aria-hidden="true"></i>Messaggio</div>
          <hr></hr>
</div>
            
          </div>
          <div className="profile-info mt-3">
          
          <div>
          <span className="text-black fw-bold">
        Persone che potresti conoscere
      </span> <br></br>
          <p className="text-normal text-secondary pt1">Dalla tua scuola o università</p>
        </div>
         
          
          
            <div className="container">
    <div className="row align-items-left">
      <div className="col-md-2 ">
      <img src={avatar}
          alt="Descrizione" 
          className="img-fluid" 
          style={{ maxWidth: '50px' }} 
        />
      </div>
      <div className="col-md-10">
        <p className="text-black ms-4 fw-bold ">Marta N. <br/> <span className="text-secondary">
        Studente presso Epicode
        
        </span></p>
        
        </div>
        
        </div>
        <div className="btn-msg"><i className="fa fa-paper-plane me-2" aria-hidden="true"></i>Messaggio</div>
        <hr></hr>
</div>
<div className="container">
    <div className="row align-items-left">
      <div className="col-md-2 ">
      <img src={avatar}
          alt="Descrizione" 
          className="img-fluid" 
          style={{ maxWidth: '50px' }} 
        />
      </div>
      <div className="col-md-10">
        <p className="text-black ms-4 fw-bold ">Marta N. <br/> <span className="text-secondary">
        Studente presso Epicode
        
        </span></p>
        
        </div>
        
        </div>
        <div className="btn-msg"><i className="fa fa-paper-plane me-2" aria-hidden="true"></i>Messaggio</div>
        <hr></hr>
</div>
<div className="container">
    <div className="row align-items-left">
      <div className="col-md-2 ">
      <img src={avatar}
          alt="Descrizione" 
          className="img-fluid" 
          style={{ maxWidth: '50px' }} 
        />
      </div>
      <div className="col-md-10">
        <p className="text-black ms-4 fw-bold ">Marta N. <br/> <span className="text-secondary">
        Studente presso Epicode
        
        </span></p>
        
        </div>
        
        </div>
        <div className="btn-msg"><i className="fa fa-paper-plane me-2" aria-hidden="true"></i>Messaggio</div>
        <hr></hr>
</div>
<div className="container">
    <div className="row align-items-left">
      <div className="col-md-2 ">
      <img src={avatar}
          alt="Descrizione" 
          className="img-fluid" 
          style={{ maxWidth: '50px' }} 
        />
      </div>
      <div className="col-md-10">
        <p className="text-black ms-4 fw-bold ">Marta N. <br/> <span className="text-secondary o-3">
        Studente presso Epicode
        
        </span></p>
        
        </div>
        
        </div>
        <div className="btn-msg"><i className="fa fa-paper-plane me-2" aria-hidden="true"></i>Messaggio</div>
        <hr></hr>
</div>
          
        </div>
          </div>
          
          
          
        </Col>
      </Row>
    </Container>
  );
};
export default Aside