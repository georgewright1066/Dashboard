import React, { useEffect } from 'react';
import BatchTableContainer from './containers/BatchDataTableContainer';
import { connect } from 'react-redux';
import { batchStimsOperations } from '../Batches/duck/index';
import LoadingSpinner from '../common/components/LoadingSpinner';
import PropTypes from 'prop-types'
import { stimsOperations } from '../Stims/duck/index';
import Search from '../Dashboard/components/Search'
import DropDown from '../EditStudyDetails/components/DropDown';
import { addAllType } from '../Dashboard/DashboardContainer';

function BatchStims({ getBatchStimsData, batchStimsLoading, stimTypes, setStimFilter, getStims, setBatchFilter, getBatchStimsListData }) {

  useEffect(() => {
    if (batchStimsLoading) {
      return (<LoadingSpinner />)
    }
    getBatchStimsData({});
    getBatchStimsListData({})
    getStims()
  }, []);

  function onChange(e) {
    const target = e.target.value
    setBatchFilter(target, 'search')
  }

  function onSelectItem(e, type) {
    setBatchFilter(e, type)
  }

  return (
    <div className="stims">
      <div className="dashboard__filter-container">
        <div className="dashboard__filter-container--item">
          <label>Search</label>
          <Search placeholder="Search by name" className="form-control dashboard__filter-container--item--search" onChange={(e) => onChange(e)} />
        </div>
        <div className="dashboard__filter-container--item">
          <label>Stim Types</label>
          <DropDown className="left" value="Select" onSelectItem={(e) => onSelectItem(e, 'stimType')} options={stimTypes.map((item => item.description))} />
        </div>
      </div>


      <div className="stims__table-container">
        <BatchTableContainer />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    environmentTypes: state.stimsReducer.environmentTypes,
    mediaTypes: addAllType(state.stimsReducer.mediaTypes),
    stimTypes: addAllType(state.stimsReducer.stimTypes),
    loading: state.stimsReducer.loading,

  }
}


function mapDispatchToProps(dispatch) {
  return {
    getBatchStimsData: (data) => dispatch(batchStimsOperations.getBatchStimsData(data)),
    getStims: () => dispatch(stimsOperations.getStimsData()),
    setBatchFilter: (filter, currentSort) => dispatch(batchStimsOperations.setBatchFilter(filter, currentSort)),
    setMediaFilter: (filter) => dispatch(stimsOperations.setStimFilter(filter)),
    getBatchStimsListData: (data) => dispatch(batchStimsOperations.getBatchStimsList(data))

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BatchStims);

BatchStims.propTypes = {
  getBatchStims: PropTypes.func,

};
