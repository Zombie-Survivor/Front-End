import './App.css';
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/landing.js"
import image from "./images/zombie_wallpaper2.jpeg"


function App() {
  return (
    <>
      <div className="background-img" style={{ backgroundImage: `url(${image})` }}>
        <Routes>
          <Route path="/landing" element={<Landing />} />

        </Routes>
      </div>

    </>
  );
}

export default App;
