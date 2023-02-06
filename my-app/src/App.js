import './App.css';
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/landing.js"
import BeforeLogin from "./pages/beforeLogin/beforeLogin.js"
import image from "./images/zombie_wallpaper2.jpeg"


function App() {
  return (
    <>
      <div className="background-img" style={{ backgroundImage: `url(${image})` }}>
        <h1>Zombie Survival</h1>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/" element={<BeforeLogin />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
