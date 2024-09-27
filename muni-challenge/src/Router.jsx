import { Redirect, Route, Switch } from "wouter";
import { Auth } from "./components/auth/auth";
import { Tramites } from "./components/tramites/tramites";
import { useSessionStore } from "@/stores/sessionStore";
import { ROLES } from "@/constants/ROLES";
import { Dashboard } from "@/components/dashboard/darshboard";
import { BecaDeportiva } from "@/components/tramites/deportes/beca-deportiva/beca-deportiva";

const AdminRoute = ({ children }) => {
  const { user } = useSessionStore((state) => state);

  console.log(user);

  return user?.role === ROLES.ADMIN ? children : <Redirect to="/tramites" />;
};

export const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useSessionStore((state) => state);

  return isAuthenticated ? children : <Redirect to="/login" />;
};

export const Router = () => {
  return (
    <Switch>
      <AdminRoute path="/dashboard">
        <Dashboard />
      </AdminRoute>

      <Route path="/auth">
        <Auth />
      </Route>

      <Route path="/tramites">
        <Tramites />
      </Route>

      <Route path="/tramites/deportes/beca">
        <BecaDeportiva />
      </Route>


      <Route path="*">
        <Redirect to="/tramites" />
      </Route>
    </Switch>
  );
};
