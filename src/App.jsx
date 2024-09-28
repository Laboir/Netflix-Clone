import { Route, Routes } from "react-router-dom";
// import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import LoginPage from "./components/Login/LoginPage";
import Player from "./components/Player";

function App() {
  return (
    <div className="w-scren">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;
