import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home-page/home_page";
import LoginPage from "./pages/login-page/login_page";
import SignupPage from "./pages/signup-page/signup_page";
import WelcomePage from "./pages/welcome-page/welcome_page";
import NonPrivateRoute from "./routes/NonPrivateRoutes";
import PrivateRoute from "./routes/PrivateRoutes";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/app" element={<HomePage />}></Route>
      </Route>
      <Route
        path="/signup"
        element={
          <NonPrivateRoute>
            <SignupPage />
          </NonPrivateRoute>
        }
      ></Route>
      <Route
        path="/login"
        element={
          <NonPrivateRoute>
            <LoginPage />
          </NonPrivateRoute>
        }
      ></Route>
      <Route
        path="/"
        element={
          <NonPrivateRoute>
            <WelcomePage />
          </NonPrivateRoute>
        }
      ></Route>
      <Route path="*" element={<Navigate to="/app" replace />} />
    </Routes>
  );
}

export default App;
