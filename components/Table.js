import EditMember from "./EditMember"

export default function Table({ user, handleDelete, handleValues, handleEdit }) {
	return <>
		<div>
			<div className="add-form">
				<form onSubmit={handleValues}>
					<input type='text' name='username' placeholder="Enter Name"></input>
					<input type='text' name='email' placeholder="Enter Email"></input>
					<input type='text' name='phone' placeholder="Enter Phone"></input>
					<input type='text' name='website' placeholder="Enter Website"></input>
					<button className="add-btn">Add User</button>
				</form>
			</div>
			<table className='table'>
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Email</th>
						<th>Address</th>
						<th>Phone</th>
						<th>Website</th>
						<th>Company.name</th>
						<th>Action</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{user.map((item => (
						<tr key={item.id + Math.floor((Math.random() * 999999))}>
							<th>{item.id}</th>
							<th>{item.username}</th>
							<th>{item.email}</th>
							{/* <th>{item.address.city}</th> */}
							<th>{item.phone}</th>
							<th>{item.website}</th>
							{/* <th>{item.company.name}</th> */}
							<th>
								<button className="edit-btn" onClick={() => { handleEdit }}>Edit User</button>
							</th>
							<th>
								<button className="delete-btn" onClick={() => { handleDelete(item.id) }}>Delete User</button>
							</th>
						</tr>
					)))}
				</tbody>
			</table>
		</div>
	</>
}