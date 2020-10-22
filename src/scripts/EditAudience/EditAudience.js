import React from 'react';
import { connect } from 'react-redux';
import { editAudienceOperations } from './duck';
import EditAudienceForm from './EditAudienceForm';
import Notification from '../CellStepManagement/components/Notification';

class EditAudienceContainer extends React.Component {

  componentDidMount() {
    const { fetchAudienceDetails, match } = this.props;
    fetchAudienceDetails(match.params.id)
  }

  onSubmit = () => {
    const { fetchAudienceDetails, onSubmit, match } = this.props;
    fetchAudienceDetails(match.params.id)
    onSubmit()
  }


  render() {
    const { loading, audienceData } = this.props;
    return (
      <div className="edit-audience">
        <EditAudienceForm onSubmit={this.onSubmit} audienceData={audienceData.data} loading={loading} />
        <Notification showNotification={this.props.showNotification} />
      </div>
    );
  }
}



const mapDispatchToProps = dispatch => ({
  fetchAudienceDetails: (id) => dispatch(editAudienceOperations.fetchAudienceDetails(id)),
  onSubmit: () => dispatch(editAudienceOperations.onSubmit())

});

const mapStateToProps = (state) => {
  return {
    showNotification: state.cellStepManagement.showNotification,
    audienceData: state.editAudience.audienceData,
    loading: state.editAudience.loading

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAudienceContainer);

// EditAudienceContainer.PropTypes = {
//   loading: PropTypes.bool
// };
