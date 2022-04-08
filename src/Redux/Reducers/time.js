const timer = (state = '', action) => {
  switch (action.type) {
  case 'TIMER_SCORE':
    return action.payload;

  default:
    return state;
  }
};

export default timer;
