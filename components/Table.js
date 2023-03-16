
export default function Table({ sortUsers, contactUsers, handleDelete, handleUpdate }) {
	return <>
		<div>
			<table className='table'>
				<thead>
					<tr>
						<th onClick={() => { sortUsers('id') }}>Id</th>
						<th onClick={() => { sortUsers('username') }}>Name</th>
						<th onClick={() => { sortUsers('email') }}>Email</th>
						<th onClick={() => { sortUsers('phone') }}>Phone</th>
						<th onClick={() => { sortUsers('website') }}>Website</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{contactUsers.map((item => (
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