import {INVESTIGATION_REPORT}  from '../../constants/actionTypesConstants.json';

export default function(state=null,action){
    switch(action.type){
            case INVESTIGATION_REPORT.LOAD:
                        return Object.assign({}, state, {reportData: action.payLoad});
            default:
                        return state;
    }
    return state;
}
