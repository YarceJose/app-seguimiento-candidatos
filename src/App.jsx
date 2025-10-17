import "./App.css";
import Encabezado from "./components/Encabezado";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Encabezado />
      <Dashboard />
      <Login />
    </div>
  );
}

export default App;
