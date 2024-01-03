import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch,Link,NavLink} from 'react-router-dom';
import AddIssuesForm from './components/AddIssuesForm';
import Deleteissues from './components/Deleteissues';
import EditIssuesForm from './components/EditIssuesForm';
import IssuesComponent from './components/IssuesComponent';
import IssuesDetailsPage from './components/IssuesDetailsPage';
import login from './components/Login';
import Register from './components/Register';
import { Suspense, lazy } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import UserInfo from './components/UserInfo';

const Viewchart =lazy(() => import('./components/Viewchart'));

class Links extends React.Component {
  constructor(props){
    super(props);
    this.state={
      path:"/addissue",
      loggedIn:false
      }
  }
  verify=()=>{
   alert("Login to add Issue");
    }
  
  logout=()=>{
    let f=localStorage.getItem("username")
    localStorage.setItem("username","")
    window.location.assign("/home")
    alert("you are logged out")
  }
  render() {
    var f=localStorage.getItem("username")
    if(f!=="")
    this.state.loggedIn=true
    return (

<Navbar fixed="top" bg="blue" className="Nav" expand="lg">
  <Navbar.Brand as={Link} to="/home"><h3><b>ISSUES PAGE</b></h3></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link activeclassname="active" as={Link} to="/home"><b>HOME</b></Nav.Link>
      <Nav.Link  as={Link} to="/about"><b>ABOUT</b></Nav.Link>
      {!this.state.loggedIn && <Nav.Link as={Link} to='/login' onClick={this.verify}><b>ADD ISSUE</b></Nav.Link>}
      {this.state.loggedIn && <Nav.Link as={Link} to="/addissue"><b>ADD ISSUE</b></Nav.Link>}
      {!this.state.loggedIn && <Nav.Link as={Link} to="/login"><b>LOGIN</b></Nav.Link>}
      {this.state.loggedIn && <Nav.Link as={Link} to="/userinfo"><b>USER INFO</b></Nav.Link>}
      {this.state.loggedIn && <Nav.Link as={Link} to="/" onClick={this.logout}><b>LOGOUT</b></Nav.Link>}
      {!this.state.loggedIn && <Nav.Link as={Link} to="/register"><b>REGISTER</b></Nav.Link>}
      <Nav.Link as={Link} to="/viewchart"><b>VIEWCHART</b></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}

export default class MyApp2 extends React.Component {
  render() {
      return (
        <Router>
          <div>
            <Links/>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <Route exact path="/home" component={IssuesComponent}/>
              <Route path="/addissue" component={AddIssuesForm} />
              <Route path="/about" render={() => <h2><br></br><br></br><br></br>About:This application is used to track the status of the issues raised</h2> } />
              <Route path="/editissue" render={(props)=>(<EditIssuesForm {...props} />)} />
              <Route path="/login" component={login}/>
              <Route path="/userinfo" component={UserInfo}/>
              <Route path="/register" component={Register}/>
              <Route path="/viewchart" component={Viewchart}/>
              <Route path="/issues/:id" component={IssuesDetailsPage} />
              <Redirect from="/" to="/home" />
              <Redirect from="/about-issue" to="/home" />
            </Switch>
            </Suspense>
          </div>
        </Router>
      );
  }
}