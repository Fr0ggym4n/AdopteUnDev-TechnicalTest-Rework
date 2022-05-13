import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Dashboard from "./Components/Dashboard/Dashboard";
import Turnover from "./Components/Dashboard/Turnover";
import Offers from "./Components/Offers";

function App() {
  return (
    <>
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/turnover" element={<Turnover />} />
            <Route exact path="/" element={<Offers />} />
          </Routes>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
