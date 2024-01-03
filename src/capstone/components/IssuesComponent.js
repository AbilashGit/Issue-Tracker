import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as IssuesActions from '../actions/IssuesActions';
import IssueComponent from './IssueComponent';
import IssuesForm from './IssuesForm';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';
import EditIssuesForm from './EditIssuesForm';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Dropdown from 'react-bootstrap/Dropdown';

var currentID = 0;
class IssuesComponent extends Component {
  constructor(props) {
    super(props);
    this.deleteIssue = this.deleteIssue.bind(this);
    this.state = {
      search: '', username: 'Guest',
      severitycheck: true,
      Statuscheck: true,
      isdcheck: true,
      rdatecheck: true
    }
  }

  deleteIssue(id) {
    this.props.actions.deleteIssue(id);
    this.props.actions.loadIssues();
    this.props.actions.loadIssues();
    window.location.reload();
    alert("issue deleted successfully!!")

  }
  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }
  render() {
    let filteredIssues = this.props.issues.filter((issue) => {
      return issue.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    })

    var f = localStorage.getItem("username")
    console.log("User Id for Login" + f)

    return (

      <div>
        <br></br><br></br><br></br>
        <h1>Issues List</h1>
        <br></br>
        <h2>Welcome {f}</h2>
        <br></br>
        <input type="text" placeholder="Search the Issues..."
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Customize
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <label htmlFor="severitycheck">
              <input type="checkbox" id="severitycheck" name="severitycheck" value={this.state.severitycheck} onChange={(e) =>
                this.setState({ severitycheck: !this.state.severitycheck })
              } />Severity</label>&nbsp;&nbsp;
            <label htmlFor="Statuscheck">
              <input type="checkbox" id="Statuscheck" name="Statuscheck" value={this.state.Statuscheck} onChange={(e) =>
                this.setState({ Statuscheck: !this.state.Statuscheck })
              } ></input>Status</label>&nbsp;&nbsp;
            <label htmlFor="isdcheck">
              <input type="checkbox" id="isdcheck" value={this.state.isdcheck} onChange={(e) =>
                this.setState({ isdcheck: !this.state.isdcheck })
              } />Issue Desciption</label>&nbsp;&nbsp;
            <label htmlFor="rdatecheck">
              <input type="checkbox" id="rdatecheck" value={this.state.rdatecheck} onChange={(e) =>
                this.setState({ rdatecheck: !this.state.rdatecheck })
              } />Resolved Date</label>
          </Dropdown.Menu>

        </Dropdown>


        <br></br><br></br><br></br>
        <Container fluid>
          <Row xs={1} md={3}>
            {filteredIssues.map(issue =>
              <IssueComponent key={issue.id} severitycheck={this.state.severitycheck} Statuscheck={this.state.Statuscheck}
                isdcheck={this.state.isdcheck} rdatecheck={this.state.rdatecheck} id={issue.id} id={issue.id} title={issue.title}
                isd={issue.isd} severity={issue.severity} Status={issue.Status}
                cdate={issue.cdate} rdate={issue.rdate} count={issue.count}
                onDelete={this.deleteIssue} />
            )}
            <br></br>
          </Row>
        </Container>
        <br></br>
      </div>);
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

export default connect(mapStateToProps, mapDispatchToProps)(IssuesComponent);