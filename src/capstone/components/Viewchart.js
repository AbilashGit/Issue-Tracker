import { Bar } from 'react-chartjs-2';
import React,{Component} from 'react';
import mychart, { Mychart } from './Mychart';
import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as IssuesActions from '../actions/IssuesActions';
import { Link } from 'react-router-dom';


class Viewchart extends Component{
  constructor(props){
    super();
    this.state={
      no:5
    }
  }
  render(){
    let issuetitle=[];
    let issueviews=[];
    let i=0,n=this.state.no;
    var a=5;
    
    {this.props.issues.map(issue =>(   
      issuetitle.push(issue.title),
      issueviews.push(issue.count),
      i++
    )
)}
bubbleSort();
function bubbleSort(){
  var done=false;
  while(!done){
      done=true;
      for(var i=1;i<issueviews.length;i++){
          if(issueviews[i-1]<issueviews[i]){
             done=false;
              var tmp=issueviews[i-1];
              issueviews[i-1]=issueviews[i];
              issueviews[i]=tmp;
              var tmp1=issuetitle[i-1];
              issuetitle[i-1]=issuetitle[i];
              issuetitle[i]=tmp1;
          }
      }
  }
  return issueviews,issuetitle;
}
if(n>issueviews.length)
n=issueviews.length
   return(
     <div><br></br><br></br><br></br>
    <b> <Link className="btnLink" to="/home">Back</Link></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <b>Customize Chart1</b> : &nbsp;
    <select id="settop" name="settop"  value={this.state.no} onChange={(e)=>
                 this.setState({no:e.target.value})
              }
              >
                <option value={5}>5</option>
                   <option value={7}>7</option>
                   <option value={10}>10</option>
                </select> 
     {Mychart(issuetitle,issueviews,n)}
     </div>
      
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    issues: state.issues,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(IssuesActions, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Viewchart); 
