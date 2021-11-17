import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailCointaner";
import CartContainer from "./Components/Cart/CartContainer";
import CheckoutContainer from "./Components/Checkout/CheckoutContainer";
import { CustomProvider } from "./Context/CartContext";

import "./App.css";

function App() {
  return (
    <>
      <CustomProvider>
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
              <CartContainer />
            </Route>
            <Route path="/checkout" exact>
              <CheckoutContainer />
            </Route>
          </Switch>
        </BrowserRouter>
      </CustomProvider>
    </>
  );
}

export default App;
