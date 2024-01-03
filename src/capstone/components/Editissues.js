/*import React from 'react';
import  {withRouter} from 'react-router-dom';
import EditIssuesForm from './EditIssuesForm';
import * as IssuesActions from '../actions/IssuesActions';
import IssuesComponent from './IssuesComponent';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Editissues extends React.Component{
    constructor(props) {
      super(props);
      this.EditIssue = this.EditIssue.bind(this);
    }
   EditIssue(issue) {
    this.props.actions.EditIssue(issue);
    this.props.history.push('\IssuesComponent');
    this.props.actions.loadIssues();
    this.props.history.push('\IssuesComponent');
    }
    render() {
      let id=this.props.match.params.id
        return (
          <div>   
          <EditIssuesForm id={this.id} onEdit={this.EditIssue} />
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

export default connect(mapStateToProps,mapDispatchToProps)(Editissues);*/