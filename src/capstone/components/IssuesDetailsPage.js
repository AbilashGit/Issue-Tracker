import React from 'react';
import { Link } from 'react-router-dom';
import {withRouter, Prompt} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as IssuesActions from '../actions/IssuesActions';
import { AddCount } from './AddCount';

let authenticated=false;
class IssuesDetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         modified: false,
         counter:true
        };
        this.authenticate(props.history);
        this.countvalue = this.countvalue.bind(this);
      }
    
      authenticate(history) {
        let f=localStorage.getItem("username")
       if(f!=="")
        if (!window.confirm("Are you sure you want to view the details?")) {
          history.replace('/AllIssuesPage');
          this.state.counter=false
        }
      }

      setModified() {
        this.setState({modified: true})
        
      }

      countvalue(issue){
       this.props.actions.EditIssue(issue);
      }
      messageshow=(fissue)=>{
        if(this.state.counter==true){
        AddCount(fissue)
        }  
    }

      render() {
    return (
      <div>
          <h1>Issue Details</h1>   
      
         <br></br> <br></br> 
         <h1>Issue Details</h1><br></br>
       {this.props.issues.filter(issue =>(issue.id==this.props.match.params.id)).map(fissue =>(
               <>
                 <b>Issue ID</b> : {fissue.id}<br></br>
                 <b>Issue Title</b> : {fissue.title}<br></br>
                <b>Issue Description</b> : {fissue.isd}<br></br>
                <b>Issue Severity</b> : {fissue.severity}<br></br>
                <b>Issue Status</b> : {fissue.Status}<br></br>
                {this.messageshow(fissue)}
                <b>Issue Created date</b> : {fissue.cdate}<br></br>
                <b>Issue Closed date</b> : {fissue.rdate}<br></br><br></br>
               <b>About</b> : This is the issue number {fissue.id} having the issue of {fissue.isd} with<br></br>
                {fissue.severity} severity and status is {fissue.Status}.
              <br></br>
            </>             
          ))
          }
              

       
        <br></br>
        <Link to="/IssuesComponent" className="btnLink">Back</Link>
       
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    issues: state.issues
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(IssuesActions, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(IssuesDetailsPage);