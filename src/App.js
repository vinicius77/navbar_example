import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarExample from "./components/NavbarExample";

function App() {
  return (
    <React.Fragment>
      <NavbarExample />
      <div className="container">
        <h4>
          Just make sure that you really want to hide the cursor because it can
          be really annoying. (UX good practices 😃)
        </h4>
      </div>
    </React.Fragment>
  );
}

export default App;
