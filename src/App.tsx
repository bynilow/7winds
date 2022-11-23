import React from 'react';
import Divider from './components/Divder/Divider';
import Header from './components/Header/Header';
import WorkSpace from './components/Main/WorkSpace';
import Nav from './components/Nav/Nav';
import logo from './logo.svg';
import "./styles/main.sass"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="work_space">
        <Nav />
        <WorkSpace />
      </div>
    </div>
  );
}

export default App;
