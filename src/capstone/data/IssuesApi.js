import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default class IssuesApi {
	static getAllIssues() {
		return axios.get(" http://localhost:3001/issues")
				.then(res => res.data);
	}
	static getAllUsers() {
		return axios.get(" http://localhost:3001/users")
				.then(res => res.data);
	}
	static saveIssues(issue) {
		return axios.post(" http://localhost:3001/issues", issue)
				.then(res => res.data);
	}
	static deleteIssues(id) {
		return axios.delete(" http://localhost:3001/issues/"+id)
				.then(res => res.data);
	}
	static EditIssues(issue) {
		console.log(issue);
		return axios.put(" http://localhost:3001/issues/"+issue.id,issue)
				.then(res => res.data);
	}
	static saveUser(user) {
		return axios.post(" http://localhost:3001/users", user)
				.then(res => res.data);
	}
} 
