import {API_URL} from '../../constants/apiUrlConstants.json';
import {INVESTIGATION_REPORT}  from '../../constants/actionTypesConstants.json';
import toastr from 'toastr';
import {Messages} from './investigationReport.actions.messages.json';

let investigationReportAction = () => {
  const _promiseObj =  new Promise((resolve, reject) => {
      let response = [
          {
            labNo: 'LAB_1',
            date: '10-10-11',
            patientName: {
              name: 'Giacomo Guilizzoni Founder',
              post: 'Founder & CEO'
            },
            billAmount: '500',
            balance: '100'
          },
          {
            labNo: 'LAB_2',
            date: '10-10-12',
            patientName: {
              name: 'Marco Botton',
              post: 'Tuttofare'
            },
            billAmount: '650',
            balance: '150'
          },
          {
            labNo: 'LAB_3',
            date: '10-11-13',
            patientName: {
              name: 'Mariah Maclachlan',
              post: 'Better Half'
            },
            billAmount: '510',
            balance: '0'
          },
          {
            labNo: 'LAB_4',
            date: '10-12-13',
            patientName: {
              name: 'Mariah Maclachlan',
              post: 'Better Half'
            },
            billAmount: '200',
            balance: '0'
          },
          {
            labNo: 'LAB_5',
            date: '10-88-13',
            patientName: {
              name: 'Mariah Maclachlan',
              post: 'Better Half'
            },
            billAmount: '400',
            balance: '0'
          },
          {
            labNo: 'LAB_6',
            date: '10-05-13',
            patientName: {
              name: 'Mariah Maclachlan',
              post: 'Better Half'
            },
            billAmount: '100',
            balance: '51'
          }
        ]
      resolve(response)
  });

  return(dispatch)=>{
  _promiseObj.then((response)=>{
      dispatch({type:INVESTIGATION_REPORT.LOAD, payLoad: response});
      toastr.success(Messages.REPORT_LOAD);
  }).catch((error)=>{
    console.error('Error', error);
    dispatch({type:INVESTIGATION_REPORT.LOAD, payLoad: error});
  });
 }
}

export {investigationReportAction};
