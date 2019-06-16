import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ROUTES} from '../config/routes.json';

import Header from '../components/header';

 class Home extends Component {
	constructor(props, context){
		super(props, context);
    this.state={
      navigationlink:true
    }
	}

  onLinkClick = () =>{
    this.context.router.push(ROUTES.INVESTIGATION);
    this.setState({navigationlink: false});
  }

	render() {
		return(
			<div>
				<Header />
        <br />
        {this.state.navigationlink && <a onClick={this.onLinkClick.bind(this)}>Go to Investigation Page</a>}
        <br />
        {this.props.children}
				</div>
		);
	}
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

let mapStateToProps = (state) => {
    return {
      reportData: state.investigationReport? state.investigationReport.reportData: null
    };
}

let matchDispatchToProps = (dispatch) => {
    return bindActionCreators({}, dispatch);
}

export default  connect(mapStateToProps, matchDispatchToProps)(Home);
