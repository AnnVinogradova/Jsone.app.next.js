import { useEffect, useState } from 'react'
import axios from 'axios'
import Table from './Table'
import InputForm from './InputForm'

export default function FeachAPI() {
	const url = 'https://jsonplaceholder.typicode.com/users'

	const [contactUsers, setContactUsers] = useState([]);
	const [directionSort, setDirectionSort] = useState([]);
	const [newRow, setNewRow] = useState([]);

	const sortUsers = (field) => {
		const newData = contactUsers.concat();

		let sortUsers;

		if (directionSort) {
			sortUsers = newData.sort(
				(a, b) => { return a[field] > b[field] ? 1 : -1 }
			)
		} sortUsers = newData.reverse(
			(a, b) => { return a[field] > b[field] ? 1 : -1 }
		)

		setContactUsers(sortUsers);
		setDirectionSort(!directionSort);
	}
	useEffect(() => {
		axios.get(url)
			.then(
				(res) => {
					setContactUsers(res.data)
				}
			)
	}, [])

	const getInputFormData = ({ id, username, email, phone, website }) => {
		setNewRow({ id, username, email, phone, website })
	}

	// sortUsers.unshift(newRow)
	// console.log(newRow)

	return <>
		<div className='table-block'>
			<InputForm getInputFormData={getInputFormData} />
			<Table contactUsers={contactUsers} sortUsers={sortUsers} />
		</div>
	</>
}