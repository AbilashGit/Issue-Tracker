import React from 'react';
import { Link, Prompt} from 'react-router-dom';
import * as IssuesActions from '../actions/IssuesActions';
import axios from 'axios'


export default class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        fname : "",
        lname : "",
        phno : "",
        mail : "",
        id : 0,
        loc : ""
    }
    let fname=localStorage.getItem("username");
    axios.get("http://localhost:3001/users").then(res=>{
      for(const user of res.data){
        if(fname===(user.fname+" "+user.lname)){
            this.setState({id:user.id})
            this.setState({fname:user.fname})
            this.setState({lname:user.lname})
            this.setState({phno:user.phoneno})
            this.setState({mail:user.mail}) 
            this.setState({loc:user.location})
  }
}
});
  }
  render() {
    return (
        <div><br></br><br></br><br></br>
            <h1><b>User Info</b></h1><br></br><br></br>
             <h2>User ID : {this.state.id}</h2><br></br>
             <h2>First Name : {this.state.fname}</h2><br></br>
             <h2>Last Name : {this.state.lname}</h2><br></br>
             <h2>Phone No : {this.state.phno}</h2><br></br>
             <h2>Email : {this.state.mail}</h2><br></br>
             <h2>Location : {this.state.loc}</h2><br></br>
             <Link to="/IssuesComponent" className="btnLink">Back</Link>&nbsp;&nbsp;
             </div>
  );
  }
  }
