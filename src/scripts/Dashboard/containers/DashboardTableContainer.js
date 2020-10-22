/* eslint-disable */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DashboardTable from '../components/Table';

const filterStudies = (studyData) => {
  let searchTerm = studyData.searchTerm === undefined ? '' : studyData.searchTerm;
  let studies = studyData.studies.filter((val) => val.name.toUpperCase().includes(searchTerm.toUpperCase()));

  if (studyData.isLive) {
    studies = studies.filter((val) => val.live === true);

  }
  if (studyData.isCompleted) {
    studies = studies.filter((val) => val.completed === true);
  }

  if (studyData.media) {
    studies = studyData.media === 'All' ? studies.filter((val) => val.media.toUpperCase().includes('')) : studies.filter((val) => val.media === studyData.media);
  }
  if (studyData.environment) {
    studies = studyData.environment === 'All' ? studies.filter((val) => val.environment.toUpperCase().includes('')) : studies.filter((val) => val.environment === studyData.environment);
  }
  return studies;
}

const mapStateToProps = (state) => {
  if (state.studyData.currentSort === undefined) {
    return {
      studies: filterStudies(state.studyData),
      currentSort: state.studyData.currentSort,
      type: state.studyData.type

    }
  } else {
    return {
      studies: sortFuncs[state.studyData.currentSort](filterStudies(state.studyData), state.studyData.type, state.studyData.currentSort),
      currentSort: state.studyData.currentSort,
      type: state.studyData.type

    };
  }
};

const sortFuncs = {
  study_id: ((studies, type, currentSort) => {

    let sortedStudies = studies.slice(0);
    if (type === 'DECENDING') {
      sortedStudies = studies.sort((a, b) => (b[`${currentSort}`] - a[`${currentSort}`]));
    }
    if (type === 'ASCENDING') {
      sortedStudies = studies.sort((a, b) => { return (a[`${currentSort}`] - b[`${currentSort}`]) });
    }
    return sortedStudies
  }),

  cell_count: ((studies, type, currentSort) => {
    let value = currentSort;
    return sortFuncs.study_id(studies, type, value)
  }),

  participants_requested: ((studies, type, currentSort) => {
    return sortFuncs.study_id(studies, type, currentSort)
  }),

  participants_returned: ((studies, type, currentSort) => {
    return sortFuncs.study_id(studies, type, currentSort)
  }),

  media: ((studies, type, currentSort) => {
    return sortFuncs.name(studies, type, currentSort)
  }),
  environment: ((studies, type, currentSort) => {
    return sortFuncs.name(studies, type, currentSort)
  }),

  default: ((studies, type, currentSort) => {
    return studies
  }),

  // this is nasty must be a better way to do this needs refactor
  name: ((studies, type, currentSort) => {
    let sortedStudies = studies;
    if (type === 'ASCENDING') {
      sortedStudies = studies.sort((a, b) => {
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
      sortedStudies = studies.sort((a, b) => {
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
    return sortedStudies
  })
};


const TableContainer = withRouter(connect(mapStateToProps, null)(DashboardTable));

export default TableContainer;
