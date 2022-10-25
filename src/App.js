import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Hobbies from "./components/Hobbies";
import AboutMe from "./components/AboutMe";
import NotFound from "./components/NotFound";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
