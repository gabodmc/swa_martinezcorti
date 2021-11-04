import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailCointaner'
import Cart from "./Components/Cart/Cart";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <br />
        <Switch>
          <Route path="/" exact>
            <ItemListContainer />
          </Route>
          <Route path="/category/:categoryId" exact>
            <ItemListContainer />
          </Route>
          <Route path="/category/:categoryId" exact>
            <ItemListContainer />
          </Route>
          <Route path="/category/:categoryId" exact>
            <ItemListContainer />
          </Route>
          <Route path="/item/:id" exact>
            <ItemDetailContainer />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
