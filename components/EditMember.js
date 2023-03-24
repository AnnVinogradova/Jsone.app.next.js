import React, { useState } from 'react';

export default function EditMember({ user, onEditUser }) {
	const [name, setName] = useState(user.name);
	const [email, setEmail] = useState(user.email);
	const [phone, setPhone] = useState(user.phone);
	const [address, setAddress] = useState(user.address);
	const [website, setWebsite] = useState(user.website);
	const [company, setCompany] = useState(user.website);
	const handleSubmit = (evt) => {
		evt.preventDefault();
		const updateUser = { name, email, phone, address, website, company };
		onEditUser(updateUser);
	}

	return <>
		<tr className="edit-form" onSubmit={handleSubmit} >
			<td><input type='text' value={name} onChange={(evt) => setName(evt.target.value)} placeholder="Enter Name"></input></td>
			<td><input type='text' value={email} onChange={(evt) => setEmail(evt.target.value)} placeholder="Enter Email"></input></td>
			<td><input type='text' value={address} onChange={(evt) => setAddress(evt.target.value)} placeholder="Enter Address"></input></td>
			<td><input type='text' value={phone} onChange={(evt) => setPhone(evt.target.value)} placeholder="Enter Phone"></input></td>
			<td><input type='text' value={website} onChange={(evt) => setWebsite(evt.target.value)} placeholder="Enter Website"></input></td>
			<td><input type='text' value={company} onChange={(evt) => setCompany(evt.target.value)} placeholder="Enter Company"></input></td>
			<td><button type='submit'>Update User</button></td>
		</tr>
	</>
}