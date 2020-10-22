import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckBox from '../../common/components/Checkbox';
import { Link } from 'react-router-dom';
import Button from '../../common/components/Button';
import InContextLink from './InContextLink';

class StudyTableCell extends Component {

  onClick(e, studyId, stepId, stimId) {
    this.props.handleClick(this.props.step_list[this.props.index], this.props.cell_id, studyId, stimId);
  }

  getIncontextLink(link, index) {
    return (
      <InContextLink className="study__checkbox-container--copy" link={link} key={index} />
    );
  }

  onButtonClick({ index, studyId, cell_id, history }) {

    this.props.checkAll({ index, studyId, cell_id, history });
  }


  render() {
    const { index, studyId, cell_id, step_list, history, downloadParticipantData, downloadStimReport, downloadFeatureData } = this.props;

    const stimArray = step_list[index].stimulus_list;

    const stepId = step_list[index].step_id;


    const cachePageUrl = step_list[index].cachepage_url ?
      this.getIncontextLink(step_list[index].cachepage_url, index) :
      <h3 className="study__checkbox-container--copy">In Isolation</h3>;


    return (

      <React.Fragment>
        <td className="study__cell-container" >
          <div className="master-checkbox__container">
            <Button
              handleClick={() => this.onButtonClick({ index, studyId, cell_id, history })}
              text={`Compare all\nin step ${index + 1} `}
              buttonClass="master-button button-primary two-lines"
            />
          </div>
          <table className="study__cell-container-table">
            <tbody>
              <tr>
              </tr>
              {stimArray.map((element, i) => (
                <tr key={i}>
                  <td className="study__remove-frame">
                    {element.stimulus_name}
                    {cachePageUrl}

                    <div className="study__link-container">
                      <span><Link to={`/my_studies/overview/${studyId}/study/cell_id/${cell_id}/step_id/${stepId}/stim_id/${element.stimulus_id}/kpi`}>KPI Reports</Link></span>
                      <span><Link to={`/my_studies/overview/${studyId}/study/cell_id/${cell_id}/step_id/${stepId}/stim_id/${element.stimulus_id}/feature_analysis`}>Feature Analysis</Link></span>
                    </div>
                    <div className="study__image-wrapper">
                      <div className="study__checkbox-container">
                        <CheckBox handleClick={(e) => this.onClick(e, studyId, stepId, element.stimulus_id)} id={cell_id + studyId + stepId + element.stimulus_id} />
                      </div>
                    </div>
                    <Button buttonClass="button-primary with-margin" text="Download Participant Data" handleClick={() => downloadParticipantData(cell_id, stepId)} />
                    <Button buttonClass="button-primary with-margin" text="Download Stim Data" handleClick={() => downloadStimReport(cell_id, stepId, element.stimulus_id)} />
                    <Button buttonClass="button-primary with-margin" text="Download Feature Data" handleClick={() => downloadFeatureData(cell_id, stepId, element.stimulus_id)} />

                  </td>
                </tr>))}
            </tbody>
          </table>
        </td>
      </React.Fragment >
    );
  }
}

export default StudyTableCell;

StudyTableCell.propTypes = {
  stimulus_list: PropTypes.array,
  cell_name: PropTypes.string,
  index: PropTypes.number,
  handleClick: PropTypes.func,
  cell_id: PropTypes.number,
  checkAll: PropTypes.func,
  studyId: PropTypes.string
};



