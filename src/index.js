import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import cadVideo from './pages/cadastro/Video'
import cadCategoria from './pages/cadastro/Categoria'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={cadVideo} />
      <Route path="/cadastro/categoria" component={cadCategoria} />
      <Route component={()=> (<div> 404</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
