import React from 'react';
import  {withRouter} from 'react-router-dom';
import LoginForm from './LoginForm';
import * as IssuesActions from '../actions/IssuesActions';
import IssuesComponent from './IssuesComponent';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import { setLocale } from 'yup';

class login extends React.Component{
    constructor(props) {
      super(props);
      this.login = this.login.bind(this);
    }
   login(loginuser){
    this.props.actions.loadUsers();
    var f="";
    var uname=loginuser.username;
    var pwd=loginuser.password;
  axios.get("http://localhost:3001/users").then(res=>{
    for(const user of res.data){
      if(uname===user.mail && pwd===user.password){
        f=user.fname+" "+user.lname;
        localStorage.setItem("username",f);
        window.location.assign('\home');
      }
    }
   
    if(f===""){
      alert("Enter valid Username or password");
      <div>
      <br></br><br></br><br></br>
      </div>
      this.props.history.push('\login');
    }

  })
   }
    render() {
        return (
            <LoginForm onSave={this.login} />
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

export default connect(mapStateToProps,mapDispatchToProps)(login);