import React from "react";
import styled from "styled-components";

import Phone from "../Img/Phone.png";
import Email from "../Img/email.png";
import Instagram from "../Img/ins.png";
import Youtube from "../Img/yt.png";
import Twitter from "../Img/tw.png";
import Facebook from "../Img/fb.png";

const Contact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 150px;
  font-family: "Indie Flower", cursive;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 30vw;
  margin: auto auto 15px;
`;

const Background = styled.div`
  background-color: #dddddd;
  s
`;

function Footer() {
  return (
    <Background>
      <Contact>
        <div>
          <b>About </b>
          <p>Brand</p>
          <p>Store location</p>
        </div>
        <div>
          <b>Customer care</b>
          <p>FAQs</p>
          <p>Shipping and return</p>
          <p>Terms and Conditions</p>
          <p>Privacy policy</p>
        </div>
        <div>
          <div>
            <b>Contact us</b>
          </div>
          <img src={Phone} alt="error" height="25px" width="25px" />
          <p>+358 44 222 999</p>
          <img src={Email} alt="error" height="25px" width="25px" />
          <p>ChiuchiuStore@gmail.com</p>
        </div>
      </Contact>
      <Icon>
        <img src={Facebook} alt="error" height="25px" width="25px" />
        <img src={Instagram} alt="error" height="25px" width="25px" />
        <img src={Youtube} alt="error" height="25px" width="25px" />
        <img src={Twitter} alt="error" height="25px" width="25px" />
      </Icon>
    </Background>
  );
}

export default Footer;
