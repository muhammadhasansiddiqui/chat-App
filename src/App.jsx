import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import Chat from "./screens/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
