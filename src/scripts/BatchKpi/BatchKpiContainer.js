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
import Linegraph from '../AttentionReport/components/Graph/Graph';
import ErrorWidget from '../common/components/Error';
import Button from '../common/components/Button';
// import { kpiOperations } from '../Kpi/duck/index';


class BatchKpi extends React.Component {
  state = { media: ['Original', 'Heatmap', 'Analysis'], filter: 'stim_source', loaded: false }

  componentDidUpdate() {
    const { filter } = this.state;
    this.setState((prevState) => {
      console.log(prevState.filter, filter)
      if (filter !== prevState.filter) {
        return this.setState({ loaded: false })
      }
    })
  }

  setFilter(filter) {
    switch (filter) {
      case 'Original':
        filter = 'stim_source';
        break
      case 'Heatmap':
        filter = 'heatmap_urls';
        break
      case 'Analysis':
        filter = 'analysis_urls';
        break
      default:
        filter = 'heatmap_source';
    }
    this.setState({ filter: filter })
  }


  onLoad = () => {
    this.setState({ loaded: true });
  }



  render() {
    const { batchesLoading, reportData, visualsData, visualsLoading, reportLoading, batchGraphData, batchGraphLoading, downloadParticipantData, downloadFeatureData } = this.props;
    const { loaded } = this.state
    if (batchesLoading || reportLoading || batchGraphLoading || visualsLoading) {
      return <LoadingSpinner />
    }
    const reportDataObj = reportData.data[0];
    // const ids = queryString.parse(location.search)
    const isNoReportData = reportData.data.length === 0 || reportDataObj.stim_data.length === 0;
    return (
      <React.Fragment>
        {isNoReportData ? <ErrorWidget />
          :

          <div className="batch-kpi">
            <h2 className="kpi__heading">{reportDataObj.stim_name} : {reportDataObj.stim_data.stim_type} </h2>
            <div className="kpi__table-graph-container">

              <div className="kpi__table-container">
                <h3 className="kpi__item-heading">Attention Metrics</h3>
                <Table headings={['Metric', 'Actual', 'Norms']} reportData={reportDataObj} />

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
                <div className="kpi_images-container">


                  <div className="full-width" style={{ display: !loaded ? "block" : "none" }}>
                    <LoadingSpinner />
                  </div>
                  <div style={{ display: loaded ? "block" : "none" }}>
                    {visualsData.data.map((item, index) => {
                      const isLarge = Utils.isHeightGreaterThanWidth(item, 'height', 'width');
                      return (
                        <Image
                          imageClass={classNames('kpi__image-container batch-kpi___image', { 'large': isLarge })}
                          key={index}
                          source={item[this.state.filter]['low_quality']}
                          onLoad={this.onLoad}

                        />)
                    })
                    }
                  </div>
                </div>

              </div>

              <div className="button-container">
                <Button
                  buttonClass="button-primary with-margin"
                  text="Download Feature Data"
                  handleClick={() => downloadFeatureData(reportData.internal_vendor_id, reportData.internal_batch_id, reportDataObj.internal_step_id, reportDataObj.internal_stim_id, 'DOWNLOAD')}
                  title="Download eye tracking data for each AOI."
                />
                <Button
                  buttonClass="button-primary with-margin"
                  text="Download Participant Data"
                  handleClick={() => downloadParticipantData(reportData.internal_vendor_id, reportData.internal_batch_id, reportDataObj.internal_step_id, reportDataObj.internal_stim_id, 'DOWNLOAD')}
                  title="Download questionnaire data."
                />
              </div>
            </div>
          </div>}
      </React.Fragment>
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
    batchesLoading: state.batchStimsReducer.batchesLoading,
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



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BatchKpi));




