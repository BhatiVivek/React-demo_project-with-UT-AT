import React, {Component} from 'react';
import {Messages} from './createInvestigation.component.messages.json';
import {ROUTES} from '../../config/routes.json';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { BootstrapTable, TableHeaderColumn  } from 'react-bootstrap-table';
import {createInvestigationAction, getInvestigationListAction} from '../../actions/createInvestigation';

const selectRowProp = {
    mode: 'radio'
};

const investigationOptions = {
    sizePerPageList: [ 5, 10, 15, 20 ],
    sizePerPage: 5
};

class createInvestigation extends Component{
  constructor(props, context){
    super(props, context);

  }

componentWillMount(){
  this.props.createInvestigationAction();
  this.props.getInvestigationListAction();
}

    render(){
      if(this.props.reportData){
        return(
          <div className="container centered-form">
            <div className="row form-group">
              <div className="col-sm-2 col-md-2 col-lg-2 col-xs-2 text-right">
                  <label className="control-label">{Messages.LAB_NUMBER}</label>
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3 col-xs-3">
                  <input type="text" className="form-control" placeholder="" disabled value={this.props.reportData.labNo} />
              </div>
              <div className="col-sm-2 col-md-2 col-lg-2 col-xs-2 text-right">
                <label className="control-label">{Messages.REFFERED_DOCTOR}</label>
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3 col-xs-3">
                  <input type="text" className="form-control" placeholder="" value={this.props.reportData.doctor}/>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-sm-2 col-md-2 col-lg-2 col-xs-2 text-right">
                  <label className="control-label">{Messages.DATE}</label>
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3 col-xs-3">
                  <input type="text" className="form-control" placeholder="" value={this.props.reportData.date}/>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-2 col-xs-2 text-right">
                <label className="control-label">{Messages.PATIENT_NAME}</label>
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3 col-xs-3">
                  <input type="text" className="form-control" placeholder="" value={this.props.reportData.patientName}/>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-sm-2 col-md-2 col-lg-2 col-xs-2 text-right">
                  <label className="control-label">{Messages.TEST_TYPE}</label>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4 col-xs-4">
                  <input type="text" className="form-control" placeholder="" value={this.props.reportData.testType}/>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-sm-2 col-md-2 col-lg-2 col-xs-2 text-right">
                  <label className="control-label">{Messages.DESCRIPTION}</label>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4 col-xs-4">
                  <input type="text" className="form-control" placeholder="" value={this.props.reportData.description}/>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-sm-2 col-md-2 col-lg-2 col-xs-2 text-right">
                  <label className="control-label">{Messages.NORMAL_RANGE}</label>
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3 col-xs-3">
                  <input type="text" className="form-control" placeholder="" value={this.props.reportData.range}/>
              </div>
              <div className="col-sm-1 col-md-1 col-lg-1 col-xs-1">
                  <label className="control-label">{this.props.reportData.unit}</label>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-sm-2 col-md-2 col-lg-2 col-xs-2">
                  <label className="control-label pull-right">{Messages.OBSERVED_VALUE}</label>
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3 col-xs-3">
                  <input type="text" className="form-control" placeholder=""/>
              </div>
              <div className="col-sm-7 col-md-7 col-lg-7 col-xs-7">
                  <button type="button" className="pull-right btn waves-effect waves-light btn-info" >{Messages.ADD_DESCRIPTION}</button>
              </div>
            </div>

            <div className="row form-group container">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12 ">
            {this.props.newInvestigationList && this.props.newInvestigationList.length>0 && <BootstrapTable data={this.props.newInvestigationList} striped={true} hover={true} pagination={ true } options={ investigationOptions } selectRow={ selectRowProp } height='300px'>
                <TableHeaderColumn dataField="slNo" isKey={true} dataAlign="center">Sl No</TableHeaderColumn>
                <TableHeaderColumn dataField="testType" dataAlign="center">Type Test</TableHeaderColumn>
                <TableHeaderColumn dataField="description" dataAlign="center">Description</TableHeaderColumn>
                <TableHeaderColumn dataField="normalRange" dataAlign="center">Normal Range</TableHeaderColumn>
                <TableHeaderColumn dataField="observedValue" dataAlign="center">Observed Value</TableHeaderColumn>
                <TableHeaderColumn dataField="rate" dataAlign="center">Rate</TableHeaderColumn>
              </BootstrapTable>}
              </div>
            </div>

            <div className="row form-group">
            <div className="col-md-7 col-sm-7 col-lg-7 col-xs-7"></div>
              <div className="col-sm-2 col-md-2 col-lg-2 col-xs-2">
                  <label className="control-label">{Messages.TOTAL_BILL}</label>
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3 col-xs-3">
                  <input type="text" className="form-control" placeholder=""/>
              </div>
            </div>
            <div className="row form-group">
            <div className="col-sm-7 col-md-7 col-lg-7 col-xs-7">
                <button type="button" className="pull-right btn waves-effect waves-light btn-info" >{Messages.Save_PRINT}</button>
            </div>
              <div className="col-sm-2 col-md-2 col-lg-2 col-xs-2">
                  <label className="control-label">{Messages.AMOUNT_PAID}</label>
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3 col-xs-3">
                  <input type="text" className="form-control" placeholder=""/>
              </div>
            </div>
            <div className="row form-group">
            <div className="col-md-7 col-sm-7 col-lg-7 col-xs-7"></div>
              <div className="col-sm-2 col-md-2 col-lg-2 col-xs-2">
                  <label className="control-label">{Messages.BALANCE}</label>
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3 col-xs-3">
                  <input type="text" className="form-control" placeholder=""/>
              </div>
            </div>
            </div>
      )
        }
        else {
          return(
            <div>no data</div>
          );
        }
    }
}

createInvestigation.contextTypes = {
  router: React.PropTypes.object.isRequired
};

let mapStateToProps = (state) => {
    return {
      reportData: state.createInvestigation? state.createInvestigation.reportData: null,
      newInvestigationList : state.newInvestigationList ? state.newInvestigationList.reportData : null
    };
}

let matchDispatchToProps = (dispatch) => {
    return bindActionCreators({createInvestigationAction, getInvestigationListAction}, dispatch);
}

export default  connect(mapStateToProps, matchDispatchToProps)(createInvestigation);
