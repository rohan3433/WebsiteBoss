import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateWebsite from "./pages/CreateWebsite";
import Website from "./pages/Website";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateWebsite />} />
        <Route path="/website/:id" element={<Website />} /> 
      </Routes>
    </Router>
  );
}
