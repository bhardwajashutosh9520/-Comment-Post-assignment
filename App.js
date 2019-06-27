import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './component/post';
import ShowComments from './component/show'

function App() {
  return (
    <div className="App">
      <Post />
      <ShowComments />
    </div>
  );
}
export default App;
