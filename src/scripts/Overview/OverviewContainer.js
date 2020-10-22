import React from 'react';
import propTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import types from '../CellStepManagement/duck/types';
import { studiesOperations } from '../Studies/duck/index';
import Widget from './components/widget';
import MiniCardDownload from '../common/components/MiniCardDownload';
import LoadingSpinner from '../common/components/LoadingSpinner';
import demographicsImage from '../../assets/images/demographics.svg';
import Status from '../common/components/Status';
import Button from '../common/components/Button';
import ButtonWithTooltip from '../common/components/ButtonWithToolTip';
import WidgetItem from './components/widgetItem';
import WidgetItemWithButton from './components/widgetItemWithButton';
import WidgetOverviewButton from './components/widgetOverviewItem.';
import Links from '../Links/LinksContainer';

import { overviewOperations } from './duck';
import ModalRoot from '../Modal/ModalContainer';


class Overview extends React.Component {
  componentDidMount(studies) {
    const studyId = this.props.match.params.id;
    const { getAudienceOverviewData, getOverviewData, fetchStudy } = this.props;
    const payload =
    {
      id: studyId,
    };
    getAudienceOverviewData(studyId)
    getOverviewData(studyId)
    fetchStudy(payload);
  }

  openModal = (TYPE, panelId) => {
    const { openModal, modalOpen, match, panelOverview } = this.props
    const id = match.params.id

    const data = {
      type: types.SHOW_MODAL,
      modalType: TYPE,
      modalProps: {
        modalOpen: modalOpen,
        id: id,
        type: TYPE,
        panelId: panelId,
        panelOverview: panelOverview
      }
    }
    openModal(id, data)
  }

  openConfirmationModal(TYPE, panelId) {
    const { confirmationModalOpen, match, openConfirmationModal, closeConfirmationModal } = this.props
    const id = match.params.id

    const data = {
      type: types.SHOW_MODAL,
      modalType: TYPE,
      modalProps: {
        id: id,
        type: TYPE,
        panelId: panelId,
        confirmationModalOpen: confirmationModalOpen,
        closeConfirmationModal: closeConfirmationModal
      }
    }
    openConfirmationModal(id, data)

  }

  openFilesModal = (TYPE) => {
    const { match, filesModalOpen, openFilesModal } = this.props
    const id = match.params.id
    const data = {
      type: types.SHOW_MODAL,
      modalType: TYPE,
      modalProps: {
        filesModalOpen: filesModalOpen,
        id: id
      }
    }
    openFilesModal(id, data)
  }



  render() {
    const { loading, cellOverview, studiesOverview, isolationData, overviewData, downloadReportData, panelLoading, overviewLoading } = this.props;
    if (loading || panelLoading || overviewLoading) {
      return <LoadingSpinner />;
    }
    const { id } = this.props.match.params;
    const stimCount = this.props.cellOverview.cell_step_stim_overview.stim_count;
    return (
      <div className="overview">

        <div className="overview__container">

          <div className="overview__mini-card-container">

                {this.props.isolationData.has_survey ?
                <MiniCardDownload
                  href={`/my_studies/overview/${id}/survey-questions`}
                  link={true}
                  copy="View Survey data"
                  className="mini-card__psuedo mini-card__psuedo--survey"/>
                : null}
                <Status status={this.props.studiesOverview.status}/>

            <div className="overview__widget-container">
                <Widget
                  title="General Information"
                  className="widget widget--audience"
                  content="General Study Information">
                  <WidgetItem
                      title="Name"
                      value={isolationData.study_name}/>
                  <WidgetItem
                      title="Brief"
                      value={isolationData.brief}/>
                  <WidgetItem
                      title="Methodology"
                      value={isolationData.methodology}/>
                  <Button handleClick={() => this.openModal('EDIT_STUDY')} buttonClass="button-primary widget__item-button-bottom" text="Edit Details" />
                </Widget>
                <Widget
                  title="Study Structure Details"
                  className="widget widget--survey"
                  content="Study structure and details overview.">
                  <WidgetItemWithButton
                    title="Number of Cells"
                    value={cellOverview.cell_step_stim_overview.cell_count}
                    link={`/my_studies/overview/${id}/cell_step_management`}
                    text="More"/>
                  <WidgetItemWithButton
                    title="Number of Stims"
                    value={stimCount}
                    link={`/my_studies/overview/${id}/study`}
                    text="More"/>
                  <WidgetItem
                    title="Environment"
                    value={studiesOverview.environment}/>
                  <WidgetItem
                    title="Media Type"
                    value={studiesOverview.media}/>
                </Widget>

              <Widget
                title="Panel Details"
                className="widget widget--audience"
                content="Define details of required study.">
                <WidgetItem
                  title="Requested Participant #"
                  value={this.props.cellOverview.cell_step_stim_overview.participants_requested}/>
                {overviewData.audience_overview.panels.map((item, index) => (
                  <WidgetOverviewButton
                    key={index}
                    title={item.name}
                    value={''}
                    id={item.id}
                    onEditClick={(panelId) => this.openModal('EDIT_AUDIENCE', panelId)}
                    onDeleteClick={(deleteId) => this.openConfirmationModal('DELETE_CONFIRMATION', deleteId)}/>
                ))}
                <Button handleClick={() => this.openModal('CREATE_AUDIENCE')} buttonClass="button-primary widget__item-button-bottom" text="Create Panel" />
              </Widget>

              <Widget
                title="Survey Details"
                className="widget widget--audience"
                link={`/my_studies/overview/${id}/survey-questions`}
                showButton={true}
                disableButton={true}
                content="Implement third party links to questionnaire surveys.">
                <WidgetItem
                  title="Demographic Survey"
                  value={cellOverview.survey_overview.has_survey ? 'Enabled' : 'Disabled'}/>
                <WidgetItem
                  title="Recall Survey"
                  value={cellOverview.survey_overview.has_demographics ? 'Enabled' : 'Disabled'}/>
                <WidgetItem
                  title="Survey Questions"
                  value={cellOverview.survey_overview.num_questions}/>
              </Widget>
              <Widget
                title="Downloads"
                className="widget widget--audience"
                content="Download questionnaire and eye-tracking data.">
                <div className="vertical-container">
                  <ButtonWithTooltip
                    buttonClass="button-primary button-tooltip"
                    text="Download Participant Data"
                    handleClick={() => downloadReportData(id, 'participant_report')}
                    content="Download questionnaire data."/>
                  <ButtonWithTooltip
                    buttonClass="button-primary with-margin button-tooltip"
                    text="Download Stim Data"
                    handleClick={() => downloadReportData(id, 'report')}
                    content="Download eye-tracking data for each stimulus."/>
                  <ButtonWithTooltip buttonClass="button-primary with-margin button-tooltip"
                    text="Download Feature Data"
                    handleClick={() => downloadReportData(id, 'feature_report')}
                    content="Download eye-tracking data for each AOI."/>
                  {
                    studiesOverview.has_files ?
                      <ButtonWithTooltip buttonClass="button-primary with-margin button-tooltip"
                        text="Show Study Files"
                        handleClick={() => this.openFilesModal('FILES_MODAL')}
                        content="Download files."/> : null
                  }
                </div>
              </Widget>

              {this.props.isolationData.has_demographics ?
                <Widget
                  title="Demographics"
                  description="View Study Demographics Breakdown"
                  className="widget widget--audience"
                  link={`/my_studies/overview/${id}/demographics`}
                  source={demographicsImage}
                  showButton={true}

                />
                :
                null}
            </div>
            <Links />

          </div>
        </div>

        <ModalRoot />
      </div>

    );
  }
}

Overview.propTypes = {
  match: propTypes.object.isRequired,

};

const mapStateToProps = (state) => {
  return {
    isolationData: state.isolationData.data,
    studiesOverview: state.isolationData.studiesOverview,
    loading: state.isolationData.studiesOverviewLoading,
    cellOverview: state.isolationData.studiesOverview,
    overviewData: state.overview.overviewData,
    modalOpen: state.overview.modalOpen,
    panelOverview: state.overview.panelOverview,
    confirmationModalOpen: state.overview.confirmationModalOpen,
    panelLoading: state.isolationData.panelLoading,
    overviewLoading: state.isolationData.overviewLoading,
    filesModalOpen: state.overview.filesModalOpen


  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudy: (study) => (dispatch(studiesOperations.fetchStudy(study))),
    getAudienceOverviewData: (id) => (dispatch(overviewOperations.getAudienceOverviewData(id))),
    getOverviewData: (id) => (dispatch(overviewOperations.getOverviewData(id))),
    openModal: (id, data) => (dispatch(overviewOperations.openModal(id, data))),
    onDeleteClick: (id, studyId) => (dispatch(overviewOperations.onDeleteClick(id, studyId))),
    onEditClick: (id, studyId) => (dispatch(overviewOperations.onEditClick(id, studyId))),
    openConfirmationModal: (id, data) => (dispatch(overviewOperations.openConfirmationModal(id, data))),
    closeConfirmationModal: (id, data) => (dispatch(overviewOperations.closeConfirmationModal(id, data))),
    downloadReportData: (id, type) => (dispatch(overviewOperations.downloadReportData(id, type))),
    openFilesModal: (id, data) => (dispatch(overviewOperations.openFilesModal(id, data))),
    closeFilesModal: (id, data) => (dispatch(overviewOperations.closeFilesModal(id, data))),


  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Overview));
