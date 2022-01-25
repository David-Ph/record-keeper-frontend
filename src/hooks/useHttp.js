import { useReducer, useCallback } from "react";

const ACTION_TYPE = {
  SEND: "SEND",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export const HTTP_STATUS = {
  PENDING: "pending",
  COMPLETED: "completed",
};

function httpReducer(state, action) {
  if (action.type === ACTION_TYPE.SEND) {
    return {
      data: null,
      error: null,
      status: HTTP_STATUS.PENDING,
    };
  }

  if (action.type === ACTION_TYPE.SUCCESS) {
    return {
      data: action.responseData,
      error: null,
      status: HTTP_STATUS.COMPLETED,
    };
  }

  if (action.type === ACTION_TYPE.ERROR) {
    return {
      data: null,
      error: action.errorMessage,
      status: HTTP_STATUS.COMPLETED,
    };
  }

  return state;
}

function useHttp(requestFunction, startWithPending = false) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? HTTP_STATUS.PENDING : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async function (requestData, token = "") {
      dispatch({ type: ACTION_TYPE.SEND });
      try {
        const responseData = await requestFunction(requestData, token);

        dispatch({ type: ACTION_TYPE.SUCCESS, responseData });

        return responseData;
      } catch (error) {
        dispatch({
          type: ACTION_TYPE.ERROR,
          errorMessage: error.message || "Something went wrong!",
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
