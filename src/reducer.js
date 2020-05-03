const colors = ["#FFB400", "#FF5A5F", "#8CE071", "#00D1C1", "#007A87", "#7B0051"];

const generatePattern = () => {
 return [1, 2, 3, 4].map((_) => colors[randomNumber(0, colors.length - 1)]);
};

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const InitialState = {
 colors,
 currentColor: colors[0],
 currentGuess: 0,
 pattern: generatePattern(),
 status: "PLAYING",
 gameNumber: 1,
};

export const reducer = (state, action) => {
 switch (action.type) {
  case "CHANGE_COLOR":
   return { ...state, currentColor: action.color };
  case "NEXT_GUESS":
   if (state.currentGuess === 9) {
    return { ...state, status: "GAME_OVER" };
   }
   return { ...state, currentGuess: state.currentGuess + 1 };
  case "PATTERN_SOLVED":
   return { ...state, status: "WINING" };
  case "RESET":
   return { ...InitialState, pattern: generatePattern(), gameNumber: state.gameNumber + 1 };
  default:
   return state;
 }
};
