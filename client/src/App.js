import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import History from "./pages/History";
import Detail from "./pages/Detail";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/home"
          element={
            <>
              <PrivateRoute />
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/history"
          element={
            <>
              <PrivateRoute />
              <Header />
              <History />
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <>
              <PrivateRoute />
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
