import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
