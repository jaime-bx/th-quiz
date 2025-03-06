import { Routes, Route } from "react-router";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Q1 from "./pages/Q1/Q1";
import Q2 from "./pages/Q2/Q2";
import Q3 from "./pages/Q3/Q3";
import ResultsPage from "./pages/ResultsPage/ResultsPage";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/q1" element={<Q1 />} />
      <Route path="/q2" element={<Q2 />} />
      <Route path="/q3" element={<Q3 />} />
      <Route path="/results" element={<ResultsPage />} />
    </Routes>
  );
}

export default App;
