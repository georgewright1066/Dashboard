import React, { Component } from 'react';
import SearchBar from './components/Search';
import DashboardTableContainer from './containers/DashboardTableContainer';
import { connect } from 'react-redux';
import { dashboardOperations } from './duck/index';
import { stimsOperations } from '../Stims/duck/index';
import CheckBoxStyled from '../common/components/Checkbox';
import Button from '../common/components/Button';
import PrettyDropdown from '../common/components/PrettyDropdown';
import PropTypes from 'prop-types';
import LoadingSpinner from '../common/components/LoadingSpinner';
import Modal from './components/Modal';
import ToolTip from '../common/components/Tooltip';

class Dashboard extends Component {

  componentDidMount() {
    this.props.getStudies();
    this.props.getTypes()
  }

  onAscendingClick = (e) => {
    let target = e.target.parentNode.parentNode.id;
    const type = 'ASCENDING';
    this.props.onAscendingOrDecendingButtonClick(target, type)
  }

  onDecendingClick = (e) => {
    let target = e.target.parentNode.parentNode.id;
    const type = 'DECENDING';

    this.props.onAscendingOrDecendingButtonClick(target, type)
  }

  render() {
    const { loading, onAddNewStudySubmit, history, onAddNewStudy, environmentTypes, mediaTypes, typesLoading, search, isStudyLive, isLive, media, environment, languageTypes, isStudyCompleted, openNewStudyModal, closeModal, environmentData, environmentLoading, modalOpen, studyTypes, mediaData } = this.props;
    if (loading || typesLoading) {
      return <LoadingSpinner />
    }

    return (
      <React.Fragment>
        <div className="dashboard">
          <div className="dashboard__container">
            <Button
                text="Create Study"
                buttonClass="button-primary dashboard__add-study-button"
                handleClick={onAddNewStudy}
                testId="createStudy"
                title="Creates new study."
            />
          </div>
          <div className="dashboard__filter-container">
            <div className="dashboard__filter-container--item">
              <ToolTip content="Filter by studies." />
                <label>Search</label>
                <SearchBar onChange={(e) => search(e.target.value)} className="dashboard__filter-container--item--search" placeholder="Search Studies" />
            </div>
            <div className="dashboard__filter-container--item">
              <ToolTip content="Filter by live studies." />
              <label>Live</label>

              <CheckBoxStyled id="Live" isLive={isStudyLive} className="dashboard__filter-container--item--checkbox" handleClick={() => isLive(true)} />

            </div>
            <div className="dashboard__filter-container--item">
              <ToolTip content="Filter by completed studies." />
              <label>Completed</label>

              <CheckBoxStyled id="Environment" isLive={isStudyCompleted} className="dashboard__filter-container--item--checkbox" handleClick={() => this.props.isCompleted(true)} />

            </div>
            <div className="dashboard__filter-container--item">
              <ToolTip content="Filter by my studies." />
              <label>My Studies</label>

              <CheckBoxStyled id="Mine" className="dashboard__filter-container--item--checkbox" handleClick={() => this.props.isMine(true)} />

            </div>
            <div className="dashboard__filter-container--item">
              <ToolTip content="Filter by media channel." />
              <label>Media</label>
              <PrettyDropdown title="All" onSelectItem={(item) => media(item)} options={mediaTypes.map(option => option.description)} />
            </div>
            <div className="dashboard__filter-container--item">
              <ToolTip content="Filter by study environments." />

              <label>Environment</label>

              <PrettyDropdown title="All" onSelectItem={(item) => environment(item)} options={environmentTypes.map(option => option.description)} />
            </div>
          </div>
          <div className="dashboard__table-container">
            <DashboardTableContainer onAscendingClick={this.onAscendingClick} onDecendingClick={this.onDecendingClick} />
          </div>
        </div >
        <Modal
          onAddNewStudySubmit={(value, cells, panelSize, environment, media, studyType, language) => onAddNewStudySubmit(value, cells, panelSize, environment, media, studyType, language, history)}
          active={openNewStudyModal}
          closeModal={closeModal}
          environmentData={environmentData}
          loading={environmentLoading}
          modalOpen={modalOpen}
          mediaData={mediaData}
          studyType={studyTypes}
          languageTypes={languageTypes}

        />
      </React.Fragment >
    );
  }
}


Dashboard.propTypes = {
  studyData: PropTypes.array,
  isStudyLive: PropTypes.bool,
  isStudyCompleted: PropTypes.bool,
  active_study_count: PropTypes.number,
  completed_study_count: PropTypes.number,
  accountData: PropTypes.object,
  isLive: PropTypes.func,
  isCompleted: PropTypes.func,
  media: PropTypes.func,
  environment: PropTypes.func,
  search: PropTypes.func,
  getStudies: PropTypes.func,
  loading: PropTypes.bool,
  onAscendingButtonClick: PropTypes.func,
  onAddNewStudySubmit: PropTypes.func
};

export function addAllType(type) {
  if (type) {
    return [{ description: 'All', code: 12 }, ...type]
  }

}

function mapStateToProps(state) {
  return {
    studyData: state.studyData.studies,
    isStudyLive: state.studyData.isLive,
    isStudyCompleted: state.studyData.isCompleted,
    accountData: state.studyData,
    value: state,
    loading: state.studyData.loading,
    openNewStudyModal: state.studyData.openNewStudyModal,
    environmentLoading: state.studyData.environmentLoading,
    environmentData: state.studyData.environmentData,
    modalOpen: state.studyData.openNewStudyModal,
    mediaData: state.studyData.mediaData,
    studyTypes: state.studyData.studyTypes,
    environmentTypes: addAllType(state.stimsReducer.environmentTypes),
    mediaTypes: addAllType(state.stimsReducer.mediaTypes),
    studyTypesData: state.stimsReducer.studyTypes,
    typesLoading: state.stimsReducer.typesLoading,
    languageTypes: state.studyData.languageTypes


  };
}

function mapDispatchToProps(dispatch) {
  return {
    isLive: (isLive) => (dispatch(dashboardOperations.toggleLive(isLive))),
    isCompleted: (isCompleted) => (dispatch(dashboardOperations.toggleCompleted(isCompleted))),
    media: (media) => (dispatch(dashboardOperations.setMediaFilter(media))),
    environment: (environment) => (dispatch(dashboardOperations.setEnvironmentFilter(environment))),
    search: (value) => (dispatch(dashboardOperations.search(value))),
    getStudies: () => dispatch(dashboardOperations.getStudyData()),
    onAscendingOrDecendingButtonClick: (e, typee) => dispatch(dashboardOperations.sortAscendingData(e, typee)),
    onAddNewStudy: () => dispatch(dashboardOperations.onAddNewStudy()),
    onAddNewStudySubmit: (value, cells, panelSize, environment, media, studyType, language, history) => dispatch(dashboardOperations.onAddNewStudySubmit(value, cells, panelSize, environment, media, studyType, language, history)),
    closeModal: () => dispatch(dashboardOperations.closeModal()),
    getTypes: () => dispatch(stimsOperations.getTypes()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
