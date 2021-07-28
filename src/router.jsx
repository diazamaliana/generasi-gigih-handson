import Search from "./pages/Search";
import Trending from "./pages/Trending";
import { Switch, Route } from "react-router-dom";

const routeList = [
    {
        path: "/trending",
        component: <Trending />
    },

    {
        path: "/",
        exact: true,
        component: <Search />
    },


]

const Routes = () => {
    return (
        <Switch>
          {routeList.map(({ component, ...rest }) => (
            <Route {...rest}>{component}</Route>
          ))}
        </Switch>
      );
}
export default Routes;