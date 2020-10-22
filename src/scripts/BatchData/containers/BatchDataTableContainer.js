import { connect } from 'react-redux';
import batchStimsTable from '../components/Table';

function filterFuncs(batchData) {
  let stims = batchData.batchStimsList
  const searchTerm = batchData.searchTerm;
  if (searchTerm.length > 0) {
    // eslint-disable-next-line
    stims = stims.filter((item) => {
      if (item.name !== null) {
        return item.name.toUpperCase().includes(searchTerm.toUpperCase())
      }
    })
  }


  if (batchData.stimType) {
    stims = batchData.stimType.toUpperCase() === 'ALL' ?
      stims.filter(item  => item.type.toUpperCase().includes(''))
      :
      stims.filter(item => item.type.toUpperCase() === batchData.stimType.toUpperCase())

  }
  return stims
}

const mapStateToProps = (state) => {
  return {
    batchStimsList: state.batchStimsReducer.batchStimsList,
    batchStimsLoading: state.batchStimsReducer.batchStimsLoading,
    batchTableHeadings: state.batchStimsReducer.batchTableHeadings,
    batchStims: filterFuncs(state.batchStimsReducer)

  };

};


const batchStimsTableContainer = connect(mapStateToProps, null)(batchStimsTable);

export default batchStimsTableContainer;

