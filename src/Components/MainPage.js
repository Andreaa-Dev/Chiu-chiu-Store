import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

import Pic1 from "../Img/12.jpg";
import Pic2 from "../Img/23.jpg";
import Pic3 from "../Img/34.jpg";
import Limited from "../Img/limited.png";

const Title = styled.div`
  margin-bottom: 70px;
  font-family: "Dancing Script", cursive;
  font-size: 2em;
  width: 300px;
  height: 50px;
  text-align: center;
`;

const Heading1 = styled.div`
  display: flex;
  flex-direction: table;
  justify-content: center;
  width: 20rem;
`;

const Head = styled.div`
  display: flex;
  flex-direction: table;
  justify-content: center;
  }
`;

const Name = styled.p`
  font-size: 25px;
  color: black;
  font-weight: bold;
  font-family: "Indie Flower", cursive;
  background-color: #b4aee8;
`;

function MainPage() {
  return (
    <div>
      <Head>
        <Heading1>
          <img src={Limited} alt="error" height="70px" width="70px" />
          <Title>NEW ARRIVALS !!!</Title>
        </Heading1>
      </Head>

      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Pic1}
            alt="error"
            height="950px"
          />
          <Carousel.Caption>
            <Name>GIRL DAY</Name>
            <Name> "New collection"</Name>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Pic2}
            alt="error"
            height="950px"
          />
          <Carousel.Caption>
            <Name> DAY DREAMER</Name>
            <Name>"Spring is around conner"</Name>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Pic3}
            alt="error"
            height="950px"
          />
          <Carousel.Caption>
            <Name>PRINCESS BELLE</Name>
            <Name>"Beauty and the Beast"</Name>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MainPage;
