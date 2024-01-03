/*import React from 'react';
import  {withRouter} from 'react-router-dom';
import DeleteIssuesForm from './DeleteIssuesForm';
import * as IssuesActions from '../actions/IssuesActions';
import IssuesComponent from './IssuesComponent';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Deleteissues extends React.Component{
    constructor(props) {
      super(props);
      this.deleteIssue = this.deleteIssue.bind(this);
    }
   deleteIssue(id) {
    this.props.actions.deleteIssue(id);
    this.props.history.push('\IssuesComponent');
    this.props.actions.loadIssues();
    }
    render() {
        return (
            <DeleteIssuesForm onDelete={this.deleteIssue} />
           
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

export default connect(mapStateToProps,mapDispatchToProps)(Deleteissues);*/