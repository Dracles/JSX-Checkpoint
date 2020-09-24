import React from "react";
import "./App.css";
import One from "./img/S-L.jpg";
import Vid from "./video/MHA.mp4";

function App() {
  return (
    <div className="App">
      <div className="Image">
        <h1 className="title red">Anis</h1>
        <img className="img" src={One} />
        <img className="img" src="/img/Solo.jpg" />
      </div>
      <div className="Vid">
        <video
          src={Vid}
          style={{ width: "100%", height: "100%" }}
          type="video/mp4"
          controls
        />
      </div>
    </div>
  );
}

export default App;
