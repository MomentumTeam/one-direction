import { Switch, Route, Redirect } from "react-router-dom";
import { AppForm } from "../features/personalInformation/PersonalInformation";

export const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <AppForm />} />
        <Route exact path="/folders" render={() => <div>Folders</div>} />
        <Route exact path="/network" render={() => <div>Network</div>} />
        <Route
          exact
          path="/fingerPrint"
          render={() => <div>FingerPrint</div>}
        />
        <Route exact path="/finish" render={() => <div>Finish</div>} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
