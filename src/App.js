import React from "react";
import { GlobalStyle } from "./style";
import { IconStyle } from "./assets/iconfont/iconfont";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <header className="App-header">
        <i className="iconfont">&#xe62b;</i>
      </header>
    </div>
  );
}

export default App;
