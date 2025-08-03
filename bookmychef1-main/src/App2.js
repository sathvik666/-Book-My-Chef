import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';
import Navbar from './Navbar';
import iam from './logo1.jpg';
import dolby from './music.mp3';
import green from './green.mp4'
import black from './black.mp4'
import componentc from './componentc';
export const usercontext=React.createContext();

const App=()=>{
  return (
      <div>
        <center>
          <usercontext.Provider value={"Rushikesh"}>
            <componentc/>
          </usercontext.Provider>
        </center>
        <img src={iam} alt='hi' height={250} width='auto'></img>
        
        <audio controls>
          <source src={dolby} />
        </audio>
        <video width="320" height="250" controls>
          <source src={green} type='video/mp4'/>
        </video>
        <video width="320" height="250" controls>
          <source src={black} type='video/mp4'/>
        </video>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard/:name" element={<Dashboard/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        </BrowserRouter>
      </div>
  );
}
export default App;
