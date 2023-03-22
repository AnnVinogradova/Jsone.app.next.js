export default function EditMember() {
	return <>
		<tr>
			<td><input type='text' name='username' placeholder="Enter Name"></input></td>
			<td><input type='text' name='email' placeholder="Enter Email"></input></td>
			<td><input type='text' name='phone' placeholder="Enter Phone"></input></td>
			<td><input type='text' name='website' placeholder="Enter Website"></input></td>
			<td><button type='submit'>Update User</button></td>
		</tr>
	</>
}