import React, { useEffect, useState } from 'react';
import StimsTableContainer from './containers/BatchesTableContainer';
import { connect } from 'react-redux';
import { batchStimsOperations } from './duck/index';
import LoadingSpinner from '../common/components/LoadingSpinner';
import PropTypes from 'prop-types'
import Search from '../Dashboard/components/Search'

function Batches({ getBatchesData, loading, reportStatsData, completedStudies, liveStudies, onSearchByIdChange }) {
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    if (!initialized) {
      const data = {}
      getBatchesData(data);
    }
    setInitialized(true)

  });

  return (
    <React.Fragment>
      {!initialized ? <LoadingSpinner /> :
        <div className="stims">
          <div className="dashboard__filter-container">
            <div className="dashboard__filter-container--item">
              <label>Search by Id</label>
              <Search placeholder="Search by ID" className="form-control dashboard__filter-container--item--search" onChange={(e) => onSearchByIdChange(e)} />
            </div>
            <div className="dashboard__filter-container--item">
              <label>Search by Name</label>
              <Search className="form-control dashboard__filter-container--item--search" />
            </div>
          </div>
          <div className="stims__table-container">
            <StimsTableContainer />
          </div>
        </div>
      }
    </React.Fragment>
  );
}

function countNumberOfX(data, type) {
  const amount = data.filter(item => item[type] === true)
  return amount.length
}


function mapDispatchToProps(dispatch) {
  return {
    getBatchesData: (data) => dispatch(batchStimsOperations.getBatchesData(data)),
    onSearchByIdChange: (e) => dispatch(batchStimsOperations.onSearchByIdChange(e))
  };
}

function mapStateToProps(state) {
  return ({
    reportStatsLoading: state.batchStimsReducer.reportStatsLoading,
    reportStatsData: state.batchStimsReducer.reportStatsData,
    completedStudies: countNumberOfX(state.batchStimsReducer.batchData, 'completed'),
    liveStudies: countNumberOfX(state.batchStimsReducer.batchData, 'live')

  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Batches);

Batches.propTypes = {
  getBatches: PropTypes.func,

};
