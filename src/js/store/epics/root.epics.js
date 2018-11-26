import TestEpics from './test.epics';
import UserEpics from './user.epics';
import AuthEpics from './auth.epics';
import AuctionEpics from "./auction.epics";


export default class RootEpics {
    getEpics = () => [
      ...new TestEpics().getEpics(),
      ...new UserEpics().getEpics(),
      ...new AuthEpics().getEpics(),
      ...new AuctionEpics().getEpics(),
    ]
}
