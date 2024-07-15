import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import { RiArrowUpWideLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { PiNotePencilDuotone } from "react-icons/pi";

function MessageComp() {
  return (
    <div className="d-inline-block position-fixed border rounded-top p-2 " id="messageTool">
      <Dropdown as={NavItem}>
        <div className="d-flex justify-content-around align-items-center">
          <img
            src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="immagine user"
            className="border rounded-circle me-2"
            style={{ width: "35px" }}
          />
          <Dropdown.Toggle as={NavLink}>
            <span className="fs-6 fw-medium ">Messagistica</span>
          </Dropdown.Toggle>
          <BsThreeDots className="ms-5" size={17} />
          <PiNotePencilDuotone className="ms-3" size={15} />
          <RiArrowUpWideLine className="ms-3" size={20} />
        </div>
        <Dropdown.Menu>
          <Dropdown.Item>Hello there!</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default MessageComp;
