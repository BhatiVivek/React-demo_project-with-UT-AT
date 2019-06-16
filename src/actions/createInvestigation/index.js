import {API_URL} from '../../constants/apiUrlConstants.json';
import {CREATE_INVESTIGATION, NEW_INVESTIGATION}  from '../../constants/actionTypesConstants.json';
import toastr from 'toastr';
import {Messages} from './createInvestigation.actions.messages.json';

let createInvestigationAction = () => {
  const _promiseObj =  new Promise((resolve, reject) => {
        let response = {
            labNo: 'LAB_1',
            doctor: 'Vivek Bhati',
            date: '10-10-11',
            patientName: 'Raghav',
            testType : "Type1",
            description: "description 2",
            range: '150-350',
            unit: 'mm',
            billAmount: '500',
            balance: '100'
          }
      resolve(response)
  });

  return(dispatch)=>{
  _promiseObj.then((response)=>{
      dispatch({type:CREATE_INVESTIGATION.LOAD, payLoad: response});
      //toastr.success(Messages.REPORT_LOAD);
  }).catch((error)=>{
    console.error('Error', error);
    dispatch({type:CREATE_INVESTIGATION.LOAD, payLoad: error});
  });
 }
}


let getInvestigationListAction = () => {
  console.log("action called");
  const _promiseObj =  new Promise((resolve, reject) => {
        let response = [
          {
            slNo: '1',
            testType: 'Blood Test',
            description: 'Description 1',
            normalRange: '100-200',
            observedValue : "150",
            rate: "200"
          },
        {
          slNo: '2',
          testType: 'abc',
          description: 'Description 2',
          normalRange: '200',
          observedValue : "150",
          rate: "200"
        },
        {
          slNo: '3',
          testType: 'x-ray',
          description: 'Description 3',
          normalRange: '100',
          observedValue : "150",
          rate: "200"
        },
        {
          slNo: '4',
          testType: 'urine',
          description: 'Description 4',
          normalRange: '-0',
          observedValue : "150",
          rate: "200"
        },
        {
          slNo: '5',
          testType: 'xyz',
          description: 'Description 5',
          normalRange: '500',
          observedValue : "150",
          rate: "200"
        },
        {
          slNo: '6',
          testType: 'xyz',
          description: 'Description 6',
          normalRange: '10',
          observedValue : "120",
          rate: "780"
        }]
      resolve(response)
  });
console.log("action called",_promiseObj);
  return(dispatch)=>{
  _promiseObj.then((response)=>{
      dispatch({type:NEW_INVESTIGATION.LOAD, payLoad: response});
      toastr.success(Messages.REPORT_LOAD);
  }).catch((error)=>{
    console.error('Error', error);
    dispatch({type:NEW_INVESTIGATION.LOAD, payLoad: error});
  });
 }
}

export {createInvestigationAction, getInvestigationListAction};
