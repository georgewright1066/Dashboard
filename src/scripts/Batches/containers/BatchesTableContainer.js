/* eslint-disable */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import batchStimsTable from '../components/Table';
import { batchStimsOperations } from '../duck/index'


function filterFuncs(batchData) {
  let stims = batchData.batchData
  const searchTerm = batchData.searchByIdTerm;
  if (searchTerm.length > 0) {
    // eslint-disable-next-line
    stims = stims.filter((item) => item.batch_id.toUpperCase().includes(searchTerm.toUpperCase()))
    // stims.filter((item) => item.name.toUpperCase().includes(searchTerm.toUpperCase()))
  }

  return stims
}

const mapStateToProps = (state) => {
  return {
    loading: state.batchStimsReducer.batchesLoading,
    tableHeadings: state.batchStimsReducer.tableHeadings,
    batchData: filterFuncs(state.batchStimsReducer),
  };

};

const mapDispatchToProps = (dispatch) => {
  return {
    generateReport: (id, vendorId, history) => dispatch(batchStimsOperations.generateReport(id, vendorId, history))
  }
}


const batchStimsTableContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(batchStimsTable));

export default batchStimsTableContainer;
