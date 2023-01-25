import { Route, Routes } from "react-router-dom";
import Complain from "./pages/Complain/Complain";
import Statistics from "./pages/Statistics/Statistics";
import Status from "./pages/Status/Status";
import Thanks from "./pages/Thanks/Thanks";
import AdminLogin from "./Components/AdminLogin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Complain />} />
        <Route exact path="/statistics" element={<Statistics />} />
        <Route exact path="/status" element={<Status />} />
        <Route exact path="/thanks" element={<Thanks />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </div>
  );
}

export default App;
