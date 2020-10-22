import React from 'react';
import { connect } from 'react-redux';
import { demographicOperations } from './duck';
import StackChart from '../components/StackedBarChart/StackChart';
import Pie from '../components/Pie/Pie';
import MiniCardDownload from '../common/components/MiniCardDownload';
import { withRouter } from 'react-router-dom';
import Utils from '../common/utils/Utils';
import PropTypes from 'prop-types';
import ErrorWidget from '../common/components/Error';
import LoadingSpinner from '../common/components/LoadingSpinner';

class Demographics extends React.Component {

  componentDidMount() {
    this.props.fetchDemographicData(this.props.match.params.id);

  }

  render() {
    const { loading, demographicData } = this.props;

    if (loading) {
      return <LoadingSpinner />
    }


    const margin = { top: 20, right: 160, bottom: 35, left: 30 };

    const width = 620 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    return (
      <React.Fragment>
        {
          (demographicData[0].age_cell.length === 0) ? <ErrorWidget message="Sorry there is no data to show here."></ErrorWidget> :
            <div className="demographics">
              <div className="demographics__downloads-container">
                <MiniCardDownload
                  download={'demograpics.csv'}
                  copy="age"
                  href={Utils.ConvertArrayOfObjectsToCSV(demographicData[0].age)}
                />
                <MiniCardDownload
                  download={'demograpics.csv'}
                  copy="earnings"
                  href={Utils.ConvertArrayOfObjectsToCSV(demographicData[0].earnings)}
                />
                <MiniCardDownload
                  download={'demograpics.csv'}
                  copy="gender"
                  href={Utils.ConvertArrayOfObjectsToCSV(demographicData[0].gender)}
                />
                <MiniCardDownload
                  download={'demograpics.csv'}
                  copy="family"
                  href={Utils.ConvertArrayOfObjectsToCSV(demographicData[0].family)}
                />
              </div>
              <div className="demographics__main-container">
                <div className="demographics__graph-container">
                  Earnings
            <div className="pie-container">
                    <div id="chart"></div>
                    <svg ref={node => this.node = node} viewBox={`0, 0, ${width + 150}, ${height}`} width='100%' height='500'>
                      <Pie graphDiv='#chart' data={demographicData[0].age} legendLabel="age_group" />
                    </svg>
                  </div>
                </div>
                <div className="demographics__graph-container">
                  Earnings Cells
            <svg viewBox={`0, 0, ${width + 250}, ${height + 300}`} width='100%' height='550'>
                    <StackChart onResize={this.onResize} width={width} height={height} data={demographicData[0].age_cell} />
                  </svg>
                </div>
                <div className="demographics__graph-container">
                  <div className="pie-container">
                    Gender
              <div id="chart-1"></div>
                    <svg viewBox={`0, 0, ${width + 150}, ${height}`} width='100%' height='500'>
                      <Pie graphDiv='#chart-1' data={demographicData[0].gender} legendLabel="gender_group" />
                    </svg>
                  </div>
                </div>
                <div className="demographics__graph-container">
                  Gender Cells
            <svg viewBox={`0, 0, ${width + 250}, ${height + 300}`} width='100%' height='550'>
                    <StackChart onResize={this.onResize} width={width} height={height} data={demographicData[0].gender_cell} />
                  </svg>
                </div>
                <div className="demographics__graph-container">
                  <div className="pie-container">
                    Age
              <div id="chart-3"></div>
                    <svg viewBox={`0, 0, ${width + 150}, ${height}`} width='100%' height='500'>
                      <Pie graphDiv='#chart-3' data={demographicData[0].earnings} legendLabel="earnings_group" />
                    </svg>
                  </div>
                </div>
                <div className="demographics__graph-container">
                  Age Cells
            <div>
                    <div id="bar-label"></div>
                    <svg viewBox={`0, 0, ${width + 250}, ${height + 300}`} width='100%' height='550'>
                      <StackChart graphDiv="#bar-label" onResize={this.onResize} width={width} height={height} data={demographicData[0].earnings_cell} />
                    </svg>
                  </div>
                </div>
                <div className="demographics__graph-container">
                  <div className="pie-container">
                    Family
              <div id="chart-4"></div>
                    <svg viewBox={`0, 0, ${width + 150}, ${height}`} width='100%' height='500'>
                      <Pie graphDiv='#chart-4' data={demographicData[0].family} legendLabel="family_group" />
                    </svg>
                  </div>
                </div>
                <div className="demographics__graph-container">
                  Family Cells
            <svg viewBox={`0, 0, ${width + 250}, ${height + 300}`} width='100%' height='550'>
                    <StackChart onResize={this.onResize} width={width} height={height} data={demographicData[0].family_cell} />
                  </svg>

                </div>
              </div>
            </div>
        }
      </React.Fragment>
    );
  }
}

Demographics.propTypes = {
  loading: PropTypes.bool,
  demographicData: PropTypes.array,
  fetchDemographicData: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      experiment: PropTypes.string,
    }),
  }).isRequired,
};


const mapDispatchToProps = dispatch => ({
  fetchDemographicData: (id) => dispatch(demographicOperations.fetchDemographicData(id))

});

const mapStateToProps = (state) => {
  return {
    demographicData: state.demographicData.demographicData,
    loading: state.demographicData.loading

  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Demographics));
