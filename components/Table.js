import EditMember from "./EditMember"
import { useState } from 'react'

export default function Table({ user, handleDelete, handleValues  }) { //setUser и onEditUser сюда не передаются
	const [editState, setEditState] = useState([-1])

	function handleEdit(id) {
		setEditState(id)
	}

	function handleUpdate(evt) { // теперь жто не нужно - убираем 
		console.log('handleUpdate evt.target.elements=',evt.target.elements); // посмотрите что здесь
		evt.preventDefault()
		const name = evt.target.elements.username
		const email = evt.target.elements.email
		const address = evt.target.elements.addressCity ; // по именам обращаетесь - не могут они быть вложенными
		const phone = evt.target.elements.phone
		const website = evt.target.elements.website
		const company = evt.target.elements.companyName
		const updateUser = user.map(u => u.id === editState ? {
			...u, name: name,
			email: email, address: address, phone: phone,
			website: website, company: company
		} : u)
		setEditState(-1)
		onEditUser(updateUser)
	}
	function onEditUser(user){
		// тут ничего сделать нельзя пока массив пользователей это стейт родителя
		// и родитель не предоставляет этому компоненту кол-бэк для его изменения
		// исправляем ситуацию
	}

	return <>
		<div>
			<div className="add-form">
				<form onSubmit={handleValues}> {/* это же html элемент тут магия React не работает */}
					<input type='text' name='username' placeholder="Enter Name"></input>
					<input type='text' name='email' placeholder="Enter Email"></input>
					<input type='text' name='addressCity' placeholder="Enter City"></input>
					<input type='text' name='phone' placeholder="Enter Phone"></input>
					<input type='text' name='website' placeholder="Enter Website"></input>
					<input type='text' name='companyName' placeholder="Enter Company"></input>
					<button className="add-btn">Add User</button>
				</form>
			</div>
			<form> {/* и тут */}
				<table className='table'>
					<thead>
						<tr>
							<th>Id</th>
							<th>Name</th>
							<th>Email</th>
							<th>Address</th>
							<th>Phone</th>
							<th>Website</th>
							<th>Company</th>
							<th>Action</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{user.map((item => (
							editState === item.id ? <EditMember key={item.id} item={item} user={item} onEditUser={onEditUser} /> :
								<tr key={item.id + Math.floor((Math.random() * 999999))} serg-comment="какой смысл в случайном ключе? - исправьте!">
									<th>{item.id}</th>
									<th>{item.username}</th>
									<th>{item.email}</th>
									<th>{item.address?.city}</th>
									<th>{item.phone}</th>
									<th>{item.website}</th>
									<th>{item.company?.name}</th>
									<th>
										<button className="edit-btn" type='button' onClick={() => { handleEdit(item.id) }}>Edit User</button>
									</th>
									<th>
										<button className="delete-btn" type='button' onClick={() => { handleDelete(item.id) }}>Delete User</button>
									</th>
								</tr>
						)))}
					</tbody>
				</table>
			</form>
		</div>
	</>
}