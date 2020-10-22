import types from './types';

const homeReducer = (state = {
    loading: false,
    error: null,
    totalLive: null,
    totalCompleted: null

}, action) => {
    switch (action.type) {
        case types.FETCH_TOTAL_INFO_BEGIN: {
            return {
                ...state,
                loading: true,
                error: null
            };
        }
        case types.FETCH_TOTAL_INFO_SUCCESS: {
            return {
                ...state,
                totalLive: action.payload.studies.data.total_live,
                totalCompleted: action.payload.studies.data.total_completed,
                company: action.payload.studies.data.company,
                company_url: action.payload.studies.data.company_logo_url,
                first_name: action.payload.studies.data.first_name,
                loading: false
            };
        }
        case types.FETCH_TOTAL_INFO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };
        default:
            return state;
    }
};

export default homeReducer;
