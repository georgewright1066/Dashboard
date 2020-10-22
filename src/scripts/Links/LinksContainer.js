import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { LinksOperations } from './duck/index';
import LoadingSpinner from '../common/components/LoadingSpinner';
import LinksTable from './components/LinksTable';
import { withRouter } from 'react-router';

function Links({ links, getLinksData, match, linksLoading }) {
  useEffect(() => {
    getLinksData(match.params.id)
  }, []);


  if (linksLoading) {
    return <LoadingSpinner />
  }


  return (
    <div>
      <LinksTable data={links} tableHeadings={['Overall', 'Cell A', 'Cell B']} />
    </div>

  );
}



function mapDispatchToProps(dispatch) {
  return {
    getLinksData: (data) => dispatch(LinksOperations.getLinksData(data)),

  };
}

function mapStateToProps(state) {
  return {
    links: state.links.links,
    linksLoading: state.links.linksLoading,

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Links));

Links.propTypes = {

};
