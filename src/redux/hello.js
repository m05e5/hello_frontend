const GET_SALUTE = 'hello-react-rails/src/redux/reducer/GET_SALUTE';

const initialState = '';

export const getGreeting = (payload) => ({
  type: GET_SALUTE,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SALUTE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
