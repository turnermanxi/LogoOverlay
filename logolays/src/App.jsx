
import './App.css'
import { Logoscene } from './logo'
import { Instagramscene } from './instagramscene'
import { Tiktokscene } from './tiktokscene'

function App() {

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
      </div>
      <div className="canvas3">
        <a href="https://www.instagram.com/_chrislrey_/#">
        <Tiktokscene />
        </a>
      </div>
    </>
  )
}

export default App
