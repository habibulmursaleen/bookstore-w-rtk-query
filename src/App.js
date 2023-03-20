import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/add" element={<Add />} />
        <Route path="/books/edit/:bookId" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
