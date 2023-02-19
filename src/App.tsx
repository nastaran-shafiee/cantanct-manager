import { useState } from "react";

import "./App.css";
import AddToCart from "./components/addToCart";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <h3>
          Phone Book <i className="far fa-address-book"></i>
        </h3>
      </div>
      <div className="row">
        <AddToCart />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
