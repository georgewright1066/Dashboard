import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Login from './Login/Login';
import ForgotPassword from './containers/ForgotPassword/ForgotPassword';
import Footer from './containers/Footer/Footer';
import MyDetails from './MyDetails/MyDetailsContainer';
import ErrorPage from './containers/ErrorPage/ErrorPage';
import Studies from './Studies/StudiesContainer';
import requireAuth from './common/hoc/RequireAuth';
import noRequireAuth from './common/hoc/NoRequireAuth';
import Signout from './components/Signout';
import Header from './components/Header';
import Kpi from './Kpi/KpiContainer';
import FeatureAnalysis from './FeatureAnalysis/FeatureAnalysisContainer';
import AttentionReport from './AttentionReport/AttentionReportContainer';
import Dashboard from './Dashboard/DashboardContainer';
import Demographics from './Demographics/DemographicsContainer';
import ScrollToTop from './common/shared/Scroll';
import ContactUs from './ContactUs/ContactUsContainer';
import NewHome from './NewHome/NewHomeContainer';
import Survey from './Survey/SurveyContainer';
import ModelContainer from './Model/ModelContainer';
import Breadcrumbs from './common/components/Breadcrumb';
import CellStepManagementContainer from './CellStepManagement/CellStepManagementContainer';
import Overview from './Overview/OverviewContainer';
import EditAudienceContainer from './EditAudience/EditAudience';
import EditStudyDetails from './EditStudyDetails/EditStudyDetailsContainer';
import Stims from './Stims/StimsContainer';
import Aoi from './Aoi/AoiContainer';
import BatchStims from './Batches/BatchesContainer';
import BatchStimList from './BatchData/BatchDataContainer';
import BatchReport from './BatchReport/BatchReportContainer';
import BatchKpi from './BatchKpi/BatchKpiContainer';
import BatchFeature from './BatchFeature/BatchFeatureContainer';
import BatchOverview from './BatchOverview/BatchOverviewContainer';
import Files from './Files/FilesContainer';
import CacheBuster from "./CacheBuster";

// import Home from './Home/HomeContainer';


function Main() {
  const userType = parseInt(localStorage.getItem('userType'));
  const homepage = userType === 1 ? Dashboard : BatchStims;
  return (
    <main>
      <Switch>
        <Route exact path='/login' component={noRequireAuth(Login)} />
        <Route path='/forgot_password' component={noRequireAuth(ForgotPassword)} />
        <Route path='/contact_us' component={requireAuth(ContactUs)} />
        <Route path='/my_details' component={requireAuth(MyDetails)} />
        <Route path='/stims/aoi/:id' component={requireAuth(Aoi)} />
        <Route path='/batch_stim_list/aoi/:id' component={requireAuth(Aoi)} />
        <Route path='/batch_stim_list' component={requireAuth(BatchStimList)} />
        <Route path='/my_batches/batch_overview/:id/batch_report/kpi' component={requireAuth(BatchKpi)} />
        <Route path='/my_batches/batch_overview/:id/batch_report/feature' component={requireAuth(BatchFeature)} />
        <Route path='/my_batches/batch_overview/:id/batch_report' component={requireAuth(BatchReport)} />
        <Route path='/my_batches/batch_overview/:id' component={requireAuth(BatchOverview)} />
        <Route path='/stims' component={requireAuth(Stims)} />
        <Route path='/my_reports' component={requireAuth(Files)} />
        <Route path='/my_studies/overview/:id/demographics' component={requireAuth(Demographics)} />
        <Route path='/my_studies/overview/:studyId/study/cell_id/:cellId/step_id/:stepId/stim_id/:stimId/feature_analysis' component={requireAuth(FeatureAnalysis)} />
        <Route path='/my_studies/overview/:studyId/study/cell_id/:cellId/step_id/:stepId/stim_id/:stimId/kpi' component={requireAuth(Kpi)} />
        <Route path="/my_studies/overview/:id/study/attention_report" component={requireAuth(AttentionReport)} />
        <Route path="/my_studies/overview/:id/survey-questions" component={requireAuth(Survey)} />
        <Route path='/my_studies/overview/:id/cell_step_management' component={requireAuth(CellStepManagementContainer)} />
        <Route path='/my_studies/overview/:id/study' component={requireAuth(Studies)} />
        <Route path='/my_studies/overview/:id/edit-details' component={requireAuth(EditStudyDetails)} />
        <Route path='/my_studies/overview/:id/edit-audience' component={requireAuth(EditAudienceContainer)} />
        <Route path='/my_studies/overview/:id' component={requireAuth(Overview)} />
        <Route path="/signout" component={requireAuth(Signout)} />
        <Route path='/lumen-research' component={() => window.location = 'https://www.lumen-research.com/'} />
        <Route path='/my_batches' component={requireAuth(BatchStims)} />
        <Route path='/my_studies' component={requireAuth(homepage)} />
        <Route path='/' component={requireAuth(NewHome)} />
        <Route path="*" component={noRequireAuth(ErrorPage)} />
        <Route path="*" component={requireAuth(ErrorPage)} />
      </Switch>
    </main>
  )
};

//<Breadcrumbs /> taken out of app for now

const App = ({ isModalOpen }) => (
    <CacheBuster>
      {({ loading, isLatestVersion, refreshCacheAndReload }) => {
        if (loading) return null;
        if (!loading && !isLatestVersion) {
          refreshCacheAndReload();
        }
        return (
      <div className="app-container">
        <Header />
        <Breadcrumbs />
        <ScrollToTop>
          {isModalOpen ? <ModelContainer /> : null}
          <Main />
        </ScrollToTop>
        <Footer />
      </div>
        );
      }}
    </CacheBuster>
);

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.filter.modalOpen
  };
};

export default withRouter(connect(mapStateToProps, null)(App));

