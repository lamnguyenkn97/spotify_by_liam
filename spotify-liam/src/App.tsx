import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./components/layout";
import {PremiumPage} from "./pages/premiumPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route path='/premium' element = {<PremiumPage />}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
