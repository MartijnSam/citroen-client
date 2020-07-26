import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage";
import Over from "./pages/Over";
import Ervaringen from "./pages/Ervaringen";
import Contact from "./pages/Contact";
import Fotos from "./pages/Fotos";
import Taarten from "./pages/Taarten";
import Borrelplanken from "./pages/Borrelplanken";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="fill">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/over" component={Over} />
          <Route exact path="/borrelplanken" component={Borrelplanken} />
          <Route exact path="/taarten" component={Taarten} />
          <Route exact path="/ervaringen" component={Ervaringen} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/fotos" component={Fotos} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
