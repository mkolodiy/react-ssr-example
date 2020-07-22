import { useEffect, useReducer } from 'react';
import axios from 'axios';

const BASE_URL =
  'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';

const initialState = {
  jobs: [],
  loading: false,
  error: false,
};

const ACTIONS = {
  GET_JOBS_START: 'GET_JOBS_START',
  GET_JOBS_SUCCESS: 'GET_JOBS_SUCCESS',
  GET_JOBS_ERROR: 'GET_JOBS_ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_JOBS_START:
      return {
        ...initialState,
        loading: true,
      };
    case ACTIONS.GET_JOBS_SUCCESS:
      return {
        ...initialState,
        jobs: action.payload.jobs,
      };
    case ACTIONS.GET_JOBS_ERROR:
      return {
        ...initialState,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export const useGetJobs = (params, page) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch({ type: ACTIONS.GET_JOBS_START });

    axios
      .get(BASE_URL, {
        cancelToken: cancelToken.token,
        params: {
          markdown: true,
          page,
          ...params,
        },
      })
      .then((res) =>
        dispatch({
          type: ACTIONS.GET_JOBS_SUCCESS,
          payload: {
            jobs: res.data,
          },
        })
      )
      .catch((err) => {
        if (axios.isCancel(err)) return;
        dispatch({
          type: ACTIONS.GET_JOBS_ERROR,
          payload: {
            error: err,
          },
        });
      });

    return () => cancelToken.cancel();
  }, [params, page]);

  return state;
};
