import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { filesOperations } from './duck/index';
import Table from './components/Table'
import PropTypes from 'prop-types'


function Files({ getFiles, files }) {

  useEffect(() => {
    getFiles()
  }, [])

  return (
    <div className="stims dashboard">
      <Table files={files} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    files: state.files.files
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getFiles: () => dispatch(filesOperations.getFilesData()),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Files);

Files.propTypes = {
  getFiles: PropTypes.func,
};
