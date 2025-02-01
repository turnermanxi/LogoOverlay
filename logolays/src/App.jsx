import './App.css';
import { Logoscene } from './logo';
import { Instagramscene } from './instagramscene';
import { Tiktokscene } from './tiktokscene';
import { useState, useEffect } from 'react';

function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(true);
      setTimeout(() => setVisible(false), 5000); // Popups visible for 5 seconds
    }, 150000); // Popups appear every 15 seconds for testing

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

export default App;