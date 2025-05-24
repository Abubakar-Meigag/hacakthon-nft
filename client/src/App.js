import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import History from "./pages/History";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/home"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/history"
          element={
            <>
              <Header />
              <History />
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <>
              <Header />
              <Detail />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
