import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Trades from "./pages/Trades";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/trades" element={<Trades />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
