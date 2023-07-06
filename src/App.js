import "./App.css";
import Header from "./components/header";
import AppRoutes from "./routes";
import AuthProvider from "./contexts/AuthProvider";
import MovieProvider from "./contexts/MovieProvider";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div style={{ marginLeft: "70px" }}>
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
