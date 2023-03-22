

export default function Table({ user, handleDelete, handleValues }) {
	return <>
		<div>
			<form onSubmit={handleValues}>
				<input type='text' name='username' placeholder="Enter Name"></input>
				<input type='text' name='email' placeholder="Enter Email"></input>
				<input type='text' name='phone' placeholder="Enter Phone"></input>
				<input type='text' name='website' placeholder="Enter Website"></input>
				<button>Add User</button>
			</form>
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
					</tr>
				</thead>
				<tbody>
					{user.map((item => (
						<tr key={item.id + Math.floor((Math.random() * 999999))}>
							<th>{item.id}</th>
							<th>{item.username}</th>
							<th>{item.email}</th>
							<th>{item.phone}</th>
							<th>{item.website}</th>
							<th>
								<button className="edit-btn" onClick={() => { handleUpdate(item) }}>Редактирование данных</button>
							</th>
							<th>
								<button className="delete-btn" onClick={() => { handleDelete(item) }}>Удаление пользователя</button>
							</th>
						</tr>
					)))}
				</tbody>
			</table>
		</div>
	</>
}