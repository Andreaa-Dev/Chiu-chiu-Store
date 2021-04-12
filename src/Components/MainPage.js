import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

import Phone from "../Img/Phone.png";
import Email from "../Img/email.png";
import Instagram from "../Img/ins.png";
import Youtube from "../Img/yt.png";
import Twitter from "../Img/tw.png";
import Facebook from "../Img/fb.png";

import Pic1 from "../Img/Pic1.jpg";
import Pic4 from "../Img/Chanel.jpg";
import Pic3 from "../Img/Pic2.jpg";

import Limited from "../Img/limited.png";

const Contact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 150px;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 30vw;
  margin: auto;
`;

const Title = styled.div`
  margin-bottom: 70px;
  font-family: "Dancing Script", cursive;
  font-size: 2em;
  width: 300px;
  height: 50px;
  text-align: center;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

const Heading1 = styled.div`
  display: flex;
  flex-direction: table;
  justify-content: center;
  width: 1300px;
`;

const Head = styled.div`
  display: flex;
  flex-direction: table;
  justify-content: center;
  }
`;

const Button = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  display: block;
  padding: 0.5em;
  &:hover {
    background: #eac8af;
`;

function MainPage() {
  const [products, ] = useState(false);

  return (
    <div>
      <Head>
        <Heading>
          <Button
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            HOME
          </Button>
          <div style={{ display: open ? "block" : "none" }}>
            <p>On Sale</p>
            <p>All products</p>
            <p>Bronzers</p>
            <p>Lipstick</p>
          </div>
        </Heading>
        <Heading1>
          <img src={Limited} alt="error" height="70px" width="70px" />
          <Title>NEW ARRIVALS !!!</Title>
        </Heading1>
      </Head>

      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={Pic1}
            alt="error"
            height="750px"
            width="550px"
          />
          <Carousel.Caption>
            <h3>NARSICO</h3>
            <p>Narciso Rodriguez Narciso Poudrée.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={Pic4}
            alt="error"
            height="750px"
            width="650px"
          />
          <Carousel.Caption>
            <h3>CHANEL</h3>
            <p>CHANEL Coco Mademoiselle Eau de Parfum Spray</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Pic3}
            alt="error"
            height="750px"
            width="650px"
          />
          <Carousel.Caption>
            <h3>ThE BODY SHOP</h3>
            <p>The Body Shop British Rose Eau De Toilette, 100ml</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
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
    </div>
  );
}

export default MainPage;
