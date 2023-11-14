import dummyData from "fakeData.json";

const initialState = { dummyData };
console.log(dummyData);

//action creator:액셕 객체를 만들어 주는 함수(export 해서 쓰자)(dispatch(actionFn()) 이런식으로)

//리듀서 :'state'에(action의 type에 따라서) 변화를 일으키는 함수
const fanletter = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default fanletter;
