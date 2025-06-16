import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CardInfoPage from "./pages/CardInfoPage";
import FavoritePage from "./pages/FavoritePage";
import "./styles/global.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/photo/:id" element={<CardInfoPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
    </Router>
  );
};

export default App;
