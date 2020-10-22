import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StudyTableCell from './StudyTableCell';
import LoadingSpinner from '../../common/components/LoadingSpinner';

class StudyTable extends Component {


  componentDidMount() {
    this.props.clearCheckedValues();
  }

  render() {
    const { loading, downloadParticipantData, isolationData, downloadStimReport, downloadFeatureData } = this.props;
    const studyId = this.props.match.params.id;

    if (loading) {
      return <LoadingSpinner />
    }


    const numberOfRows = isolationData.map((item, ind) => {
      return item.step_list.map((i, index) => {
        return index;
      });
    })


    return (
      <table className="table study">
        {<tbody>
          <tr>
            {isolationData.map((item, index) => <th key={index}>{item.cell_name}</th>)}

          </tr>
          {numberOfRows[0].map(i => ([
            <tr className={`step${i} step`} key={`step${i}`}>
              {isolationData.map(({ cell_name, step_list, cell_id, step_id }) => (
                <StudyTableCell
                  key={i + cell_id}
                  index={i}
                  cell_id={cell_id}
                  step_id={step_id}
                  checkAll={({ index, studyId, cell_id, history }, stimsInStep) => this.props.checkAll({ index, studyId, cell_id, history }, stimsInStep)}
                  step_list={step_list}
                  studyId={studyId}
                  handleClick={(studyId, cellId, stepId, stimulusId) => this.props.isChecked(studyId, cellId, stepId, stimulusId)}
                  history={this.props.history}
                  cellName={cell_name}
                  downloadParticipantData={(cellId, stepId) => downloadParticipantData(studyId, cellId, stepId, 'DOWNLOAD')}
                  isolationData={isolationData}
                  downloadStimReport={(cellId, stepId, stimId) => downloadStimReport(studyId, cellId, stepId, stimId, 'DOWNLOAD')}
                  downloadFeatureData={(cellId, stepId, stimId) => downloadFeatureData(studyId, cellId, stepId, stimId, 'DOWNLOAD')}

                />
              ))}
            </tr>
          ]
          ))}

        </tbody>}
      </table>

    );
  }
}

export default StudyTable;

StudyTable.propTypes = {
  isolationData: PropTypes.array,
  isChecked: PropTypes.func,
  clearCheckedValues: PropTypes.func,
  checkAll: PropTypes.func
};

