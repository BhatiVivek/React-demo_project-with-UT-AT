import {NEW_INVESTIGATION}  from '../../constants/actionTypesConstants.json';

export default function(state=null,action){
    switch(action.type){
            case NEW_INVESTIGATION.LOAD:
                        return Object.assign({}, state, {reportData: action.payLoad});
            default:
                        return state;
    }
    return state;
}
