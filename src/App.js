import React from 'react';
import Img1 from './image/image.jpg' 
import Header from './component/common/header/Header'
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Header />
      <img src={Img1} alt="height:50%" />
    </div>
    
  );
}

export default App;
