
import './App.css';
import { Logoscene } from './logo';
import { Instagramscene } from './instagramscene';
import { Tiktokscene } from './tiktokscene';
import { useState, useEffect } from 'react';

function App() {
  const [visible, setVisible] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => (prev ? null : 'instagram'));
      setTimeout(() => setVisible(null), 10000);
    }, 180000);
    
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
        {visible === 'instagram' && <div className="popup show">@_chrislrey</div>}
      </div>
      
      <div className="canvas3">
        <a href="https://www.instagram.com/_chrislrey_/#">
          <Tiktokscene />
        </a>
        {visible === 'tiktok' && <div className="popup show">@_chrislrey_</div>}
      </div>
    </>
  );
}

export default App;