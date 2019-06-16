import {API_URL} from '../../constants/apiUrlConstants.json';
import {SIGN_IN}  from '../../constants/actionTypesConstants.json';
import toastr from 'toastr';
import {Messages} from './signIn.actions.messages.json';

let userSignInAction = (userName, password) => {
  const _promiseObj =  new Promise((resolve, reject) => {
      let response = {
        token: 'ABCDEFGHIJ',
        userName: 'Reacto',
        userId: 1
      }
      resolve(response)
  });

  return(dispatch)=>{
  _promiseObj.then((response)=>{
      dispatch({type:SIGN_IN.LOGIN_SUCCESS, payLoad: response});
      toastr.success(Messages.LOGIN_SUCCESS);
  }).catch((error)=>{
    console.error('Error', error);
    dispatch({type:SIGN_IN.LOGIN_FAILURE, payLoad: error});
  });
 }
}

export {userSignInAction};
