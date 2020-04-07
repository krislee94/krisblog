import React from "react";
import { GlobalStyle } from "./style";
import { renderRoutes } from 'react-router-config';
import { IconStyle } from "./assets/iconfont/iconfont"; //使用阿里的icon库。
import routes from './routers/index';
import { HashRouter } from 'react-router-dom';


function App () {
  return (
    <HashRouter>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      { renderRoutes (routes) }
    </HashRouter>
  )
}

export default App;
