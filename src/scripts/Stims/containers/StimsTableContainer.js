/* eslint-disable */
import { connect } from 'react-redux';
import StimsTable from '../components/Table';
// import setStimsFilter from './utils'

const sortFuncs = {

  id: ((stims, type, currentSort) => {
    let sortedStims = stims.slice(0);
    if (type === 'DECENDING') {
      sortedStims = stims.sort((a, b) => (b[`${currentSort}`] - a[`${currentSort}`]));
    }
    if (type === 'ASCENDING') {
      sortedStims = stims.sort((a, b) => { return (a[`${currentSort}`] - b[`${currentSort}`]) });
    }
    return sortedStims
  }),

  type: ((stims, type, currentSort) => {
    return sortFuncs.name(stims, type, currentSort);
  }),

  height: ((stims, type, currentSort) => {
    return sortFuncs.id(stims, type, currentSort);
  }),

  width: ((stims, type, currentSort) => {
    return sortFuncs.id(stims, type, currentSort);
  }),

  brand: ((stims, type, currentSort) => {
    return sortFuncs.name(stims, type, currentSort);
  }),

  media: ((stims, type, currentSort) => {
    return sortFuncs.name(stims, type, currentSort);
  }),

  name: ((stims, type, currentSort) => {
    let sortedStims = stims;

    if (type === 'ASCENDING') {
      sortedStims = stims.sort((a, b) => {
        let nameA = a[`${currentSort}`].toUpperCase();
        let nameB = b[`${currentSort}`].toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else {
      sortedStims = stims.sort((a, b) => {
        let nameA = a[`${currentSort}`].toUpperCase();
        let nameB = b[`${currentSort}`].toUpperCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });
    }
    return sortedStims
  }),
}

export function filterFuncs(stimsData, allStims) {
  let stims = allStims
  const searchTerm = stimsData.filterValue;

  if (searchTerm.length > 0) {
    stims = stims.filter((val) => val.name.toUpperCase().includes(searchTerm.toUpperCase()));
  }

  if (stimsData.stimType) {
    stims =
      stimsData.stimType.toUpperCase() === 'ALL' ?
        stims.filter((val) => val.type.toUpperCase().includes('')) :
        stims.filter((val) => val.type.toUpperCase() === stimsData.stimType.toUpperCase())
  }

  if (stimsData.media) {
    stims =
      stimsData.media.toUpperCase() === 'ALL' ?
        stims.filter((val) => val.media.toUpperCase().includes('')) :
        stims.filter((val) => val.media.toUpperCase() === stimsData.media.toUpperCase())
  }

  return stims
}

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.stimsReducer.loading,
    tableHeadings: state.stimsReducer.tableHeadings,
    value: state.stimsReducer.filterValue,
    stims: state.stimsReducer.currentSort === undefined || state.stimsReducer.currentSort === 'search' ? filterFuncs(state.stimsReducer, state.stimsReducer.stims) : sortFuncs[state.stimsReducer.currentSort](filterFuncs(state.stimsReducer, state.stimsReducer.stims), state.stimsReducer.sortType, state.stimsReducer.currentSort),
    onAscendingClick: ownProps.onAscendingClick,
    onDecendingClick: ownProps.onDecendingClick,
    currentSort: state.stimsReducer.currentSort,
    sortType: state.stimsReducer.sortType
  };
};

const StimsTableContainer = connect(mapStateToProps, null)(StimsTable);

export default StimsTableContainer;
