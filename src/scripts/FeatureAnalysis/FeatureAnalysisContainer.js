import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { kpiOperations } from '../Kpi/duck/index';
import { featureAnalysisOperations } from './duck/index';
import PropTypes from 'prop-types';
import PrettyDropdown from '../common/components/PrettyDropdown';
import Image from '../common/components/Image';
import LoadingSpinner from '../common/components/LoadingSpinner';
import Video from '../common/components/Video';
import classNames from 'classnames';
import MiniCard from '../common/components/MiniCard';
import Linegraph from '../AttentionReport/components/Graph/Graph';
import Utils from '../common/utils/Utils';
import Table from './components/Table';
import Button from '../common/components/Button';


class FeatureAnalysis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      media: [{ name: 'Feature Analysis' }, { name: 'View Order' }, { name: 'Stim Source' }],
      loaded: false
    };
  }

  componentDidMount() {
    const { studyId, cellId, stepId, stimId } = this.props.match.params;
    this.props.fetchFeatureData({ studyId, cellId, stepId, stimId });
    this.props.fetchKpiGraphData({ studyId, cellId, stepId, stimId });
  }

  componentDidUpdate(prevProps) {
    const { filter } = this.props;
    if (filter !== prevProps.filter) {
      this.setState({ loaded: false })
    }
  }

  onLoad = () => {
    this.setState({ loaded: true });
  }



  render() {
    const { loading, graphData, graphLoading, featureData, downloadFeatureReport, downloadParticipantData } = this.props;
    const { studyId, cellId, stepId, stimId } = this.props.match.params;
    const { loaded } = this.state;
    const { stim_name } = featureData;
    if (loading) {
      return <LoadingSpinner />
    }

    const imageOrVideo = featureData.stim_type === 'video' ?
      <Video
        className="visuals__video-container"
        videoSource={featureData.stim_source}
        onLoadStart={this.onLoad}
      /> :
      <Image
        onLoad={this.onLoad}

        imageClass={classNames('kpi__image-container', { 'large': this.props.isLargeImage })}
        source={featureData[this.props.filter]
        }
      />;


    return (
      <div className="kpi">
        <h2 className="kpi__heading">{stim_name} </h2>

        <div className="kpi__table-graph-container">
          <div className="kpi__table-container">
            <h3 className="kpi__item-heading">Attention Metrics</h3>

            <Table
              featureData={featureData}
            />
          </div>


          <div className="attention-report__graph-container">
            <h3 className="kpi__item-heading">Attention Curve</h3>

            <div className="linegraph__container">
              <Linegraph
                graphData={graphData}
                loading={graphLoading}
              />
            </div>
          </div>
        </div>


        <div className="kpi__image-container-wrapper">
          <div className="kpi__image-dropdown-container">
            <div className="kpi__title-dropdown-container">
              <h3 className="kpi__item-heading">Attention Visuals</h3>
              <PrettyDropdown title="Feature Analysis"
                onSelectItem={(filter) => this.props.setFeatureAnalysisFilter(filter)}
                options={this.state.media.map(option => option.name)}
              />
            </div>
            <div className="full-width" style={{ display: !loaded ? "block" : "none" }}>
              <LoadingSpinner />
            </div>
            <div style={{ display: loaded ? "block" : "none" }}>
              {imageOrVideo}
            </div>

          </div>

          <div className={classNames("kpi__header-section-container", { 'large': this.props.isLargeImage })}>
            <MiniCard
              value={Number(featureData.stim_data.panelist_viewed_percent).toFixed(1)}
              title="Percent Viewed"
              suffix="%"
            />
            <MiniCard
              value={Utils.DelimitNumbers(Number(featureData.stim_data.avg_stim_dwell_time).toFixed(3))}
              title="Average Dwell Time"
              suffix="s"
            />

            <div className="button-container">
              <Button
                buttonClass="button-primary with-margin"
                text="Download Participant Data" handleClick={() => downloadParticipantData(studyId, cellId, stepId, 'DOWNLOAD')}
                title="Download questionnaire data."

              />
              <Button
                buttonClass="button-primary with-margin"
                text="Download Feature Data"
                handleClick={() => downloadFeatureReport(studyId, cellId, stepId, stimId, 'DOWNLOAD')}
                title="Download eye tracking data for each AOI."

              />
            </div>

          </div>
        </div>
      </div >

    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeatureData: (studyId, cellId, stepId, stimId) => (dispatch(featureAnalysisOperations.fetchFeatureData(studyId, cellId, stepId, stimId))),
    setFeatureAnalysisFilter: (filter) => dispatch(featureAnalysisOperations.setFeatureAnalysisFilter(filter)),
    fetchKpiGraphData: (cellId, stepId, studyId, stimId) => (dispatch(kpiOperations.fetchKpiGraphData(cellId, stepId, studyId, stimId))),
    fetchFeatureRawData: (cellId, stepId, studyId, stimId) => (dispatch(kpiOperations.fetchFeatureRawData(cellId, stepId, studyId, stimId))),
    downloadFeatureReport: (cellId, stepId, studyId, stimId, download) => (dispatch(featureAnalysisOperations.fetchFeatureRawData(cellId, stepId, studyId, stimId, download))),
    downloadParticipantData: (studyId, cellId, stepId, download) => (dispatch(kpiOperations.getParticipantReportData(studyId, cellId, stepId, download))),

  };
};

const sortFilter = (filter) => {
  switch (filter) {
    case 'Feature Analysis':
      return filter = 'feature_analysis_source';
    case 'View Order':
      return filter = 'view_order_source';
    case 'Stim Source':
      return filter = 'stim_source';
    default:
      return filter = 'feature_analysis_source';
  }
};

const isHeightGreaterThanWidth = (data) => {
  const height = data.stim_height;
  const width = data.stim_width;
  return height > width ? true : false;
}


const mapStateToProps = (state) => {

  return {
    featureData: state.featureData.featureData,
    loading: state.featureData.loading,
    filter: sortFilter(state.featureData.filter),
    isLargeImage: isHeightGreaterThanWidth(state.featureData.featureData),
    graphData: state.kpiReducer.graphData,
    graphLoading: state.kpiReducer.graphLoading,
    featureRawData: state.featureData.rawFeatureData,
    participantReportData: state.kpiReducer.participantReportData,
    participantReportLoading: state.kpiReducer.participantReportLoading



  };
};
FeatureAnalysis.propTypes = {
  fetchFeatureData: PropTypes.func,
  loading: PropTypes.bool,
  match: PropTypes.shape({
    params: PropTypes.shape({
      cellId: PropTypes.string,
      stepId: PropTypes.string,
      studyId: PropTypes.string,
      stimId: PropTypes.string
    }),
  }),

};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeatureAnalysis));

