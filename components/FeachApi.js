
import { useEffect, useState } from 'react'
import Table from './Table'

export default function FeachAPI() {
	const [user, setUser] = useState([])
	const [nextId, setNextId] = useState(11);
	const [sortType, setSortType] = useState('asc');
	const [sortUsers, setSortUsers] = useState(null); sortUsers

	const fetchData = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => setUser(data))
			.catch(err => console.log(err))
	}

	useEffect(() => {
		fetchData();
	}, [])

	function handleValues(evt) {
		evt.preventDefault();
		const username = evt.target.elements.username.value;
		const email = evt.target.elements.email.value;
		const address = evt.target.elements.address;
		const phone = evt.target.elements.phone.value;
		const website = evt.target.elements.website.value;
		const company = evt.target.elements.company;
		const newUser = {
			id: nextId,
			username,
			email,
			address,
			phone,
			website,
			company,
		}
		setUser(prevData => prevData.concat(newUser))
		setNextId(nextId + 1)
	}


	function handleDelete(id) {
		const updateData = user.filter((u) => id !== u.id)
		setUser(updateData)
	}


	return <>
		<div className='table-block'>
			<Table user={user} handleValues={handleValues} handleDelete={handleDelete} />
		</div>
	</>
}