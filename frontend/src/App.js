import { Route, Routes } from "react-router-dom";
import Complain from "./pages/Complain/Complain";
import Statistics from "./pages/Statistics/Statistics";
import Status from "./pages/Status/Status";
import Thanks from "./pages/Thanks/Thanks";
import AdminLogin from "./Admin/AdminLogin";
import AdminHome from "./Admin/AdminHome";
import MyComplaints from "./Admin/MyComplaints";
import Checked from "./Admin/Checked";
import AllComplaints from "./Admin/AllComplaints";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Complain />} />
        <Route exact path="/statistics" element={<Statistics />} />
        <Route exact path="/status" element={<Status />} />
        <Route exact path="/thanks" element={<Thanks />} />
        <Route exact path="/admin" element={<AdminLogin />} />
        <Route exact path="/admin/home" element={<AdminHome />} />
        <Route exact path="/admin/myComplaints" element={<MyComplaints />} />
        <Route exact path="/admin/checkedComplaints" element={<Checked />} />
        <Route exact path="/admin/allComplaints" element={<AllComplaints />} />
      </Routes>
    </div>
  );
}

export default App;
