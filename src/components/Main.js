import { Route, Switch } from "react-router-dom";
import CV from "../pages/CV";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";

const Main = () => {
  return (
    <main className=" bg-gradient-lightblue-purple">
      <article>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cv" component={CV} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="*" component={Error404} />
        </Switch>
      </article>
    </main>
  );
};

export default Main;
