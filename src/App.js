import "./App.css";
import Header from "./components/header";
import AppRoutes from "./routes";
import AuthProvider from "./contexts/AuthProvider";
import MovieProvider from "./contexts/MovieProvider";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <AuthProvider>
          <BrowserRouter>
            <Header />
          </BrowserRouter> 
          <div style={{ marginLeft: "70px" }}>
            <AppRoutes />
          </div>
        </AuthProvider>
      </MovieProvider>
    </div>
  );
}

export default App;
