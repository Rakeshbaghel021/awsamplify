import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Trade from "./pages/Trades/Trades";
import AddTrade from "./pages/Trades/addTrades";
import EditTrade from "./pages/Trades/editTrade";
import ViewTrade from "./pages/Trades/ViewTrade";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/trades/:id" element={<ViewTrade />} />

          <Route exact path="/trade/add" element={<AddTrade />} />
          <Route exact path="/trade/edit/:id" element={<EditTrade />} />

          <Route exact path="/trade" element={<Trade />} />

          <Route exact path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
