import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        {/*
          '/about/:name' 보다 /about이 위에 올라온다면
            name을 입력해줘도 /about 라우트가 작동하기 때문에
            params값이 표시가 안됨
         */}
        <Switch>
          <Route path="/about/:name" component={About} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
