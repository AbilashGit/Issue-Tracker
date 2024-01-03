import React from 'react';
import { Link, Prompt} from 'react-router-dom';
import * as IssuesActions from '../actions/IssuesActions';
import Deleteissues from './Deleteissues';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button  from 'react-bootstrap/Button'

export default class IssuesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      pathv:"/login",
      pathe:"/editissue"
    }
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }
onDelete() {
  if(window.confirm("Are you sure u want to delete Issue "+this.props.id+"?"))
  this.props.onDelete(this.props.id);
  }
  onEdit(){
   this.props.onEdit(this.props.id);
  }
  verifyedit=()=>{
    let f=localStorage.getItem("username")
   if(f===""){
   alert("Login to Edit Issue");
   window.location.assign('/login');
  }
  }
  verifydelete=()=>{
    let f=localStorage.getItem("username")
   if(f===""){
   alert("Login to delete Issue");
   window.location.assign('/login');
  }
  else
   this.onDelete()
  }
 
  verifyview=()=>{
    let f=localStorage.getItem("username")
   if(f===""){
   alert("Login to view Issue");
   window.location.assign('/login');
  }
  }

  render() {
    const path = `/issues/${this.props.id}`;

    return (
      <div>
    
    <Col md={10} className="Col">
    <Card style={{backgroundColor:"rgb(203, 231, 241)"}}>
  <Card.Header as="h5"><b>{this.props.title}</b></Card.Header>
  <Card.Body>
    <Card.Title>Issue ID: {this.props.id}</Card.Title>
    <Card.Text>
    <br></br>
{this.props.isdcheck && <div>Issue Description:{this.props.isd}</div>}
{this.props.severitycheck && <div>Severity :{this.props.severity}</div>}
{this.props.Statuscheck && <div> Status :{this.props.Status}</div>  }
 Created Date :{this.props.cdate}<br></br>
 {this.props.rdatecheck && <div>Resolved Date :{this.props.rdate}</div>}
 <Link to={path} onClick={this.verifyview}>All Details</Link><br></br><br></br>
 <Button onClick={this.verifydelete}>Delete</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <Link className="btnLink" to={{pathname:this.state.pathe,issue:this.props}} onClick={this.verifyedit}>Edit1</Link>
    </Card.Text>

</Card.Body>
</Card>
 
 </Col>
 <br></br>
 
 </div>
    );
  }
}
