import React, { Component } from 'react';
import {surveyOperations} from './duck/index';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Question from './components/Question';
import PropTypes from 'prop-types';

class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.fetchSurveyData(id);
  }

  onClick = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }))
  }

  render() {
    const {loading, survey} = this.props;
    if (loading) {
      return <div>Loading...</div>;
    }


    return (
      <div className="survey">
        <ul className="survey__list">
          {survey.data.map((item, index) =>
          <li onClick={this.onClick} className="survey__list-item" key={index}>{item.survey_title},
          {this.state.active ?
            <Question
              surveyQuestion={item.survey_question}
            /> : null }

          </li>)}
        </ul>
      </div>
    );
  }
}

Survey.propTypes = {
  loading: PropTypes.bool,
  survey: PropTypes.object,
  fetchSurveyData: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,

};

const  mapDispatchToProps = (dispatch) => {
  return {
    fetchSurveyData : (id) => (dispatch(surveyOperations.fetchSurveyData(id))),
  };
};

const mapStateToProps = (state) => {

  return {
    survey: state.survey.surveyData,
    loading: state.survey.loading,
  };
};

const SurveyContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Survey));

export default SurveyContainer;
