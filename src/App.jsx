// App.js
import React from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NewsList category="general" />
    </div>
  );
}

export default App;
