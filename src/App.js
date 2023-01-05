import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Trade from "./pages/Trades/Trades";
import AddTrade from "./pages/Trades/addTrades";
import EditTrade from "./pages/Trades/editTrade";
import ViewTrade from "./pages/Trades/ViewTrade";
import Login from "./pages/auth/SigninForm";
import SignUpForm from "./pages/auth/SignupForm";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/trades/:id" element={<ViewTrade />} />
          <Route exact path="/trade/add" element={<AddTrade />} />
          <Route exact path="/trade/edit/:id" element={<EditTrade />} />{" "}
          <Route exact path="/trade" element={<Trade />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/signup" element={<SignUpForm />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
