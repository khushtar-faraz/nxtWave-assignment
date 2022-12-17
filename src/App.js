import "./App.css";
import { Routes, Route } from "react-router-dom";
import ResourceDetailsScreen from "./screens/ResourceDetailsScreen";
import AddItemScreen from "./screens/AddItemScreen";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ResourceDetailsScreen/>
        }
      />
      <Route
        path="/addItem"
        element={
         <AddItemScreen/>
        }
      />
    </Routes>
  );
}

export default App;
