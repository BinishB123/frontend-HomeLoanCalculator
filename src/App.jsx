import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoanContextProvider from "./context/loanContext";
import ErrorBoundary from "./components/errorBoundary";
import ProtectedRoute from "./components/protectedRoute";
const LoginOrSignUp = lazy(() => import("./pages/signUpOrLogin"));
const HomePage = lazy(() => import("./pages/home"));

const Loader = () => (
  <div style={{ textAlign: "center", marginTop: "20%" }}>
    <h2>Loading...</h2>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <LoanContextProvider>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/*"
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<LoginOrSignUp value="login" />} />
              <Route
                path="/signup"
                element={<LoginOrSignUp value="signup" />}
              />
            </Routes>
          </Suspense>
        </LoanContextProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
