import React, {Component} from 'react';
import {Messages} from './signUp.component.messages.json';

export default class SignUp extends Component{
  onSignInClick = () => {
    this.props.onSignInClick();
  }
    render(){
        return(<section id='signUp' className='login-register login-sidebar login-sidebar background-main-page'>
        <div className='login-box card'>
            <div className='card-body'>
                <form className='form-horizontal form-material' id='loginform' action=''>
                    <a href='javascript:void(0)' className='text-center db'><img src='src/assets/images/logo-icon.png' alt='Home' /><br /><img src='src/assets/images/logo-text.png' alt='Home' /></a>
                    <h3 className='box-title m-t-40 m-b-0'>{Messages.REGISTER_NOW}</h3><small>{Messages.CREATE_ACCOUNT_AND_ENJOY}</small>
                    <div className='form-group m-t-20'>
                        <div className='col-xs-12'>
                            <input className='form-control' type='text' required='' placeholder={Messages.NAME} />
                        </div>
                    </div>
                    <div className='form-group '>
                        <div className='col-xs-12'>
                            <input className='form-control' type='text' required='' placeholder={Messages.EMAIL} />
                        </div>
                    </div>
                    <div className='form-group '>
                        <div className='col-xs-12'>
                            <input className='form-control' type='password' required='' placeholder={Messages.PASSWORD} />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='col-xs-12'>
                            <input className='form-control' type='password' required='' placeholder={Messages.CONFIRM_PASSWORD} />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='col-md-12'>
                            <div className='checkbox checkbox-primary p-t-0'>
                                <input id='checkbox-signup' type='checkbox' />
                                <label for='checkbox-signup'> {Messages.I_AGREE_TO_ALL} <a href='#'>{Messages.TERMS}</a></label>
                            </div>
                        </div>
                    </div>
                    <div className='form-group text-center m-t-20'>
                        <div className='col-xs-12'>
                            <button className='btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light' type='submit'>{Messages.SIGN_UP}</button>
                        </div>
                    </div>
                    <div className='form-group m-b-0'>
                        <div className='col-sm-12 text-center'>
                            <p>{Messages.ALREADY_HAVE_AN_ACCOUNT} <span onClick={this.onSignInClick.bind(this)} className='text-info m-l-5 cursor-pointer'><b>{Messages.SIGN_IN}</b></span></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>)
    }
}
