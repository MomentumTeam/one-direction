import { Switch, Route, Redirect } from "react-router-dom";
import { PersonalInformationForm } from "../features/personalInformation/PersonalInformation";
import  SharingFolders  from "../features/sharingFolders/SharingFolders";
import  Systems  from "../features/systems/Systems";

export const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <PersonalInformationForm />} />
        <Route exact path="/folders" render={() => <SharingFolders/>} />
        <Route exact path="/network" render={() => <Systems/>} />
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
