import React from 'react';
import  {withRouter} from 'react-router-dom';
import IssuesForm from './IssuesForm';
import IssuesActions from '../actions/IssuesActions';
import IssuesComponent from './IssuesComponent';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import IssuesApi from'../data/IssuesApi'

export const AddCount=(issue)=>{
    issue.count=issue.count+1;
    axios.put(" http://localhost:3001/issues/"+issue.id,issue)
				.then(res => res.data);
}
