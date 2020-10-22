import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { batchStimsOperations } from '../Batches/duck/index';
import LoadingSpinner from '../common/components/LoadingSpinner';
import StimTable from './components/StimTable'
import ErrorWidget from '../common/components/Error';

class BatchReport extends React.Component {

  componentDidMount() {
    const { getBatchesData, match } = this.props;
    const data = {
      internal_batch_id: match.params.id.split('&').shift(),
      internal_vendor_id: match.params.id.split('&').pop()
    }

    getBatchesData(data)

    // generateReport(data)
  }

  render() {
    const { batchesLoading, batchStims, onKpiClick, onFeatureClick, downloadParticipantData, downloadFeatureData, downloadStimData } = this.props;

    if (batchesLoading) {
      return <LoadingSpinner />
    }
    // studyId, cellId, stepId, stimId
    const internalBatchId = batchStims[0].internal_batch_id;
    const vendorId = batchStims[0].internal_vendor_id;
    const stims = batchStims[0].stim_data;
    const isNoStimsData = stims.length === 0;
    return (
      <div className="batch-report">
        {isNoStimsData ?
          <ErrorWidget /> :
          <StimTable
            onKpiClick={(internalBatchId, vendorId, item, type, stepId) => onKpiClick(internalBatchId, vendorId, item, type, stepId)}
            onFeatureClick={(internalBatchId, vendorId, item, type, stepId) => onFeatureClick(internalBatchId, vendorId, item, type, stepId)}
            internalBatchId={internalBatchId}
            vendorId={vendorId}
            stims={stims}
            loading={batchesLoading}
            downloadParticipantData={(cellId, stepId, studyId, stimId, download) => downloadParticipantData(cellId, stepId, studyId, stimId, download)}
            downloadFeatureData={(cellId, stepId, studyId, stimId, download) => downloadFeatureData(cellId, stepId, studyId, stimId, download)}
            downloadStimData={(cellId, stepId, studyId, stimId, download) => downloadStimData(cellId, stepId, studyId, stimId, download)}

          />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    visualsLoading: state.batchStimsReducer.visualsLoading,
    visualsData: state.batchStimsReducer.visualsData,
    reportLoading: state.batchStimsReducer.reportLoading,
    reportData: state.batchStimsReducer.reportData,
    batchStims: state.batchStimsReducer.batchStims,
    batchesLoading: state.batchStimsReducer.batchesLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onKpiClick: (id, vendorId, item, type, stepId) => dispatch(batchStimsOperations.onKpiClick(id, vendorId, item, type, stepId)),
    onFeatureClick: (id, vendorId, item, type, stepId) => dispatch(batchStimsOperations.onFeatureClick(id, vendorId, item, type, stepId)),
    generateReport: (data) => dispatch(batchStimsOperations.generateReport(data)),
    getBatchesData: (data) => dispatch(batchStimsOperations.getBatchesData(data)),
    downloadParticipantData: (cellId, stepId, studyId, stimId, download) => (dispatch(batchStimsOperations.downloadParticipantData(cellId, stepId, studyId, stimId, download))),
    downloadFeatureData: (cellId, stepId, studyId, stimId, download) => (dispatch(batchStimsOperations.downloadFeatureData(cellId, stepId, studyId, stimId, download))),
    downloadStimData: (cellId, stepId, studyId, stimId, download) => (dispatch(batchStimsOperations.downloadStimData(cellId, stepId, studyId, stimId, download)))


  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BatchReport));
