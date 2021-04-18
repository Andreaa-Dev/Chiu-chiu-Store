import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/Navbar";
import MainPage from "./Components/MainPage";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import ProductInf from "./Components/ProductInf";

function App(props) {
  const url =
    "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list";
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const data = await axios.get(url, {
      headers: {
        "x-rapidapi-key": "e048a2bb38msh4903349d7d318cap14fb18jsn21b392f9c7b3",
        "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
        useQueryString: true,
      },
    });
    setData(data.data.results);
    console.log(data.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/products">
          <Products data={data} />
        </Route>
        <Route exact path="/productinf/:id">
          <ProductInf data={data} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
