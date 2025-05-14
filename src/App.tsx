import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./page/Main";
import Contact from "./page/Contact";
import ComponentsLayout from "./components/Layout";
import Result from "./page/Result";

function App() {
  return (
    <>
      <Routes>
        <Route element={<ComponentsLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/result" element={<Result />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
