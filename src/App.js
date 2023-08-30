import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SociologyOptional from "./SociologyOptional";
import RegistraionPage from "./Pages/RegistraionPage";
import SociologyPage from "./Pages/SociologyPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/RegistrationPage" element={<RegistraionPage />} />
          <Route path="/SociologyPage" element={<SociologyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
