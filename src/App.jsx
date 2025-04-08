import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import LoginOrSignUp from "./pages/signUpOrLogin";
import HomePage from "./pages/home";
import LoanContextProvider from "./context/loanContext";

function App() {

  return (
    <>
      <BrowserRouter>
        <LoanContextProvider>
          <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route path="/login" element={<LoginOrSignUp value={"login"} />} />
            <Route
              path="/signup"
              element={<LoginOrSignUp value={"signup"} />}
            />
          </Routes>
        </LoanContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
