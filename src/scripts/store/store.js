import { createStore, applyMiddleware, combineReducers } from 'redux';
import { combineForms } from 'react-redux-form';
import thunkMiddleware from 'redux-thunk';
import contactUsReducer from '../ContactUs/duck/reducers';
import isolationData from '../Studies/duck/reducers';
import kpiReducer from '../Kpi/duck/reducers';
import attentionReportReducer from '../AttentionReport/duck/reducers';
import featureAnalysisReducer from '../FeatureAnalysis/duck/reducers';
import studyData from '../Dashboard/duck/reducers';
import userData from '../MyDetails/duck/reducers';
import demographicReducer from '../Demographics/duck/reducers';
import filter from '../Filter/duck/reducers';
import survey from '../Survey/duck/reducers';
import cellStepManagement from '../CellStepManagement/duck/reducers';
import overview from '../Overview/duck/reducers';
import modal from '../Modal/duck/reducers';
import editAudience from '../EditAudience/duck/reducers';
import editStudyDetails from '../EditStudyDetails/duck/reducers';
import stimsReducer from '../Stims/duck/reducers'
import batchStimsReducer from '../Batches/duck/reducers'
import homeReducer from '../NewHome/duck/reducers'
import links from '../Links/duck/reducers'
import files from '../Files/duck/reducers'


const initialUserState = {
  username: '',
  password: '',
  first_name: '',
  lastName: '',
  location: '',
  email: '',
  jobTitle: '',
  phoneNumber: ''
};

const recoverUserPassword = {
  email: '',
};

const contactUs = {
  email: '',
  message: ''
};

const createPanel = {
  name: '',
  code: '',
  success_redirect_url: '',
  screenout_redirect_url: '',
  quota_full_redirect_url: '',
  participant_insert_parameter: ''
}
  ;
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({
  studyData: studyData,
  userData: userData,
  isolationData: isolationData,
  contactUsReducer: contactUsReducer,
  kpiReducer: kpiReducer,
  featureData: featureAnalysisReducer,
  attentionReport: attentionReportReducer,
  demographicData: demographicReducer,
  cellStepManagement: cellStepManagement,
  overview: overview,
  filter: filter,
  survey: survey,
  modal: modal,
  editAudience: editAudience,
  editStudyDetails: editStudyDetails,
  stimsReducer: stimsReducer,
  links: links,
  homeReducer: homeReducer,
  batchStimsReducer,
  files,
  forms: combineForms({
    user: initialUserState,
    recoverPassword: recoverUserPassword,
    contactUs: contactUs,
    audience: createPanel

  }),

}), applyMiddleware(thunkMiddleware));


export default store;
