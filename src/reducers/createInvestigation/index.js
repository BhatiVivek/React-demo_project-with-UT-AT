import {CREATE_INVESTIGATION}  from '../../constants/actionTypesConstants.json';

export default function(state=null,action){
    switch(action.type){
            case CREATE_INVESTIGATION.LOAD:
                        return Object.assign({}, state, {reportData: action.payLoad});
            default:
                        return state;
    }
    return state;
}
