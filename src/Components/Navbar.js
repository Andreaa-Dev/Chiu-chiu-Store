import styled from "styled-components";

import Logo from "../Img/Nav.jpg";
import Heart from "../Img/heart.png";
import Search from "../Img/search.png";
import User from "../Img/user.png";
import Cart from "../Img/cart.png";

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px auto 30px;
`;

const SmallNav = styled.div`
  display: flex;
  flex-direction: table;
  justify-content: space-around;
  margin-top: 5px;
  width: 300px;
  height: 50px;
`;

const MiniNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Navbar() {
  return (
    <Nav>
      <img src={Logo} alt="error" height="170px" width="250px" />
      <SmallNav>
        <MiniNav>
          <img src={Search} alt="error" height="25px" width="25px" />
          <p>Search</p>
        </MiniNav>

        <MiniNav>
          <img src={Heart} alt="error" height="25px" width="25px" />
          <p>Love</p>
        </MiniNav>
        <MiniNav>
          <img src={User} alt="error" height="25px" width="25px" />
          <p>Sign in</p>
        </MiniNav>
        <MiniNav>
          <img src={Cart} alt="error" height="25px" width="25px" />
          <p>Shopping bag</p>
        </MiniNav>
      </SmallNav>
    </Nav>
  );
}

export default Navbar;
