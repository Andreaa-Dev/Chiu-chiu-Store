import styled from "styled-components";

import Logo from "../Img/Logo.jpg";
import Heart from "../Img/heart.png";
import Search from "../Img/search.png";
import User from "../Img/user.png";
import Cart from "../Img/cart.png";

import { useState } from "react";
import { Link } from "react-router-dom";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px auto 30px;
  font-family: "Indie Flower", cursive;
`;

const SmallNav = styled.div`
  display: flex;
  flex-direction: table;
  justify-content: space-around;
  margin-top: 5px;
  width: 500px;
  height: 50px;
`;

const MiniNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
`;

const SearchInput = styled.input`
  border-color: #ffffff00 #ffffff00 black #ffffff00;
  height: 50px;
  width: 400px;
`;
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <Link to="/">
        <img src={Logo} alt="error" height="200px" width="200px" />
      </Link>

      <SmallNav>
        <MiniNav>
          <DropdownButton
            menuAlign="right"
            title="Home"
            id="dropdown-menu-align-right"
            variant="secondary"
          >
            <Dropdown.Item eventKey="2">
              <Link to="/products">All products</Link>
            </Dropdown.Item>{" "}
            <Dropdown.Item eventKey="1">New</Dropdown.Item>
            <Dropdown.Item eventKey="3">Sale</Dropdown.Item>
            <Dropdown.Item eventKey="4">Last Chance</Dropdown.Item>
          </DropdownButton>
        </MiniNav>
        <MiniNav onClick={() => setOpen(true)}>
          {!open ? (
            <div>
              <img src={Search} alt="error" height="25px" width="25px" />
              <p>Search</p>
            </div>
          ) : (
            <SearchInput placeholder="Search" />
          )}
        </MiniNav>
        <MiniNav style={{ display: open && "none" }}>
          <img src={Heart} alt="error" height="25px" width="25px" />
          <p>Love</p>
        </MiniNav>
        <MiniNav style={{ display: open && "none" }}>
          <img src={User} alt="error" height="25px" width="25px" />
          <p>Sign in</p>
        </MiniNav>
        <MiniNav style={{ display: open && "none" }}>
          <img src={Cart} alt="error" height="25px" width="25px" />
          <p>Shopping bag</p>
        </MiniNav>
      </SmallNav>
    </Nav>
  );
}

export default Navbar;
