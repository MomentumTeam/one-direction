import { Switch, Route, Redirect } from "react-router-dom";
import { PersonalInformationForm } from "../features/personalInformation/PersonalInformation";
import SharingFolders from "../features/sharingFolders/SharingFolders";
import { FingerPrint } from "./fingerPrint/FingerPrint";
import { EndProcess } from "./endProcess/EndProcess";
import Systems from "../features/systems/Systems";
import Faq from "./faq/Faq";
import { useSelector, useDispatch } from "react-redux";
import { selectLoading, selectUserObj, getUser } from "../features/user/userSlice";

export const AppRouter = () => {
  const user = useSelector(selectUserObj);

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/personalInformation"
          render={() => <PersonalInformationForm user={user} />}
        />
        <Route exact path="/folders" render={() => <SharingFolders />} />
        <Route exact path="/systems" render={() => <Systems user={user} />} />
        <Route exact path="/fingerPrint" render={() => <FingerPrint />} />
        <Route exact path="/finish" render={() => <EndProcess />} />
        <Route exact path="/faq" render={() => <Faq />} />
        <Redirect exact to="/" />
      </Switch>
    </div>
  );
};
