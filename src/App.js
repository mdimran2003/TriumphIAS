import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RegistraionPage from "./Pages/RegistraionPage";
import SociologyPage from "./Pages/SociologyPage";
import RootLayout from "./RootLayout";
import PaymentPage from "./Pages/PaymentPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <RootLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/RegistrationPage" element={<RegistraionPage />} />
            <Route path="/SociologyPage" element={<SociologyPage />} />
            <Route path="/PaymentPage" element={<PaymentPage />} />
          </Routes>
        </RootLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
