import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import Active_sprint from './pages/Active_sprint';
import Tasks from './pages/Tasks';

const App = () => {

  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ margin: "0 10px" }}>
            Рабочий стол
          </Link>
          <Link to="/sprint" style={{ margin: "0 10px" }}>
            Активный спринт
          </Link>
          <Link to="/tasks" style={{ margin: "0 10px" }}>
            Панель администратора
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<main />} />
          <Route path="/sprint" element={<active_sprint />} />
          <Route path="/tasks" element={<tasks />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
