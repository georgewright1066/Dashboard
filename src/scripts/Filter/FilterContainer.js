import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { filterOperations } from './duck';
import CheckBox from '../common/components/Checkbox';
import Button from '../common/components/Button';

class Filter extends React.Component {
  componentDidMount() {
    this.props.fetchAgeData('age');
    this.props.fetchFamilyData('family');
    this.props.fetchEarningsData('earnings');
    this.props.fetchGenderData('gender');
  }

  handleClick(description) {
    this.props.submitFilterDetails(description);
  }

  render() {
    const { loading, genderLoading, familyLoading, earningsLoading, familyData, ageData, gender, earnings, filtersArray } = this.props;

    if (loading || genderLoading || familyLoading || earningsLoading) {
      return <div>Loading...</div>;
    }

    const filterFunc = (array, name) => {
      return array.filter(item => item.name === name).map(item => item.id);
    };

    return (
      <div className="filter">
        <Button handleClick={() => this.props.closeModal()} buttonClass="filter__exit-button" />
        <form ref={form => this.form = form}
          className="filter__table">
          <div className="filter__group-container">
            <h3>Age</h3>
            {ageData.map((item, index) => [<div className="filter__group-item-container" key={100 + index}>
              <CheckBox
                checked={filterFunc(filtersArray, 'age_group_ids').includes(item.id)}
                handleClick={() => this.handleClick({
                  'id': item.id,
                  'name': 'age_group_ids'
                })}
                key={index}
                id={'age:' + item.id} />
              <label key={item.description + index}>{item.description}</label>  </div>])}
          </div>
          <div className="filter__group-container">
            <h3>Family</h3>
            {familyData.map((item, index) => [<div className="filter__group-item-container" key={100 + index}>
              <CheckBox
                checked={filterFunc(filtersArray, 'family_group_ids').includes(item.id)}
                handleClick={() => this.handleClick({
                  'id': item.id,
                  'name': 'family_group_ids'
                })}
                key={index} id={'family:' + item.id} />
              <label key={item.description + index}>{item.description}</label>
            </div>])}
          </div>
          <div className="filter__group-container">
            <h3>Earnings</h3>
            {earnings.map((item, index) => [<div className="filter__group-item-container" key={100 + index}>
              <CheckBox
                checked={filterFunc(filtersArray, 'earnings_group_ids').includes(item.id)}
                handleClick={() => this.handleClick({
                  'id': item.id,
                  'name': 'earnings_group_ids'
                })}
                key={index}
                id={'earnings:' + item.id} />
              <label key={item.description + index}>{`£${item.description}k`}</label>
            </div>])}
          </div>
          <div className="filter__group-container">
            <h3>Gender</h3>

            {gender.map((item, index) => [<div className="filter__group-item-container" key={100 + index}>
              <CheckBox
                checked={filterFunc(filtersArray, 'genders_group_ids').includes(item.id)}
                handleClick={() => this.handleClick({
                  'id': item.id,
                  'name': 'genders_group_ids'
                })}
                key={index}
                id={'gender:' + item.id} />
              <label key={item.description + index}>{`${item.description}`}</label>
            </div>])}
          </div>
          <div>
            <Button handleClick={() => this.props.setFiltersToLive()} buttonClass="button-primary show-study__button" text="Submit filters" />
            <Button handleClick={() => this.props.clearFilters()} buttonClass="button-primary show-study__button" text="Clear filters" />
          </div>
        </form>
      </div>

    );
  }
}

Filter.propTypes = {
  loading: PropTypes.bool,
  fetchAgeData: PropTypes.func,
  fetchFamilyData: PropTypes.func,
  fetchEarningsData: PropTypes.func,
  fetchGenderData: PropTypes.func,
  submitFilterDetails: PropTypes.func,
  genderLoading: PropTypes.bool,
  familyLoading: PropTypes.bool,
  earningsLoading: PropTypes.bool,
  familyData: PropTypes.array,
  ageData: PropTypes.array,
  gender: PropTypes.array,
  earnings: PropTypes.array,
  filtersArray: PropTypes.array,
  setFiltersToLive: PropTypes.func,
  clearFilters: PropTypes.func,
  closeModal: PropTypes.func
};


const mapStateToProps = (state) => {
  return {
    ageData: state.filter.ageData,
    loading: state.filter.loading,
    familyData: state.filter.familyData,
    familyLoading: state.filter.familyLoading,
    earnings: state.filter.earningsData,
    earningsLoading: state.filter.earningsLoading,
    gender: state.filter.genderData,
    genderLoading: state.filter.genderLoading,
    filtersArray: state.filter.filtersArray,
    checkedItems: state.filter.checkedItems


  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAgeData: (value) => dispatch(filterOperations.fetchAgeData(value)),
    fetchFamilyData: (value) => dispatch(filterOperations.fetchFamilyData(value)),
    fetchEarningsData: (value) => dispatch(filterOperations.fetchEarningsData(value)),
    fetchGenderData: (value) => dispatch(filterOperations.fetchGenderData(value)),
    submitFilterDetails: (value) => dispatch(filterOperations.submitFilterDetails(value)),
    setFiltersToLive: () => dispatch(filterOperations.setFiltersToLive()),
    clearFilters: () => dispatch(filterOperations.clearFilters()),
    closeModal: () => dispatch(filterOperations.closeModal())
  };
};

const FilterContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Filter));

export default FilterContainer;
