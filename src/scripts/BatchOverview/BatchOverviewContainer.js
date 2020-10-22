import React from 'react';
// import propTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { batchStimsOperations } from '../Batches/duck/index';
import Widget from '../Overview/components/widget';
import LoadingSpinner from '../common/components/LoadingSpinner';
import studiesImage from '../../assets/images/studies.svg';
import WidgetItemWithButton from '../Overview/components/widgetItemWithButton';
import ButtonWithTooltip from '../common/components/ButtonWithToolTip';
import downloadsImage from '../../assets/images/download.svg';

class BatchOverview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      batchId: props.match.params.id.split('&').shift(),
      vendorId: props.match.params.id.split('&').pop()
    }
  }

  componentDidMount() {
    const { getBatchStimsData } = this.props;
    const { batchId, vendorId } = this.state;

    const data = {
      internal_batch_id: batchId,
      internal_vendor_id: vendorId
    }

    getBatchStimsData(data)

  }

  render() {
    const { batchStims, batchStimsLoading, downloadParticipantData, downloadFeatureData, downloadStimData } = this.props;
    const { batchId, vendorId } = this.state;

    if (batchStimsLoading) {
      return (<LoadingSpinner />)
    }
    const numberOfStims = batchStims[0].stim_data.length;
    return (
      <div className="batch-overview">
        <Widget
          title="Batch Details"
          className="widget widget--survey"
          source={studiesImage}
          showButton={false}
          content="Batches Overview."
        >

          <WidgetItemWithButton
            title="Number of Stims"
            link={`/my_batches/batch_overview/${batchId}&${vendorId}/batch_report`}
            text="Go to Stims"
            source={studiesImage}
            value={numberOfStims}
          />

        </Widget>
        <Widget
          title="Downloads"
          description="Some description goes here about the audience"
          className="widget widget--audience"
          source={downloadsImage}
          showButton={false}
          disableButton={false}
          content="Download questionnaire and eye-tracking data."

        >
          <div className="vertical-container">
            <ButtonWithTooltip
              buttonClass="button-primary with-margin button-tooltip"
              text="Download Participant Data"
              handleClick={() => downloadParticipantData(vendorId, batchId)}
              content="Download questionnaire data."

            />
            <ButtonWithTooltip
              buttonClass="button-primary with-margin button-tooltip"
              text="Download Stim Data"
              handleClick={() => downloadStimData(vendorId, batchId)}
              content="Download eye-tracking data for each stimulus."

            />
            <ButtonWithTooltip buttonClass="button-primary with-margin button-tooltip"
              text="Download Feature Data"
              handleClick={() => downloadFeatureData(vendorId, batchId)}
              content="Download eye-tracking data for each AOI."

            />
          </div>
        </Widget>





      </div>

    );
  }
}


const mapStateToProps = (state) => {
  return {
    batchStims: state.batchStimsReducer.batchStims,
    batchStimsLoading: state.batchStimsReducer.batchStimsLoading,
    batchTableHeadings: state.batchStimsReducer.batchTableHeadings

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBatchStimsData: (data) => dispatch(batchStimsOperations.getBatchStimsData(data)),
    downloadParticipantData: (vendorId, batchId) => (dispatch(batchStimsOperations.downloadParticipantData(vendorId, batchId))),
    downloadFeatureData: (vendorId, batchId) => (dispatch(batchStimsOperations.downloadFeatureData(vendorId, batchId))),
    downloadStimData: (vendorId, batchId) => (dispatch(batchStimsOperations.downloadStimData(vendorId, batchId)))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BatchOverview));
