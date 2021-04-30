import * as actionTypes from "../actions/actionTypes";

const Initialstore = {
  //Hold country data from API
  Country: {},
  //DropdownToggle botton defalut Text
  Title: "لطفا کشور مورد نظر خود را انتخاب کنید",
};

const reducer = (state = Initialstore, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TITLE: {
      return { ...state, Title: action.value };
    }
    case actionTypes.ADD_COUNTRIES: {
      return { ...state, Country: action.value };
    }
  }
  return state;
};

export default reducer;
