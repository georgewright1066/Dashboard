import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { kpiOperations } from './duck/index';
import PropTypes from 'prop-types';
import PrettyDropdown from '../common/components/PrettyDropdown';
import Image from '../common/components/Image';
import Video from '../common/components/Video';
import LoadingSpinner from '../common/components/LoadingSpinner';
import classNames from 'classnames';
import CardAndTableContainer from './containers/CardAndTableContainer';
import Linegraph from '../AttentionReport/components/Graph/Graph';
import Button from '../common/components/Button';

class Kpi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      media: [{ name: 'Heatmap' }, { name: 'Stim Source' }, { name: 'Stim Analysis' }],
      loaded: false
    };
  }

  componentDidMount() {
    const { studyId, cellId, stepId, stimId } = this.props.match.params;
    const { fetchKpiData, fetchKpiGraphData } = this.props;
    fetchKpiData({ studyId, cellId, stepId, stimId });
    fetchKpiGraphData({ studyId, cellId, stepId, stimId });

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
    const { loading, graphData, graphLoading, kpiData, filter, isLargeImage, setKpiFilter, downloadStimReport, downloadParticipantData } = this.props;
    const { studyId, cellId, stepId, stimId } = this.props.match.params;
    const { loaded } = this.state

    if (loading) {
      return <LoadingSpinner />
    }
    const headings = kpiData.norm_data;

    const imageOrVideo = kpiData.stim_type === 'video' ?
      < Video
        className="visuals__video-container"
        videoSource={kpiData.stim_source}
        onLoadStart={this.onLoad}
      /> :
      <Image
        onLoad={() => this.onLoad()}
        imageClass={classNames('kpi__image-container', { 'large': isLargeImage })}
        source={kpiData[filter]
        }
      />;
    return (
      <div className="kpi">

        <h2 className="kpi__heading">{kpiData.stim_name} : {kpiData.stim_type}</h2>
        <div className="kpi__table-graph-container">

          <CardAndTableContainer
            stimName={kpiData.stim_name}
            stimType={kpiData.stim_type}
            headings={headings}
            kpiData={kpiData}
            graphData={graphData}
            graphLoading={graphLoading}
          />


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
              <PrettyDropdown value="Heatmap"
                onSelectItem={(filter) => setKpiFilter(filter)}
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

          <div className={classNames("kpi__header-section-container", { 'large': isLargeImage })}>
            <div className="button-container">
              <Button
                buttonClass="button-primary with-margin"
                text="Download Participant Data"
                handleClick={() => downloadParticipantData(studyId, cellId, stepId, 'DOWNLOAD')}
                title="Download questionnaire data."
              />
              <Button
                buttonClass="button-primary with-margin"
                text="Download Stim Data"
                handleClick={() => downloadStimReport(studyId, cellId, stepId, stimId, 'DOWNLOAD')}
                title="Download eye tracking data for each stimilus."
              />

            </div>
          </div>
        </div>
      </div >
    );
  }
}

const sortFilter = (filter) => {
  switch (filter) {
    case 'Heatmap':
      return filter = 'heatmap_source';
    case 'Stim Source':
      return filter = 'stim_source';
    case 'Stim Analysis':
      return filter = 'analysis_source';
    default:
      return filter = 'heatmap_source';
  }
};

const isHeightGreaterThanWidth = (data) => {
  const height = data.stim_height;
  const width = data.stim_width;
  return height > width ? true : false;
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchKpiData: (cellId, stepId, studyId, stimId) => (dispatch(kpiOperations.fetchKpiData(cellId, stepId, studyId, stimId))),
    setKpiFilter: (filter) => dispatch(kpiOperations.setKpiFilter(filter)),
    fetchKpiGraphData: (cellId, stepId, studyId, stimId) => (dispatch(kpiOperations.fetchKpiGraphData(cellId, stepId, studyId, stimId))),
    fetchKpiRawData: (cellId, stepId, studyId, stimId) => (dispatch(kpiOperations.fetchKpiRawData(cellId, stepId, studyId, stimId))),
    downloadStimReport: (cellId, stepId, studyId, stimId, download) => (dispatch(kpiOperations.fetchKpiRawData(cellId, stepId, studyId, stimId, download))),
    downloadParticipantData: (studyId, cellId, stepId, download) => (dispatch(kpiOperations.getParticipantReportData(studyId, cellId, stepId, download))),

  };
};

const mapStateToProps = (state) => {
  return {
    kpiData: state.kpiReducer.kpiData,
    loading: state.kpiReducer.loading,
    filter: sortFilter(state.kpiReducer.filter),
    isLargeImage: isHeightGreaterThanWidth(state.kpiReducer.kpiData),
    graphData: state.kpiReducer.graphData,
    graphLoading: state.kpiReducer.graphLoading,
    kpiRawData: state.kpiReducer.rawKpiData,
    participantReportData: state.kpiReducer.participantReportData,
    participantReportLoading: state.kpiReducer.participantReportLoading
  };
};


Kpi.propTypes = {
  loading: PropTypes.bool,
  panelist_total_count: PropTypes.number,
  avg_page_dwell_time: PropTypes.number,
  avg_stim_dwell_time: PropTypes.number,
  panelist_viewable_count: PropTypes.number,
  panelist_viewable_percent: PropTypes.number,
  panelist_viewed_count: PropTypes.number,
  panelist_viewed_percent: PropTypes.number,
  stim_name: PropTypes.string,
  stim_type: PropTypes.string,
  filter: PropTypes.string,
  setKpiFilter: PropTypes.func,
  fetchKpiData: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      cellId: PropTypes.string,
      stepId: PropTypes.string,
      studyId: PropTypes.string
    }),
  }),

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Kpi));
