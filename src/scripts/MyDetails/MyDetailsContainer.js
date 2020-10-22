import React from 'react';
import { connect } from 'react-redux';
import { userOperations } from './duck';
import EditUserDialog from './MyDetails';
import PropTypes from 'prop-types';

class MyDetails extends React.Component {

  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    const { user, loading } = this.props;
    return (
      <div className="my-details">
        <EditUserDialog username={user} loading={loading} updateDetails={this.props.getUserData} />
      </div>
    );
  }
}

MyDetails.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object,
  postLogin: PropTypes.func,
  getUserData: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  getUserData: () => dispatch(userOperations.getUserData()),
  updateUserDetails: (details) => dispatch(userOperations.updateUserDetails(details)),

});

const mapStateToProps = (state) => {
  return {
    user: state.userData.userData,
    loading: state.userData.loading
  };
};

const MyDetailsForm = connect(mapStateToProps, mapDispatchToProps)(MyDetails);

export default MyDetailsForm;
