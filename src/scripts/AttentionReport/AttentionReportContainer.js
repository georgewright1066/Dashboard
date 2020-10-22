import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { attentionReportOperations } from './duck/index';
import PropTypes from 'prop-types';
import FeatureTable from './components/FeatureAttention/Table';
import AttentionTable from './components/AttentionReportTable/Table';
import PrettyDropdown from '../common/components/PrettyDropdown';
import Visuals from './components/Visuals/visuals';
import LineGraphContainer from './components/Graph/Graph';
import Utils from '../common/utils/Utils';
import LoadingSpinner from '../common/components/LoadingSpinner';



class AttentionReportContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      environment: [{ name: 'Avg Dwell Time', id: 0 }, { name: 'Percent Viewed', id: 1 }],
      visuals: ['Original', 'View Order', 'Feature Analysis', 'Heatmap'],
      norms: ['Brand Norm', 'Brand Category Norm', 'Base Norm', 'Ad Category Norm'],
      graph: ['Line']
    };
  }

  componentDidMount() {
    this.props.fetchDemographicData(this.props.match.params.id);
  }


  render() {
    if (this.props.loading) {
      return <LoadingSpinner />;

    }



    const normValues = Object.values(this.props.dropDowns.attention.data.norm_types);
    return (
      <div className="attention-report">
        <div className="attention-report__graph-container">
          <div className="attention-report__header">
            <div className="attention-report__heading-container">
              <h2>Overall Attention</h2>
            </div>
            <div className="attention-report__dropdown-container">
              <PrettyDropdown title="Brand Norm"
                onSelectItem={(filter) => this.props.setAttentionFilter(filter)}
                options={normValues.map(option => option)} />
            </div>
          </div>
          <AttentionTable
            data={this.props.attentionData}
            loading={this.props.hasAttentionLoaded}
            filter={this.props.attentionFilter} />

        </div>
        <div className="attention-report__graph-container">
          <div className="attention-report__header">
            <div className="attention-report__heading-container">
              <h2>Visuals</h2>
            </div>
            <div className="attention-report__dropdown-container">
              <PrettyDropdown title="Original" onSelectItem={(filter) => this.props.setVisualsFilter(filter)} options={this.state.visuals.map(option => option)} />
            </div>
          </div>
          <Visuals
            loading={this.props.haveVisualsLoaded}
            data={this.props.visualData}
            filter={this.props.visualFilter}
          />

        </div>
        <div className="attention-report__graph-container">
          <div className="attention-report__header">

            <div className="attention-report__heading-container">
              <h2>Feature Attention</h2>
            </div>
            <div className="attention-report__dropdown-container">
              <PrettyDropdown title="Avg stim dwell time"
                onSelectItem={(filter) => this.props.setFeatureFilter(filter)}
                options={this.state.environment.map(option => option.name)} />
              <PrettyDropdown
                title="Brand Norm"
                onSelectItem={(filter) => this.props.updateFeatureNorms(filter)}
                options={normValues.map(option => option)} />
            </div>
          </div>
          <FeatureTable
            data={this.props.featureReportData}
            loading={this.props.featureReportLoading}
            filter={this.props.featureFilter}
          />

        </div>
        <div className="attention-report__graph-container">
          <div className="attention-report__header">
            <div className="attention-report__heading-container">
              <h2>Panelist Avg Total Dwell Time Count Graph</h2>
            </div>
            <div className="attention-report__dropdown-container">
              <PrettyDropdown title="Dwell time" onSelectItem={() => console.log('nothing to see here')}
                options={this.state.graph.map(option => option)} />
            </div>
          </div>
          <div className="linegraph__container">

            <LineGraphContainer
              loading={this.props.loading}
              graphData={this.props.graphData}
            />

          </div>

          {/* <a href={this.props.csvData}></a> */}
        </div>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFeatureFilter: (filter) => dispatch(attentionReportOperations.setFeatureFilter(filter)),
    updateFeatureNorms: (filter) => dispatch(attentionReportOperations.updateFeatureNorms(filter)),
    setAttentionFilter: (filter) => dispatch(attentionReportOperations.updateAttentionValues(filter)),
    setVisualsFilter: (filter) => dispatch(attentionReportOperations.setVisualsFilter(filter)),
    fetchDemographicData: (studyId) => dispatch(attentionReportOperations.fetchDemographicData(studyId)),

  };
};


const sortFilter = (filter) => {
  switch (filter) {
    case 'Feature name':
      return filter = 'feature_name';
    case 'Avg stim dwell time':
      return filter = 'avg_stim_dwell_time';
    case 'Avg page dwell time':
      return filter = 'avg_page_dwell_time';
    case 'Avg Dwell Time':
      return filter = 'avg_stim_dwell_time';
    case 'Percent Viewed':
      return filter = 'panelist_viewed_percent';
    default:
      return filter = 'avg_stim_dwell_time';
  }
};

const sortVisualFilter = (filter) => {
  switch (filter) {
    case 'Original':
      return filter = 'original_url';
    case 'View Order':
      return filter = 'vieworder_url';
    case 'Feature Analysis':
      return filter = 'featureanalysis_url';
    case 'Heatmap':
      return filter = 'heatmap_url';
    default:
      return filter = 'original_url';
  }
};


const mapStateToProps = (state) => {
  return {
    whichStudiesAreChecked: state.isolationData.whichStudiesAreChecked,
    dropDowns: state.attentionReport.attentionReportData,
    featureReportData: state.attentionReport.featureReportData,
    featureFilter: sortFilter(state.attentionReport.featureFilter.filter),
    featureReportLoading: state.attentionReport.featureLoading,
    attentionData: state.attentionReport.attentionReportData.attention,
    attentionReportLoading: state.attentionReport.loading,
    hasAttentionLoaded: state.attentionReport.loading,
    attentionFilter: sortFilter(state.attentionReport.filter.filter),
    visualData: state.attentionReport.visualData,
    haveVisualsLoaded: state.attentionReport.visualLoading,
    visualFilter: sortVisualFilter(state.attentionReport.visualFilter.filter),
    graphData: state.attentionReport.graphData.response,
    loading: state.attentionReport.graphLoading,
    csvData: Utils.ConvertArrayOfObjectsToCSV(state.attentionReport.graphData.response, state.attentionReport.graphLoading, 'graph'),
    demographicData: Utils.ConvertArrayOfObjectsToCSV(state.attentionReport.demographicData, state.attentionReport.demographicLoading, 'demographic'),
    visualLoading: state.attentionReport.visualLoading


  };
};


AttentionReportContainer.propTypes = {
  setAttentionFilter: PropTypes.func,
  visualFilter: PropTypes.string,
  visualData: PropTypes.object,
  haveVisualsLoaded: PropTypes.bool,
  csvData: PropTypes.string,
  setFeatureFilter: PropTypes.func,
  updateFeatureNorms: PropTypes.func,
  featureFilter: PropTypes.string,
  featureReportLoading: PropTypes.bool,
  featureReportData: PropTypes.object,
  loading: PropTypes.bool,
  graphData: PropTypes.object,
  attentionData: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  hasAttentionLoaded: PropTypes.bool,
  attentionFilter: PropTypes.string,
  setVisualsFilter: PropTypes.func,
  fetchDemographicData: PropTypes.func,
  attention: PropTypes.shape({
    data: PropTypes.shape({
      norm_types: PropTypes.object,
    }),
  }),
  dropDowns: PropTypes.object
};




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AttentionReportContainer));

