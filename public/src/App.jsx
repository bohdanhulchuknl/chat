import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Chat, Login, Register, SetAvatar } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
