import {
  TOGGLEMAILNAV,
  SELECT_UNIT,
  REMOVE_UNIT,
  ADD_DEPARTMENT,
  REMOVE_DEPARTMENT,
  FORWARD,
} from '../action/type';
const initialState = {
  toggle: '0',
  unit: [],
  dept: [],
  forward:''
};
export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLEMAILNAV:
      return {
        ...state,
        toggle: action.payload,
      };
      case FORWARD :
        return{
        ...state,
          forward: action.payload,
      };
    case SELECT_UNIT:
      return {
        ...state,
        unit: [...state.unit, action.payload],
      };
    case REMOVE_UNIT: {
      let value = state.unit.filter((id) => id !== action.payload);
      return {
        ...state,
        unit: value,
      };
    }
    case ADD_DEPARTMENT:
      return {
        ...state,
        dept: [...state.dept, action.payload],
      };
    case REMOVE_DEPARTMENT: {
      let value = state.dept.filter((id) => id !== action.payload);

      return {
        ...state,
        dept: value,
      };
    }
    default:
      return state;
  }
};
