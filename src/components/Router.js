import { Switch, Route, Redirect } from "react-router-dom";
import { PersonalInformationForm } from "../features/personalInformation/PersonalInformation";
import SharingFolders from "../features/sharingFolders/SharingFolders";
import { FingerPrint } from "./fingerPrint/FingerPrint";
import { EndProcess } from "./endProcess/EndProcess";
import Systems from "../features/systems/Systems";

export const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <PersonalInformationForm />} />
        <Route exact path="/folders" render={() => <SharingFolders />} />
        <Route exact path="/systems" render={() => <Systems />} />
        <Route exact path="/fingerPrint" render={() => <FingerPrint />} />
        <Route exact path="/finish" render={() => <EndProcess />} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
