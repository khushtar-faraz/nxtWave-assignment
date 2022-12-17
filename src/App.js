import { Routes, Route } from "react-router-dom";
import ResourceDetailsScreen from "./screens/ResourceDetailsScreen";
import AddItemScreen from "./screens/AddItemScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ResourceDetailsScreen />} />
        <Route path="/addItem" element={<AddItemScreen />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
