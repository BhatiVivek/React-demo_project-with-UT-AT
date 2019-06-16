import {SIGN_IN}  from '../../constants/actionTypesConstants.json';

export default function(state=null,action){
    switch(action.type){
            case SIGN_IN.LOGIN_SUCCESS:
                        return Object.assign({}, state, {userDetails: action.payLoad});
            default:
                        return state;
    }
    return state;
}
