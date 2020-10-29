import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Pages/Main/Main";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Wallpaper from "./Pages/Wallpaper/Wallpaper";
import WallpaperDetail from "./Pages/WallpaperDetail/WallpaperDetail";
import WorksList from "./Pages/WorksList/WorksList";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route
            exact
            path="*"
            component={() => (
              <>
                <Navbar />
                <Route exact path="/" component={Main} />
                <Route exact path="/Wallpaper" component={Wallpaper} />
                <Route exact path="/WorksList" component={WorksList} />
                <Route
                  exact
                  path="/WallpaperDetail"
                  component={WallpaperDetail}
                />
              </>
            )}
          />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
