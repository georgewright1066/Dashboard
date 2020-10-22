import React from 'react'
import propTypes from 'prop-types'
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import { studiesOperations } from './duck/index';
import { filterOperations } from '../Filter/duck/index';
import StudyTableContainer from './containers/StudyTableContainer';
import Button from '../common/components/Button';
import ModalContainer from '../Model/ModelContainer';
import ErrorWidget from '../common/components/Error';
import LoadingSpinner from '../common/components/LoadingSpinner';


class ShowStudy extends React.Component {

  componentDidMount() {
    const studyId = this.props.match.params.id;
    const payload =
    {
      id: studyId,
      data: this.props.studyData.studies
    }
    this.props.fetchStudy(payload)
  }

  onClick = () => {
    const { history, match, goToAttentionReportPage } = this.props;
    goToAttentionReportPage(this.props.whichStudiesAreChecked, { history, match })
  }

  onSelectAll = () => {
    const { history, match, compareAllStudies } = this.props;
    compareAllStudies(this.props.isolationData.data, { history, match })

  }

  sectionMarkup() {
    return (
      <React.Fragment>
        <div className="studies__button-container">
          <Button handleClick={this.onClick} text="Compare selected stims" buttonClass="button-primary show-study__button" />
          <Button handleClick={this.onSelectAll} text="Compare all stims" buttonClass="button-primary show-study__button" />
        </div>
        <div className="show-study__table-container">
          <StudyTableContainer />
        </div>
      </React.Fragment>
    )
  }


  render() {
    if (this.props.loading) {
      return <LoadingSpinner />
    }
    const noStudies = this.props.isolationData.data.data.length === 0;

    const sectionMarkUp = !noStudies ? this.sectionMarkup() : null;
    return (
      <div className="show-study">
        {this.props.isModalOpen ? <ModalContainer /> : null}


        {!noStudies ?
          sectionMarkUp
          : <ErrorWidget />}
      </div>

    )
  }
}

ShowStudy.propTypes = {
  match: propTypes.object.isRequired,
  location: propTypes.object.isRequired,
  history: propTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    studyData: state.studyData,
    isolationData: state.isolationData,
    whichStudiesAreChecked: state.isolationData.whichStudiesAreChecked,
    isModalOpen: state.filter.modalOpen,
    loading: state.isolationData.loading

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudy: (study) => (dispatch(studiesOperations.fetchStudy(study))),
    goToAttentionReportPage: (whichStudiesAreChecked, { history, match }) => (dispatch(studiesOperations.goToAttentionReportPage(whichStudiesAreChecked, { history, match }))),
    compareAllStudies: (allStudies, { history, match }) => (dispatch(studiesOperations.compareAllStudies(allStudies, { history, match }))),
    openModal: () => (dispatch(filterOperations.openModal()))
  };
};

const ShowStudyWithRouter = withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowStudy));

export default ShowStudyWithRouter;
