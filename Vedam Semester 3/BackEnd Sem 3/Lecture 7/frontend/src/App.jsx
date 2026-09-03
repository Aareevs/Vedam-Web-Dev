import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./SignUp";
import Login from "./Login";
import Api from "./assets/Api";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;