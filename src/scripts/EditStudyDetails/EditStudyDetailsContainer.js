import React from 'react';
import { connect } from 'react-redux';
import { editStudyDetailsOperations } from './duck';
import EditStudyDetailsForm from './components/EditStudyDetails';
// import PropTypes from 'prop-types';
import Notification from '../CellStepManagement/components/Notification';
import { stimsOperations } from '../Stims/duck/index';

class EditStudyDetailsContainer extends React.Component {
  state = {
    studyId: this.props.match.params.id
  }

  componentDidMount() {
    const { fetchMediaTypes, fetchEnvironmentTypes, fetchStudyDetails, getTypes } = this.props;
    fetchMediaTypes();
    fetchEnvironmentTypes();
    fetchStudyDetails(this.state.studyId);
    getTypes()
  }

  onSubmit = () => {
    const { fetchStudyDetails, onSubmit } = this.props;
    fetchStudyDetails(this.state.studyId)
    onSubmit()
  }


  render() {
    const { mediaOptions, environmentOptions, environmentLoading, mediaLoading, studyDetails, studyDetailsLoading, languageTypes } = this.props;
    const { studyId } = this.state;


    return (
      <div className="edit-audience">
        <EditStudyDetailsForm
          environmentOptions={environmentOptions}
          mediaOptions={mediaOptions}
          environmentLoading={environmentLoading}
          mediaLoading={mediaLoading}
          studyDetailsLoading={studyDetailsLoading}
          studyDetails={studyDetails}
          onSubmit={() => this.onSubmit()}
          id={studyId}
          languageOptions={languageTypes}

        />
        <Notification showNotification={this.props.showNotification} />

      </div>
    );
  }
}

EditStudyDetailsContainer.propTypes = {

};

const mapDispatchToProps = dispatch => ({
  fetchMediaTypes: () => dispatch(editStudyDetailsOperations.fetchMediaTypes()),
  fetchEnvironmentTypes: () => dispatch(editStudyDetailsOperations.fetchEnvironmentTypes()),
  fetchStudyDetails: (id) => dispatch(editStudyDetailsOperations.fetchStudyDetails(id)),
  onSubmit: () => dispatch(editStudyDetailsOperations.onSubmit()),
  getTypes: () => dispatch(stimsOperations.getTypes()),


});

const mapStateToProps = (state) => {
  return {
    mediaOptions: state.editStudyDetails.mediaOptions,
    mediaLoading: state.editStudyDetails.mediaLoding,
    environmentOptions: state.editStudyDetails.environmentOptions,
    environmentLoading: state.editStudyDetails.environmentLoading,
    studyDetails: state.editStudyDetails.studyDetails,
    studyDetailsLoading: state.editStudyDetails.studyDetailsLoading,
    showNotification: state.cellStepManagement.showNotification,
    languageTypes: state.stimsReducer.languageTypes,
    typesLoading: state.stimsReducer.typesLoading,


  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditStudyDetailsContainer);


