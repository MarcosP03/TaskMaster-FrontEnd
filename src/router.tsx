import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "@/layouts/AuthLayout";
import LoginView from "@/views/auth/LoginView";
import RegisterView from "@/views/auth/RegisterView";
import ForgotPasswordView from "@/views/auth/ForgotPasswordView";
import AppLayout from "./layouts/AppLayout";
import DashboardView from "./views/DashboardView";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginView />} />
          <Route path="/auth/register" element={<RegisterView />} />
          <Route
            path="/auth/forgot-password"
            element={<ForgotPasswordView />}
          />
        </Route>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboardView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
