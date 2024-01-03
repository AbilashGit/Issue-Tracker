import { render } from "@testing-library/react";
import React from "react";
import * as IssuesActions from '../actions/IssuesActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link,Prompt} from 'react-router-dom';
import Button  from 'react-bootstrap/Button'

class EditIssuesForm extends React.Component{
    constructor(props){
        super(props);
        const {id,title,isd,severity,Status,cdate,rdate,count}=props.location.issue;
        this.state = {
            id:id,
            title:title,
            isd: isd,
            severity:severity,   
            Status:Status,
            cdate:cdate,
            rdate:rdate,
            count:count 
        };
        this.EditIssue = this.EditIssue.bind(this);
    }
  
    EditIssue(issue) {
       this.props.actions.EditIssue(issue);
       this.props.actions.loadIssues();
       this.props.history.push("/IssuesComponent");
       this.props.actions.loadIssues();
       
      }
    update = (e)=> {
    e.preventDefault();
    if(this.state.title==="")
    alert("Please Enter Title")
    else if(this.state.title.length<5)
    alert("Please Enter Title greater 5 in length")
    else if(this.state.isd==="") 
    alert("Please Enter Issue Description");
    else if(this.state.isd.length<5) 
    alert("Please Enter Issue Description greater than 5 in length")
    else if(this.state.cdate==="")
    alert("Enter Issue Created date")
    else{
  const issue=this.state;
  this.EditIssue(issue);
    }
   }
   setModify(){
      this.modify=true
   }
    render(){
        return(
            <div>
               <br></br><br></br><br></br>
              <h1>Edit Issues Form</h1>
              <br></br><br></br>
              <form>
              <label>Title  :</label>
              <input aria-required type="text" name="title" placeholder="title" value={this.state.title} onChange={(e)=>
                 this.setState({title:e.target.value})
              }
              /><br></br><br></br>
              <label>Issue Description :
              </label>
              <input type="text" name="isd" placeholder="isd" required value={this.state.isd} onChange={(e)=>
                 this.setState({isd:e.target.value})
              }
              /><br></br><br></br>
              <label>severity :</label>
              <select id="severity" name="severity" placeholder="severity" value={this.state.severity} onChange={(e)=>
                 this.setState({severity:e.target.value})
              }
              >
                <option value="Minor">Minor</option>
                   <option value="Major">Major</option>
                   <option value="Critical">Critical</option>
                </select> 
              <br></br><br></br>
              <label>Status :</label>
              <input type="radio" id="Open" value="Open" name="Status" checked={this.state.Status==="Open"} onChange={(e)=>
                 this.setState({Status:e.target.value})
              }
              />Open
              <input type="radio" id="Closed" value="Closed"  name="Status" checked={this.state.Status==="Closed"} onChange={(e)=>
                 this.setState({Status:e.target.value})
              }
              />Closed
              <input type="radio"value="InProgress" id="InProgress" name="Status" checked={this.state.Status==="InProgress"} onChange={(e)=>
                 this.setState({Status:e.target.value})
              }
              />  In Progress
              <br></br><br></br>
              <label>Created Date :  </label>
              <input type="date" name="cdate" placeholder="cdate" value={this.state.cdate} onChange={(e)=>
                 this.setState({cdate:e.target.value})
              }
              /><br></br><br></br>
              <label>Closed Date :</label>
              <input type="date" name="rdate" placeholder="rdate" value={this.state.rdate} onChange={(e)=>
                 this.setState({rdate:e.target.value})
              }
              /><br></br><br></br>
              <Prompt when={this.state.modified} message="Are you sure?" />
        
             &nbsp; <Link to="/IssuesComponent" className="btnLink">Back</Link>&nbsp;&nbsp;
              <Button onClick={this.update}>Update</Button>
              </form>
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
 
 export default connect(mapStateToProps,mapDispatchToProps)(EditIssuesForm);