
import { useEffect, useState } from 'react'
import Table from './Table'

export default function FeachAPI() {
	const [users, setUsers] = useState([]); // это все же не один пользователь 
	const [nextId, setNextId] = useState(11);
	const [sortType, setSortType] = useState('asc'); // is declared but its value is never read - убираем
	const [sortUsers, setSortUsers] = useState(null); // is declared but its value is never read - убираем

	const fetchData = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => setUsers(data))
			.catch(err => console.log(err))
	}

	useEffect(() => {
		fetchData();
	}, [])

	function handleValues(evt) { // вы тут полагаетесь на внутреннее устройство другого компонента <Table> - так делать не следует
		evt.preventDefault(); // лучше передать в компонент <Table> колбэк через который он вернет объект для нового пользователя
		const username = evt.target.elements.username.value; // а всю эту "внутреннюю кухню" спрятать в <Table>
		const email = evt.target.elements.email.value;
		const city = evt.target.elements.addressCity.value; // тут так - без этого не работало
		const phone = evt.target.elements.phone.value;
		const website = evt.target.elements.website.value;
		const company = evt.target.elements.companyName.value; // и тут
		console.log('handleValues evt.target.elements=',evt.target.elements); // посмотрите что здесь
		const newUser = {
			id: nextId,
			username,
			email,
			address:{city}, // это же вложенная структура!
			phone,
			website,
			company:{name:company} // и это
		}
		setUsers(prevData => prevData.concat(newUser))
		setNextId(nextId + 1)
	}


	function handleDelete(id) {
		const updateData = users.filter((u) => id !== u.id)
		setUsers(updateData)
	}


	return <>
		<div className='table-block'>
			<Table user={users} handleValues={handleValues} handleDelete={handleDelete} />
		</div>
	</>
}