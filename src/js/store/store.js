import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { applyMiddleware, createStore } from 'redux';
import appReducer from './reducers/root.reducers';
import RootEpics from './epics/root.epics';

const epicMiddleware = createEpicMiddleware();
const Store = createStore(appReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(combineEpics(...new RootEpics().getEpics()));

export default Store;
