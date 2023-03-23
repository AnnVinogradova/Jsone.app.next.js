
export default function EditMember({ item, user, setUser }) {

	function handleName(evt) {
		const name = evt.target.value;
		const updateUser = user.map((u) => u.id === item.id ? { ...u, name: name } : u)
		setUser(updateUser)
	}
	function handleEmail(evt) {
		const email = evt.target.value;
		const updateUser = user.map((u) => u.id === item.id ? { ...u, email: email } : u)
		setUser(updateUser)
	}
	function handleAddress(evt) {
		const address = evt.target.value;
		const updateUser = user.map((u) => u.id === item.id ? { ...u, address: address } : u)
		setUser(updateUser)
	}
	function handlePhone(evt) {
		const phone = evt.target.value;
		const updateUser = user.map((u) => u.id === item.id ? { ...u, phone: phone } : u)
		setUser(updateUser)
	}
	function handleWebsite(evt) {
		const website = evt.target.value;
		const updateUser = user.map((u) => u.id === item.id ? { ...u, website: website } : u)
		setUser(updateUser)
	}
	function handleCompany(evt) {
		const company = evt.target.value;
		const updateUser = user.map((u) => u.id === item.id ? { ...u, company: company } : u)
		setUser(updateUser)
	}
	return <>
		<tr className="edit-form">
			<td><input type='text' onChange={handleName} value={item.username} name='username' placeholder="Enter Name"></input></td>
			<td><input type='text' onChange={handleEmail} value={item.email} name='email' placeholder="Enter Email"></input></td>
			<td><input type='text' onChange={handleAddress} value={item.address.city} name='address.city' placeholder="Enter City"></input></td>
			<td><input type='text' onChange={handlePhone} value={item.phone} name='phone' placeholder="Enter Phone"></input></td>
			<td><input type='text' onChange={handleWebsite} value={item.website} name='website' placeholder="Enter Website"></input></td>
			<td><input type='text' onChange={handleCompany} value={item.company.name} name='company.name' placeholder="Enter Company"></input></td>
			<td><button type='submit'>Update User</button></td>
		</tr>
	</>
}