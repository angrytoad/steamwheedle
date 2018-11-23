import TestEpics from './test.epics';


export default class RootEpics {
    getEpics = () => [
      ...new TestEpics().getEpics(),
    ]
}
