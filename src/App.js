import React from "react";
// Imported React router dom
import Create from "./Components/CRUD/Create";
import { Routes, Route } from "react-router-dom";
import Read from "./Components/CRUD/Read";
import UpdateData from "./Components/UpdateData";

function App() {
  return (
    <Routes>
      <Route index element={<Create />} />
      <Route path="/read" element={<Read />} />
      <Route path="/update" element={<UpdateData />} />
    </Routes>
  );
}

export default App;
