import React, { Component } from 'react';
import StimsTableContainer from './containers/StimsTableContainer';
import { connect } from 'react-redux';
import { stimsOperations } from './duck/index';
import LoadingSpinner from '../common/components/LoadingSpinner';
import PropTypes from 'prop-types'
import Search from '../Dashboard/components/Search'
import DropDown from '../EditStudyDetails/components/DropDown';
import { addAllType } from '../Dashboard/DashboardContainer';
import ToolTip from '../common/components/Tooltip';

class Stims extends Component {

  componentDidMount() {
    this.props.getStims();
  }

  onChange = (e) => {
    const { setStimFilter } = this.props
    const target = e.target.value
    setStimFilter(target, 'search')
  }

  onSelectItem = (item, type) => {
    const { setStimFilter } = this.props
    setStimFilter(item, type)
  }

  onAscendingClick = (item) => {
    const type = 'ASCENDING';
    const { onAscendingOrDecendingButtonClick } = this.props;
    onAscendingOrDecendingButtonClick(item.name.toLowerCase(), type);
  }

  onDecendingClick = (item) => {
    const type = 'DECENDING';
    const { onAscendingOrDecendingButtonClick } = this.props;
    onAscendingOrDecendingButtonClick(item.name.toLowerCase(), type);
  }

  render() {
    const { loading, mediaTypes, stimTypes } = this.props;
    if (loading) {
      return <LoadingSpinner />
    }
    return (
      <div className="stims dashboard">
        <div className="dashboard__filter-container">
          <div className="dashboard__filter-container--item">
              <label>Search</label>
              <Search placeholder="Search stimuli" className="form-control dashboard__filter-container--item--search" onChange={this.onChange} />
          </div>
          <div className="dashboard__filter-container--item">
            <ToolTip content="Filter by media channel." />
            <label>Media</label>
            <DropDown className="left" value="Select" onSelectItem={(e) => this.onSelectItem(e, 'media')} options={mediaTypes.map((item => item.description))} />
          </div>
          <div className="dashboard__filter-container--item">
            <ToolTip content="Filter by stim types." />
            <label>Stim Types</label>
            <DropDown className="left" value="Select" onSelectItem={(e) => this.onSelectItem(e, 'stimType')} options={stimTypes.map((item => item.description))} />
          </div>
        </div>
        <div className="stims__table-container">
          <StimsTableContainer onAscendingClick={this.onAscendingClick} onDecendingClick={this.onDecendingClick} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    environmentTypes: state.stimsReducer.environmentTypes,
    mediaTypes: addAllType(state.stimsReducer.mediaTypes),
    stimTypes: addAllType(state.stimsReducer.stimTypes),
    languageTypes: state.stimsReducer.languageTypes,
    loading: state.stimsReducer.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getStims: () => dispatch(stimsOperations.getStimsData()),
    setStimFilter: (filter, currentSort) => dispatch(stimsOperations.setStimFilter(filter, currentSort)),
    setMediaFilter: (filter) => dispatch(stimsOperations.setStimFilter(filter)),
    onAscendingOrDecendingButtonClick: (item, type) => dispatch(stimsOperations.sortAscendingData(item, type)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stims);

Stims.propTypes = {
  getStims: PropTypes.func,
};
