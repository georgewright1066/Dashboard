import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import Utils from '../common/utils/Utils';
import { batchStimsOperations } from '../Batches/duck/index';
import Image from '../common/components/Image';
import DropDown from '../EditStudyDetails/components/DropDown';
import LoadingSpinner from '../common/components/LoadingSpinner';
import Table from './components/Table';
import MiniCard from '../common/components/MiniCard';
import ErrorWidget from '../common/components/Error';
import Linegraph from '../AttentionReport/components/Graph/Graph';
import Button from '../common/components/Button';


class BatchFeature extends React.Component {
  state = { media: ['Original', 'View Order', 'Feature Analysis'], filter: 'stim_source' }

  setFilter(filter) {
    switch (filter) {
      case 'View Order':
        filter = 'view_order_urls';
        break
      case 'Original':
        filter = 'stim_source';
        break
      case 'Feature Analysis':
        filter = 'feature_analysis_urls';
        break
      default:
        filter = 'view_order_urls';
    }
    this.setState({ filter: filter })
  }

  render() {
    const { batchesLoading, reportFeatureData, visualsData, reportFeatureLoading, reportData, reportLoading, batchGraphData, batchGraphLoading, downloadParticipantData, downloadFeatureData } = this.props;

    if (batchesLoading || reportFeatureLoading || reportLoading || batchGraphLoading) {
      return <LoadingSpinner />

    }
    const isNoReportData = reportFeatureData.data.length === 0
    return (
      <React.Fragment>
        {isNoReportData ? <ErrorWidget /> :
          <div className="batch-kpi">
            <h2 className="kpi__heading">{reportData.data[0].stim_name} : {reportData.data[0].stim_data.stim_type} : {reportData.data[0].stim_id}</h2>

            <div className="kpi__table-graph-container">

              <div className="kpi__table-container">
                <h3 className="kpi__item-heading">Attention Metrics</h3>

                {isNoReportData ? null : <Table featureData={reportFeatureData.data[0]} />}

              </div>
              <div className="attention-report__graph-container">
                <h3 className="kpi__item-heading">Attention Curve</h3>

                <div className="linegraph__container">
                  <Linegraph
                    graphData={batchGraphData}
                    loading={batchGraphLoading}
                  />
                </div>
              </div>

            </div>


            <div className="kpi__image-container-wrapper">
              <div className="kpi__image-dropdown-container">
                <div className="kpi__title-dropdown-container">
                  <h3 className="kpi__item-heading">Attention Visuals</h3>
                  <DropDown
                    onSelectItem={(filter) => this.setFilter(filter)}
                    options={this.state.media.map(option => option)}
                    value="Original "
                  />
                </div>
                {visualsData.data.map((item, index) => {
                  const isLarge = Utils.isHeightGreaterThanWidth(item, 'height', 'width');
                  return (
                    <Image
                      imageClass={classNames('kpi__image-container batch-kpi___image', { 'large': isLarge })}
                      key={index}
                      source={item[this.state.filter]['low_quality']}
                    />)
                })
                }

              </div>

              <div className={classNames("kpi__header-section-container", { 'large': this.props.isLargeImage })}>
                <MiniCard
                  value={Utils.DelimitNumbers(Number(reportData.data[0].stim_data.percent_viewable).toFixed(0))}
                  title="Percent Viewed"
                  suffix="%"
                />
                <MiniCard
                  value={Utils.DelimitNumbers(Number(reportData.data[0].stim_data.avg_viewed_time).toFixed(1))}
                  title="Average Dwell Time"
                  suffix="s"
                />
              </div>
              <div className="button-container">
                <Button
                  buttonClass="button-primary with-margin"
                  text="Download Feature Data"
                  title="Download eye tracking data for each AOI."
                  handleClick={() => downloadFeatureData(reportData.internal_vendor_id, reportData.internal_batch_id, reportData.data[0].internal_step_id, reportData.data[0].internal_stim_id, 'DOWNLOAD')}
                />
                <Button
                  buttonClass="button-primary with-margin"
                  text="Download Participant Data"
                  title="Download questionnaire data."
                  handleClick={() => downloadParticipantData(reportData.internal_vendor_id, reportData.internal_batch_id, reportData.data[0].internal_step_id, reportData.data[0].internal_stim_id, 'DOWNLOAD')}
                />

              </div>
            </div>
          </div>
        }
      </React.Fragment>
    );
  }
}




const mapStateToProps = (state) => {
  return {
    visualsLoading: state.batchStimsReducer.visualsLoading,
    visualsData: state.batchStimsReducer.visualsData,
    reportFeatureLoading: state.batchStimsReducer.reportFeatureLoading,
    reportFeatureData: state.batchStimsReducer.reportFeatureData,
    batchStims: state.batchStimsReducer.batchStims,
    batchesLoading: state.batchStimsReducer.batchesLoading,
    reportLoading: state.batchStimsReducer.reportLoading,
    reportData: state.batchStimsReducer.reportData,
    batchGraphLoading: state.batchStimsReducer.batchGraphLoading,
    batchGraphData: state.batchStimsReducer.batchGraphData
  };

};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id, vendorId, item, type) => dispatch(batchStimsOperations.onClick(id, vendorId, item, type)),
    downloadParticipantData: (cellId, stepId, studyId, stimId, download) => (dispatch(batchStimsOperations.downloadParticipantData(cellId, stepId, studyId, stimId, download))),
    downloadFeatureData: (cellId, stepId, studyId, stimId, download) => (dispatch(batchStimsOperations.downloadFeatureData(cellId, stepId, studyId, stimId, download)))

  }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BatchFeature));

