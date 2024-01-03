import React from 'react';
import  {withRouter} from 'react-router-dom';
import RegisterForm from './RegisterForm';
import * as IssuesActions from '../actions/IssuesActions';
import IssuesComponent from './IssuesComponent';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';

class register extends React.Component{
    constructor(props) {
      super(props);
      this.addUser = this.addUser.bind(this);
    }
   addUser(user) {
    var f=false;
    var uname=user.mail;
    axios.get("http://localhost:3001/users").then(res=>{
      for(const user of res.data){
        if(uname===user.mail){
          f=true;
        }
      }
      if(f===false){
        this.props.actions.addUser(user);
        alert("Registration Successful!!! Please login")
        window.location.assign('\login');
      }
      else{
        alert("Email id is already used by another user.Please enter another Email")      
      }
    })
    }
    render() {
        return (
            <RegisterForm onSave={this.addUser} />
        );
    }
}
function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(IssuesActions, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(register);