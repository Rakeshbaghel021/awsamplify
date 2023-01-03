import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Trade from "./pages/Trades";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/trade" element={<Trade />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
