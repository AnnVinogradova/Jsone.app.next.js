import EditMember from "./EditMember"
import { useState } from 'react'

export default function Table({ user, setUser, handleDelete, handleValues, onEditUser }) {
	const [editState, setEditState] = useState([-1])

	function handleEdit(id) {
		setEditState(id)
	}

	function handleUpdate(evt) {
		evt.preventDefault()
		const name = evt.target.elements.username
		const email = evt.target.elements.email
		const address = evt.target.elements.address?.city
		const phone = evt.target.elements.phone
		const website = evt.target.elements.website
		const company = evt.target.elements.company?.name
		const updateUser = user.map(u => u.id === editState ? {
			...u, name: name,
			email: email, address: address, phone: phone,
			website: website, company: company
		} : u)
		setEditState(-1)
		onEditUser(updateUser)
	}


	return <>
		<div>
			<div className="add-form">
				<form onSubmit={handleValues} setUser={setUser}>
					<input type='text' name='username' placeholder="Enter Name"></input>
					<input type='text' name='email' placeholder="Enter Email"></input>
					<input type='text' name='address.city' placeholder="Enter City"></input>
					<input type='text' name='phone' placeholder="Enter Phone"></input>
					<input type='text' name='website' placeholder="Enter Website"></input>
					<input type='text' name='company.name' placeholder="Enter Company"></input>
					<button className="add-btn">Add User</button>
				</form>
			</div>
			<form onSubmit={handleUpdate} setUser={setUser}>
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
							editState === item.id ? <EditMember item={item} user={user} onEditUser={onEditUser} /> :
								<tr key={item.id + Math.floor((Math.random() * 999999))}>
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