import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/add/Add";
import List from "./pages/list/List";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Orders from "./pages/orders/Orders";
const App = () => {
  const url = "https://foodbackend-drkc.onrender.com";
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/order" element={<Orders url={url} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
