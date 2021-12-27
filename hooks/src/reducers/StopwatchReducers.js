export const stopwatchReducer = (state, action) => {
  switch (action.type) {
    case 'START':
      return { ...state, isRunning: true };
    case 'STOP':
      return { ...state, isRunning: false };
    case 'RESET':
      return { isRunning: false, time: 0 };
    case 'TICK':
      return { ...state, time: state.time + 1 };
    default:
      throw new Error();
  }
}