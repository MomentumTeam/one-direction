import { Switch, Route, Redirect } from "react-router-dom";
import { PersonalInformationForm } from "../features/personalInformation/PersonalInformation";
import  SharingFolders  from "../features/sharingFolders/SharingFolders";

export const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <PersonalInformationForm />} />
        <Route exact path="/folders" render={() => <SharingFolders/>} />
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
