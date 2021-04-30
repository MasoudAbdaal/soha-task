import * as actionTypes from "../actions/actionTypes";

const Initialstore = {
  Country: {},
  Title: "لطفا کشور مورد نظر خودرا انتخاب کنید",
};

const reducer = (state = Initialstore, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TITLE: {
      console.log(action);
      return { ...state, Title: action.value };
    }
    case actionTypes.ADD_COUNTRIES: {
      return { ...state, Country: action.value };
    }
  }
  console.log("FROM REDUCER==>", state);
  return state;
};

export default reducer;
