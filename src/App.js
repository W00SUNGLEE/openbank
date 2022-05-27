import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RootPage from "./page/RootPage";

const App = () => {
  return (
  <BrowserRouter>
      <Routes>
        <Route path='' element={<RootPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;