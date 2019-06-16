import React, {Component} from 'react';
import {Messages} from './investigationReport.component.messages.json';
import {ROUTES} from '../../config/routes.json';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { BootstrapTable, TableHeaderColumn  } from 'react-bootstrap-table';
import {investigationReportAction} from '../../actions/InvestigationReport';
import DatePickerTest from '../../themes/Date_Picker';

const selectRowProp = {
    mode: 'radio'
};

const investigationOptions = {
    sizePerPageList: [ 5, 10, 15, 20 ],
    sizePerPage: 5
};

class InvestigationReport extends Component{
  constructor(props, context){
    super(props, context);
    this.state = {
      reportData: props.reportData
    }
  }

onNewReportClick = () => {
      this.context.router.push(ROUTES.CREATEINVESTIGATION);
}

componentWillMount(){
  this.props.investigationReportAction();
}
    render(){
        return(
          <div className="container centered-form">
          <div className="row form-group">
              <div className="input-group col-md-6 col-sm-6 col-lg-6 col-xs-6">
                <span className="input-group-addon topbar "><i className="ti-search" aria-hidden="true"></i></span>
                  <input type="text" className="form-control" placeholder="Search"/>
                  <button type="button" className="btn waves-effect waves-light btn-info">{Messages.SEARCH}</button>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4 col-xs-4">
                <button type="button" className="btn waves-effect waves-light btn-info">{Messages.PRINT}</button>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-2 col-xs-2">
                <button type="button" className="btn waves-effect waves-light btn-info pull-right" onClick={this.onNewReportClick.bind(this)}>{Messages.CREATE_NEW_REPORT}</button>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-sm-3 col-md-3 col-lg-3 col-xs-3">
                <DatePickerTest label="From"/>
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3 col-xs-3">
                <DatePickerTest label="To"/>
              </div>
            </div>
            <div className="row form-group container">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12 ">
            {this.props.reportData && this.props.reportData.length>0 && <BootstrapTable data={this.props.reportData} striped={true} hover={true} pagination={ true } options={ investigationOptions } selectRow={ selectRowProp } height='300px'>
                <TableHeaderColumn dataField="labNo" isKey={true} dataAlign="center">{Messages.LAB_NO}</TableHeaderColumn>
                <TableHeaderColumn dataField="date" dataAlign="center">{Messages.DATE}</TableHeaderColumn>
                <TableHeaderColumn dataField="patientName.name" dataAlign="center">{Messages.PATIENT_NAME}</TableHeaderColumn>
                <TableHeaderColumn dataField="billAmount" dataAlign="center">{Messages.BILL_AMOUNT}</TableHeaderColumn>
                <TableHeaderColumn dataField="balance" dataAlign="center">{Messages.BALANCE}</TableHeaderColumn>
              </BootstrapTable>}
              </div>
            </div>
            </div>
        )
    }
}

InvestigationReport.contextTypes = {
  router: React.PropTypes.object.isRequired
};

let mapStateToProps = (state) => {
    return {
      reportData: state.investigationReport? state.investigationReport.reportData: null
    };
}

let matchDispatchToProps = (dispatch) => {
    return bindActionCreators({investigationReportAction}, dispatch);
}

export default  connect(mapStateToProps, matchDispatchToProps)(InvestigationReport);
