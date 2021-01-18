import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import RegisterUser from "./pages/Register";
import LoginUser from "./pages/Login";
import RegisterAnimal from "./pages/AnimalForm";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/login">
          <LoginUser />
        </Route>

        <Route exact path="/register">
          <RegisterUser />
        </Route>
        <Route path="/animal-form">
          <RegisterAnimal />
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </>
  );
};

export default App;
