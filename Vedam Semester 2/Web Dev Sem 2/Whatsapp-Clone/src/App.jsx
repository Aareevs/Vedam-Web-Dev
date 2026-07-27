import Home from "./components/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Chat from "./components/Chat";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Navigate to="/chat/demo-user" replace />} />
        <Route path="/chat/:uniqueId" element={<Chat />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;


