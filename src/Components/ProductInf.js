import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import styled from "styled-components";

import { Dropdown } from "react-bootstrap";
import { DropdownToggle } from "react-bootstrap/DropdownToggle";
import { DropdownItem } from "react-bootstrap/DropdownItem";
import Button from "react-bootstrap/Button";

function ProductInf(props) {
  const { data } = props;
  const param = useParams();
  console.log("param", param);
  const [infor, setInfor] = useState([]);

  const url = `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail?lang=en&productcode=${param.id}&country=asia2`;

  const fetchData = async () => {
    const data = await axios.get(url, {
      headers: {
        "x-rapidapi-key": "e048a2bb38msh4903349d7d318cap14fb18jsn21b392f9c7b3",
        "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
        useQueryString: true,
      },
    });
    setInfor(data.data.product);
    console.log("data", data.data.product);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const item = data.find((item) => {
    if (param.id === item.defaultArticle.code) return true;
  });
  console.log("item", item);

  const Font = styled.div`
    font-family: "Indie Flower", cursive;
  `;

  const BigItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 25px;
  `;

  const Title = styled.p`
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
  `;

  const Delivery = styled.div`
    display: inline-block;
    font-weight: bold;
    margin: 5px 150px;
  `;

  const Policy = styled.div`
    text-align: center;
    font-color: #f4f9f9;
  `;

  const SubTitle = styled.div`
    font-weight: bold;
    margin-right: 5px;
    display: inline-block;
  `;

  return (
    <div>
      {item && infor && (
        <Font>
          <BigItem>
            <img
              src={item.images[0].url}
              alt="error"
              style={{ marginBottom: "20rem", marginLeft: "10rem" }}
            />
            <div style={{ width: "50%" }}>
              <Title> {infor.name}</Title>
              <div>
                <SubTitle>Price: </SubTitle>
                {item.price.value}
                <p>$</p>
              </div>

              <SubTitle>Description:</SubTitle>
              {infor.description}

              <div>
                <SubTitle>Category: </SubTitle>
                {item.categoryName}
              </div>
              <div>
                <SubTitle style={{ marginTop: "2rem" }}>Material:</SubTitle>
                {infor.materialDetails[0].name}
              </div>
              <Dropdown>
                <Dropdown.Toggle
                  variant="secondary"
                  id="dropdown-basic"
                  style={{ marginTop: "2rem" }}
                >
                  Choose size
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {item.variantSizes.map((itemsize) => {
                    return (
                      <Dropdown.Item href="#/action-1">
                        {itemsize.filterCode}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
              <Button
                variant="secondary"
                size="lg"
                block
                style={{
                  marginTop: "3rem",
                  width: "4rem",
                }}
              >
                ADD
              </Button>
            </div>
          </BigItem>

          <div>
            <Delivery>DETAIL</Delivery>
            <Delivery>DELIVERY AND PAYMENT</Delivery>
            <Delivery>PRODUCT BACKGROUND </Delivery>
          </div>
          <div>
            <Policy>
              Members receive free standard shipping and free returns upon
              purchase for at least $25
            </Policy>
          </div>
        </Font>
      )}
    </div>
  );
}

export default ProductInf;
