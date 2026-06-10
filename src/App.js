import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Trainer from "./pages/novaAtvPoke";
import Cacapokemom from "./pages/cacapokemom";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Trainer />} />
                <Route path="/cacapokemom/:id" element={<Cacapokemom />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App; 