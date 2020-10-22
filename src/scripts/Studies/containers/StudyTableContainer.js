import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import StudyTable from '../components/StudyTable';
import { studiesOperations } from '../duck/index';
import { kpiOperations } from '../../Kpi/duck';
import { featureAnalysisOperations } from '../../FeatureAnalysis/duck';

const mapDispatchToProps = (dispatch) => {
  return {
    isChecked: (studyId, cellId, stepId, stimulusId) => (dispatch(studiesOperations.addOrRemoveStudy(studyId, cellId, stepId, stimulusId))),
    clearCheckedValues: () => (dispatch(studiesOperations.clearCheckedStudies())),
    checkAll: ({ index, studyId, cell_id, history }, stimsInStep) => (dispatch(studiesOperations.checkAllinStep({ index, studyId, cell_id, history }, stimsInStep))),
    goToAttentionReportPage: (whichStudiesAreChecked, { history, match }) => (dispatch(studiesOperations.goToAttentionReportPage(whichStudiesAreChecked, { history, match }))),
    downloadParticipantData: (studyId, cellId, stepId, download) => (dispatch(kpiOperations.getParticipantReportData(studyId, cellId, stepId, download))),
    downloadStepData: (studyId, cellId, stepId, download) => (dispatch(kpiOperations.downloadStepData(studyId, cellId, stepId, download))),
    downloadStimReport: (cellId, stepId, studyId, stimId, download) => (dispatch(kpiOperations.fetchKpiRawData(cellId, stepId, studyId, stimId, download))),
    downloadFeatureData: (cellId, stepId, studyId, stimId, download) => (dispatch(featureAnalysisOperations.fetchFeatureRawData(cellId, stepId, studyId, stimId, download))),

  };
};

const mapStateToProps = (state) => {
  return {
    isolationData: state.isolationData.data.data,
    loading: state.isolationData.loading,
    tickCheckBox: state.isolationData.checked

  };
};

const StudyTableContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(StudyTable));

export default StudyTableContainer;
