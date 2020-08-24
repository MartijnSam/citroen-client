import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import UnderConstruction from "./pages/UnderConstruction";

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Switch>
        <Route exact path="/" component={UnderConstruction} />
        {/* <Route exact path="/over" component={Over} />
        <Route exact path="/borrelplanken" component={Borrelplanken} />
        <Route exact path="/taarten" component={Taarten} />
        <Route exact path="/ervaringen" component={Ervaringen} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/fotos" component={Fotos} /> */}
      </Switch>
    </div>
  );
}

export default App;
