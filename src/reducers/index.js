const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      return { ...state, loading: true };
    case 'NEWS_RECEIVED':
      return { ...state, loading: false, news: action.json[0] };
    default:
      return state;
  }
};
export default reducer;
