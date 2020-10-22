import React from 'react';
import classNames from 'classnames';
import Button from '../../common/components/Button';
import { connect } from 'react-redux';
import {editStudyDetailsOperations} from "../../EditStudyDetails/duck";
import {stimsOperations} from "../../Stims/duck";
import EditStudyDetailsForm from "../../EditStudyDetails/components/EditStudyDetails";
import {modalOperations} from "../duck";
export class EditStudyModal extends React.Component {
    state = {
        studyId: this.props.id
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
        this.props.hideModal()
    }
    render() {
        const { modalOpen, hideModal, mediaOptions, environmentOptions, environmentLoading, mediaLoading, studyDetails, studyDetailsLoading, languageTypes } = this.props;
        const { studyId } = this.state;
        return (
            <>
                <div className={'csm-blur'}></div>
                <div className={classNames('csm-modal-form large', { 'active': modalOpen })}>
                    <Button
                        buttonClass={classNames('filter__exit-button', { 'active': modalOpen })}
                        handleClick={() => hideModal()}
                    />
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
                </div>
            </>
        )
    }
}
EditStudyModal.propTypes = {
};
const mapDispatchToProps = dispatch => ({
    hideModal: (id) => dispatch(modalOperations.hideModal(id)),
    fetchMediaTypes: () => dispatch(editStudyDetailsOperations.fetchMediaTypes()),
    fetchEnvironmentTypes: () => dispatch(editStudyDetailsOperations.fetchEnvironmentTypes()),
    fetchStudyDetails: (id) => dispatch(editStudyDetailsOperations.fetchStudyDetails(id)),
    onSubmit: () => dispatch(editStudyDetailsOperations.onSubmit()),
    getTypes: () => dispatch(stimsOperations.getTypes()),
});
const mapStateToProps = (state) => {
    return {
        modalOpen: state.overview.modalOpen,
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
export default connect(mapStateToProps, mapDispatchToProps)(EditStudyModal);