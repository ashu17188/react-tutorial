import React, { useReducer } from "react";
import Signup from "./Components/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import ForgotPassword from "./Components/ForgotPassword";
import UpdateProfile from "./Components/UpdateProfile";
import "./App.scss";
import { reducer, INITIAL_STATE } from "./store/reducer";
import { StoreContext } from "./store";
import NotifyMain from "./Components/Notify/NotifyMain";
function App() {
  const [globalState, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <>
      <StoreContext.Provider value={[globalState, dispatch] as any}>
        <Container fluid className="p-0">
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute
                  path="/update-profile"
                  component={UpdateProfile}
                />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </Router>
        </Container>
      </StoreContext.Provider>
      {/* <NotifyMain /> */}
    </>
  );
}

export default App;
