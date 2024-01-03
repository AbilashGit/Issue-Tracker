/*import React from 'react';
import IssuesApi from '../data/IssuesApi';

export default class DeleteIssuesForm extends React.Component {
    constructor(props) {
      super(props);
      this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick() {
      var id;  
      id = this.refs.id1.value;
      this.props.onDelete(id);
    }

    render() {
        return (
          <div>
              <br></br><br></br>
            <span>Enter ID: </span>
            <input type="text" ref="id1"/><br/><br/>
            <button onClick={this.onDeleteClick}>Delete Issues</button>
          </div>
        );
    }
}
*/