import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home";
import { PortifolioHome } from "./pages/PortifolioHome";

function App() {
  return (
    <BrowserRouter>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortifolioHome />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
