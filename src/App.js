// import CCoffee from "./components/CCoffee";
import ContactForm from "./components/ContactForm";
import FCoffee from "./components/FCoffee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/contactForm" element={<ContactForm />} />
          <Route path="/coffee" element={<FCoffee firstName="Jena" />} />
        </Routes>
        {/*  <CCoffee firstName="Jena" /> */}
      </BrowserRouter>
    </>
  );
}
export default App;
