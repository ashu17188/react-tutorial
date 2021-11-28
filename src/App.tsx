import React from "react";
import Signup from "./Components/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import ForgotPassword from "./Components/ForgotPassword";
import UpdateProfile from "./Components/UpdateProfile";
import CalculatorMain from "./Components/Calculator/CalculatorMain";
import "./App.scss";
function App() {
  return (
    <Container fluid="md">
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
      <CalculatorMain />
    </Container>
  );
}

export default App;
