import TestEpics from './test.epics';
import UserEpics from './user.epics';
import AuthEpics from './auth.epics';
import AuctionEpics from './auction.epics';
import ApplicationEpics from './application.epics';


export default class RootEpics {
    getEpics = () => [
      ...new TestEpics().getEpics(),
      ...new UserEpics().getEpics(),
      ...new AuthEpics().getEpics(),
      ...new AuctionEpics().getEpics(),
      ...new ApplicationEpics().getEpics(),
    ]
}
