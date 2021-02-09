import { AREACHARGE } from '../action/type';
const initialState ={
    area:'',
    owner:'',
    category:''
}
export default (state=initialState, action) => {
  switch (action.type) {
    case AREACHARGE:
        return{
            ...state,
            area: action.payload.area,
            owner:action.payload.owner,
            category:action.payload.category
        }

    default:
       return state
     
  }
};