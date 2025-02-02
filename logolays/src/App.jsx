import './App.css';
import { Logoscene } from './logo';
import { Instagramscene } from './instagramscene';
import { Tiktokscene } from './tiktokscene';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TestPage from './TestPage.jsx';

function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='Canvass'>
        <a href="https://smokescreensmells.netlify.app">
          <Logoscene />
        </a>
      </div>

      <div className="canvas2">
        <a href="https://www.tiktok.com/@_chrislrey">
          <Instagramscene />
        </a>
        <div className={`popup popup1 ${visible ? 'show' : ''}`}>@_chrislrey</div>
      </div>

      <div className="canvas3">
        <a href="https://www.instagram.com/_chrislrey_/#">
          <Tiktokscene />
        </a>
        <div className={`popup popup2 ${visible ? 'show' : ''}`}>@_chrislrey_</div>
      </div>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/testpage" element={<TestPage />} />
    </Routes>
  );
}

export default App;
