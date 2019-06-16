import { combineReducers } from 'redux';
import UserDetailsReducer from './signIn';
import InvestigationReportReducer from './investigationReport';
import createInvestigationReducer from './createInvestigation';
import newInvestigationListReducer from './newInvestigationList'

const rootReducer = combineReducers({
  userContext: UserDetailsReducer,
  investigationReport :InvestigationReportReducer,
  createInvestigation : createInvestigationReducer,
  newInvestigationList : newInvestigationListReducer
});

export default rootReducer;
