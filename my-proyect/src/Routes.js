// Routes.js
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import First from "./asset/pages/First";
import Second from "./asset/pages/Second";
import Post_Get from "./asset/pages/Post_Get";

{/*import PaginaWeb from './asset/pages/PaginaWeb';*/ }


const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path={["/", "/home"]} component={First} />
        <Route exact path={["/second"]} component={Second} />
        <Route exact path={["/post_get"]} component={Post_Get} />
     {  /* <Route exact path={["/paginaweb"]} component={PaginaWeb} />*/ }
        {/* NOT FOUND */}
        <Route exact path={["*"]}>
          <Redirect to="/" />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
