import React from 'react';
import  {withRouter} from 'react-router-dom';
import IssuesForm from './IssuesForm';
import * as IssuesActions from '../actions/IssuesActions';
import IssuesComponent from './IssuesComponent';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class AddIssuesForm extends React.Component{
    constructor(props) {
      super(props);
      this.addIssue = this.addIssue.bind(this);
    }
   addIssue(issue) {
    issue.count=0;
    this.props.actions.addIssue(issue);
    issue.count=0;
    this.props.history.push('\IssuesComponent');
  }
    render() {
        return (
            <IssuesForm onSave={this.addIssue} />
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

export default connect(mapStateToProps,mapDispatchToProps)(AddIssuesForm);