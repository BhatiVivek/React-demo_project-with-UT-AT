import React, {Component} from 'react';
import {Messages} from './home.component.messages.json';
import {ROUTES} from '../../config/routes.json';

export default class Home extends Component{
  constructor(props, context){
    super(props, context);
  }

    render(){
        return(<section id='Home'>
        <h1>Home</h1>
        </section>)
    }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
};
