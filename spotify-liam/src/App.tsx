import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./components/layout";
import {PremiumPage} from "./pages/premiumPage";
import {SupportPage} from "./pages/supportPage";
import {HomePage} from "./pages/homePage";
import {SignUpPage} from "./pages/signUpPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element = {<HomePage />}/>
              <Route path='/premium' element = {<PremiumPage />}/>
              <Route path='/support' element = {<SupportPage />}/>
              <Route path='/signup' element = {<SignUpPage />}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
