import React from 'react'
import Home from './component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Designe from './component/Designe'
import Header from './component/Header';
import ResumePage from './component/ResumePage';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
        <Route path="/desgine/:id" element={<Designe />}/>
        <Route path="/resume/:id" element={<ResumePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
