const initialState = { chosenMember: "ALL" };

//리듀서
const chosenMember = (state = initialState, action) => {
  switch (action.type) {
    case "ALL":
      return { chosenMember: "ALL" };
    case "AKALI":
      return { chosenMember: "AKALI" };
    case "AHRI":
      return { chosenMember: "AHRI" };
    case "EVELYN":
      return { chosenMember: "EVELYN" };
    case "KAISA":
      return { chosenMember: "KAISA" };
    default:
      return state;
  }
};

export default chosenMember;
