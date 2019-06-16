import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Header from '../components/header';
import SignIn from '../components/signIn';
import SignUp from '../components/signUp';
import InvestigationReport from '../components/investigationReport';

 class Home extends Component {
	constructor(props, context){
		super(props, context);
		this.state = {
			isSignInVisible: true
		}
	}

 onSignInClick = () => {
	 this.setState({isSignInVisible: true});
 }

 onSignUpClick = () => {
	 this.setState({isSignInVisible: false});
 }

	render() {
		return(
			<div>
				<Header />
				{this.state.isSignInVisible && this.props.userDetails===null && <SignIn onSignUpClick={this.onSignUpClick.bind(this)} onSignInClick={this.onSignInClick.bind(this)} />}
				{!this.state.isSignInVisible && this.props.userDetails===null && <SignUp onSignUpClick={this.onSignUpClick.bind(this)} onSignInClick={this.onSignInClick.bind(this)} />}
				{this.state.isSignInVisible===false && this.state.isSignInVisible===false && this.props.userDetails!==null && this.props.children}
			</div>
		);
	}
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

let mapStateToProps = (state) => {
    return {
      userDetails: state.userContext? state.userContext.userDetails: null
    };
}

let matchDispatchToProps = (dispatch) => {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);
