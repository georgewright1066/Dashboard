import { connect } from 'react-redux';
import {  withRouter } from 'react-router-dom';
import StudyTable from '../components/StudyTable';
import {studiesOperations } from '../duck/index';

const  mapDispatchToProps = (dispatch) => {
  return {
    isChecked : (studyId, cellId, stepId, stimulusId) => (dispatch(studiesOperations.addOrRemoveStudy(studyId, cellId, stepId, stimulusId))),
    clearCheckedValues: () => (dispatch(studiesOperations.clearCheckedStudies())),
    checkAll: ({index, studyId, cell_id, history, match}) => (dispatch(studiesOperations.checkAllinStep({index, studyId, cell_id, history, match}))),
    goToAttentionReportPage: (whichStudiesAreChecked, {history, match}) => (dispatch(studiesOperations.goToAttentionReportPage(whichStudiesAreChecked, {history, match})))

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
