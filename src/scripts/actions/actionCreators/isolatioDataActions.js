import { URL, ADD_COMPARE_STUDY , REMOVE_COMPARE_STUDY, CLEAR_CHECKED_STUDIES, AUTHENTICATION_ERROR, FETCH_STIM_BEGIN, FETCH_STIM_SUCCESS, FETCH_STIM_ERROR,
  CHECK_ALL_IN_STEP, REMOVE_ALL_IN_STEP} from '../constants';
import axios from 'axios';
import {getHeaders} from '../shared';
import {getAttentionReportData} from './attentionReportActions';

export function addStudy(key) {
    return {
      type: ADD_COMPARE_STUDY,
      id: key
    };
  }

  export function removeStudy(key) {
    return {
      type: REMOVE_COMPARE_STUDY,
      id: key
    };
  }

  export const checkAllinStepRow = () => ({
    type: CHECK_ALL_IN_STEP
  });

  export const removeAllinStepRow = () => ({
    type: REMOVE_ALL_IN_STEP
  });

  export function addOrRemoveStudy(step, cell_id, studyId, stimId) {
    // cellId:stepId:studyId
    // This is the order
    // let key = `cell_Id${cell_id}:step_Id${step.step_id}:study_id${studyId}:stim_id${stimId}`

    let key = `${cell_id}:${step.step_id}:${studyId}:${stimId}`

    return (dispatch, getState) => {
      let currentArray = (getState().isolationData.whichStudiesAreChecked);
      if(!currentArray.includes(key)) {
        dispatch(addStudy(key))
      } else {
        dispatch(removeStudy(key));
      }
    };
  }

  export function clearCheckedStudies() {
    return {
      type: CLEAR_CHECKED_STUDIES
    }
  }

  export function fetchStudy (payload) {
    let payloadId = payload.id;
    return async (dispatch) => {
      try {
        dispatch(fetchStimBegin());
        const res =  await axios.get(`${URL}/studies/${payloadId}/overview`, getHeaders());
        dispatch(fetchStimSuccess(res.data))
      }
      catch(error) {
        dispatch({
          type: AUTHENTICATION_ERROR,
          payload: 'Invalid email or password'
        })
      }
    }
  }

  export const fetchStimBegin = () => ({
    type: FETCH_STIM_BEGIN
  });

  export const fetchStimSuccess = data => ({
    type: FETCH_STIM_SUCCESS,
    payload: data
  });

  export const fetchStimError = error => ({
    type: FETCH_STIM_ERROR,
    payload: { error }
  });



    export function checkAllinStep({index, studyId, cell_id}) {
      return (dispatch, getState) => {
        const isolationDataState = getState().isolationData.data.data;
        const currentArray = (getState().isolationData.whichStudiesAreChecked);
        const arr = {index}.index;
        // .map(stimulus => `cell_Id${item.cell_id}:step_Id${stimulus.step_id}:study_id${studyId}:stim_id${stimulus.stimulus_id}` )

        isolationDataState
          .map(item => {
            return [].concat(item.stimulus_list[arr])
              .map(stimulus => `${item.cell_id}:${stimulus.step_id}:${studyId}:${stimulus.stimulus_id}` )
          }).reduce((acc, curr) => {
            acc = acc.concat(curr)
            return acc
          },[])
          .forEach(item => {
            if(!currentArray.includes(item)) {
              dispatch(addStudy(item))
              dispatch(checkAllinStepRow())
            } else {
              dispatch(removeStudy(item));
              dispatch(removeAllinStepRow())
            }
          })
      }
    }
