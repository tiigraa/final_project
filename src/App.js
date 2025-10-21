import React from "react";
import main from "./pages/main";
import active_sprint from './pages/active_sprint';
import tasks from './pages/tasks';

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
