/* eslint-disable */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {batchStimsOperations} from '../../Batches/duck/index'
import BatchKpi from '../BatchReportContainer'


const mapStateToProps = (state) => {
  console.log(state.batchStimsReducer.visualsData)
  return {
    visualsLoading: state.batchStimsReducer.visualsLoading,
    visualsData: state.batchStimsReducer.visualsData
  };

};

const mapDispatchToProps  = (dispatch) => {
  return {
  }
}


const BatchKpiContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(BatchKpi));

export default BatchKpiContainer;

