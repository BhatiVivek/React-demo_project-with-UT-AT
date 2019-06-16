import React, {Component} from 'react';
import {Messages} from './signIn.component.messages.json';
import {ROUTES} from '../../config/routes.json';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {userSignInAction} from '../../actions/signIn';

class SignIn extends Component{
  constructor(props, context){
    super(props, context);
  }

    onSignInClick = () => {
      this.props.userSignInAction('2', '2');
      if(!!this.props.userDetails){
          this.context.router.push(ROUTES.HOME);
      }
    }

    onSignUpClick= () => {
      this.props.onSignUpClick();
    }

    render(){
        return(<section id='signIn' className='login-register login-sidebar background-main-page'>
        	<div className='login-box card'>
            <div className='card-body'>
                <form className='form-horizontal form-material' id='loginform'>
                    <a href='javascript:void(0)' className='text-center db'><img alt='Home' /><br/><img src='src/assets/images/logo-text.png' alt='Home' /></a>
                    <div className='form-group m-t-40'>
                        <div className='col-xs-12'>
                            <input className='form-control' type='text' required='' placeholder={Messages.USER_NAME} />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='col-xs-12'>
                            <input className='form-control' type='password' required='' placeholder={Messages.PASSWORD} />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='col-md-12'>
                            <div className='checkbox checkbox-primary pull-left p-t-0'>
                                <input id='checkbox-signup' type='checkbox' />
                                <label for='checkbox-signup'> {Messages.REMEMBER_ME} </label>
                            </div>
                            <a href='javascript:void(0)' id='to-recover' className='text-dark pull-right'><i className='fa fa-lock m-r-5'></i> {Messages.FORGOTT_PASSWORD}</a> </div>
                    </div>
                    <div className='form-group text-center m-t-20'>
                        <div className='col-xs-12'>
                            <button className='btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light' type='button' onClick={this.onSignInClick.bind(this)}>{Messages.LOG_IN}</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-12 col-md-12 m-t-10 text-center'>
                            <div className='social'><a href='javascript:void(0)' className='btn  btn-facebook' data-toggle='tooltip' title={Messages.LOGIN_WITH_FB}> <i aria-hidden='true' className='fa fa-facebook'></i> </a> <a href='javascript:void(0)' className='btn btn-googleplus' data-toggle='tooltip' title={Messages.LOGIN_WITH_GOOGLE}> <i aria-hidden='true' className='fa fa-google-plus'></i> </a> </div>
                        </div>
                    </div>
                    <div className='form-group m-b-0'>
                        <div className='col-sm-12 text-center'>
                            <p>{Messages.DONT_HAVE_ACC}<span className='text-primary m-l-5 cursor-pointer' onClick={this.onSignUpClick.bind(this)}><b>{Messages.SIGN_UP}</b></span></p>
                        </div>
                    </div>
                </form>
                <form className='form-horizontal' id='recoverform' action=''>
                    <div className='form-group '>
                        <div className='col-xs-12'>
                            <h3>{Messages.RECOVER_PWD}</h3>
                            <p className='text-muted'>{Messages.EMAIL_INS}</p>
                        </div>
                    </div>
                    <div className='form-group '>
                        <div className='col-xs-12'>
                            <input className='form-control' type='text' required='' placeholder={Messages.EMAIL} />
                        </div>
                    </div>
                    <div className='form-group text-center m-t-20'>
                        <div className='col-xs-12'>
                            <button type='button' className='btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light'>{Messages.RESET}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </section>)
    }
}

SignIn.contextTypes = {
  router: React.PropTypes.object.isRequired
};

let mapStateToProps = (state) => {
    return {
      userDetails: state.userContext? state.userContext.userDetails: null
    };
}

let matchDispatchToProps = (dispatch) => {
    return bindActionCreators({userSignInAction}, dispatch);
}

export default  connect(mapStateToProps, matchDispatchToProps)(SignIn);
