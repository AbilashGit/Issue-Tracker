import React, { useState } from 'react';

// Storing multiple values in a single state object leads to more complex syntax
const MultipleStateDataComponent1 = () => {
    const [myObject, setMyObject] = useState({checked: false, count: 0, name: ''});

    const handleChecked = () => setMyObject({...myObject, checked: !myObject.checked});
    const handleCount = (e) => setMyObject({...myObject, count: e.target.value});
    const handleName = (e) => setMyObject({...myObject, name: e.target.value});

	return (
		<>
			<h3>useState - Multiple State Data</h3>
			<input type="checkbox" onChange={handleChecked} defaultChecked={myObject.checked} />
    		<input type="number" onChange={handleCount} defaultValue={myObject.count} />
    		<input type="text" onChange={handleName} defaultValue={myObject.name} />
			<br/>
            <span>Checked: {myObject.checked ? "true" : "false"}, Count: {myObject.count}, Name: {myObject.name}</span>
		</>);
}

// Sometimes better to maintain each value in a separate state; Easier to set and get value.
const MultipleStateDataComponent2 = () => {
    const [checked, setChecked] = useState(false);
	const [count, setCount] = useState(0);
	const [name, setName] = useState('');

    const handleChecked = () => setChecked(prevChecked => !prevChecked);
    const handleCount = (e) => setCount(e.target.value);
    const handleName = (e) => setName(e.target.value);

	return (
		<>
			<h3>useState - Multiple State Data</h3>
			<input type="checkbox" onChange={handleChecked} defaultChecked={checked} />
    		<input type="number" onChange={handleCount} defaultValue={count} />
    		<input type="text" onChange={handleName} defaultValue={name} />
			<br/>
            <span>Checked: {checked ? "true" : "false"}, Count: {count}, Name: {name}</span>
		</>);
}


//export default MultipleStateDataComponent1;
export default MultipleStateDataComponent2;
