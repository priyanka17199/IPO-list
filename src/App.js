import logo from "./logo.svg";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
