import React from "react";

// Component imports
import NavBar from "./Components/Navbar/Navbar.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Items from "./Components/Items/Items";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <BrowserRouter basename="/tech-report-demo/">
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/store" component={Items}/>
          <Route path="/cart" component={Cart} />
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
