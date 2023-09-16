import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Employes from "./components/Employes";
import Nav from "./components/Nav";

function App() {
  let employes = [
    {
      name: "Employe 1",
      id: 1,
    },
    {
      name: "Employe 2",
      id: 2,
    },
    {
      name: "Employe 3",
      id: 3,
    },
    {
      name: "Employe 4",
      id: 4,
    },
    {
      name: "Employe 5",
      id: 5,
    },
    {
      name: "Employe 6",
      id: 6,
    },
  ];
  return (
    <>
      <BrowserRouter>
        <Nav employes={employes} />
        <Routes>
          <Route path="/employes/:id" element={<Employes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
