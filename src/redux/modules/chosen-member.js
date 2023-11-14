const initialState = { chosenMember: "AKALI" };

//리듀서 :'state'에(action의 type에 따라서) 변화를 일으키는 함수
const chosenMember = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default chosenMember;
