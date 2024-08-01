import React from 'react';
import { FaEye } from 'react-icons/fa';
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import user1 from '../../images/user1.jpg';
import PaginationTable from '../../components/Pagination';

const users = [
  {
    id: 1,
    profilePhoto: user1,
    firstName: 'John',
    lastName: 'Doe',
    contact: '123-456-7890',
    address: '1234 Long Address Street Name, City, State, Zip Code',
    email: 'john.doe@example.com',
    password: '********',
  },
  {
    id: 2,
    profilePhoto: user1,
    firstName: 'John',
    lastName: 'Doe',
    contact: '123-456-7890',
    address: '1234 Long Address Street Name, City, State, Zip Code',
    email: 'john.doe@example.com',
    password: '********',
  },
  {
    id: 3,
    profilePhoto: user1,
    firstName: 'John',
    lastName: 'Doe',
    contact: '123-456-7890',
    address: '1234 Long Address Street Name, City, State, Zip Code',
    email: 'john.doe@example.com',
    password: '********',
  },
  {
    id: 4,
    profilePhoto: user1,
    firstName: 'John',
    lastName: 'Doe',
    contact: '123-456-7890',
    address: '1234 Long Address Street Name, City, State, Zip Code',
    email: 'john.doe@example.com',
    password: '********',
  },
  {
    id: 5,
    profilePhoto: user1,
    firstName: 'John',
    lastName: 'Doe',
    contact: '123-456-7890',
    address: '1234 Long Address Street Name, City, State, Zip Code',
    email: 'john.doe@example.com',
    password: '********',
  },
  {
    id: 6,
    profilePhoto: user1,
    firstName: 'John',
    lastName: 'Doe',
    contact: '123-456-7890',
    address: '1234 Long Address Street Name, City, State, Zip Code',
    email: 'john.doe@example.com',
    password: '********',
  },
  {
    id: 7,
    profilePhoto: user1,
    firstName: 'John',
    lastName: 'Doe',
    contact: '123-456-7890',
    address: '1234 Long Address Street Name, City, State, Zip Code',
    email: 'john.doe@example.com',
    password: '********',
  },
  {
    id: 8,
    profilePhoto: user1,
    firstName: 'John',
    lastName: 'Doe',
    contact: '123-456-7890',
    address: '1234 Long Address Street Name, City, State, Zip Code',
    email: 'john.doe@example.com',
    password: '********',
  },
  {
    id: 9,
    profilePhoto: user1,
    firstName: 'John',
    lastName: 'Doe',
    contact: '123-456-7890',
    address: '1234 Long Address Street Name, City, State, Zip Code',
    email: 'john.doe@example.com',
    password: '********',
  },
  {
    id: 10,
    profilePhoto: user1,
    firstName: 'John',
    lastName: 'Doe',
    contact: '123-456-7890',
    address: '1234 Long Address Street Name, City, State, Zip Code',
    email: 'john.doe@example.com',
    password: '********',
  },
  {
    id: 11,
    profilePhoto: user1,
    firstName: 'John',
    lastName: 'Doe',
    contact: '123-456-7890',
    address: '1234 Long Address Street Name, City, State, Zip Code',
    email: 'john.doe@example.com',
    password: '********',
  },
  {
    id: 12,
    profilePhoto: user1,
    firstName: 'John',
    lastName: 'Doe',
    contact: '123-456-7890',
    address: '1234 Long Address Street Name, City, State, Zip Code',
    email: 'john.doe@example.com',
    password: '********',
  },
  {
    id: 13,
    profilePhoto: user1,
    firstName: 'John',
    lastName: 'Doe',
    contact: '123-456-7890',
    address: '1234 Long Address Street Name, City, State, Zip Code',
    email: 'john.doe@example.com',
    password: '********',
  },
  {
    id: 14,
    profilePhoto: user1,
    firstName: 'John',
    lastName: 'Doe',
    contact: '123-456-7890',
    address: '1234 Long Address Street Name, City, State, Zip Code',
    email: 'john.doe@example.com',
    password: '********',
  },
  {
    id: 15,
    profilePhoto: user1,
    firstName: 'John',
    lastName: 'Doe',
    contact: '123-456-7890',
    address: '1234 Long Address Street Name, City, State, Zip Code',
    email: 'john.doe@example.com',
    password: '********',
  },
  // Add more user data as needed
];

const columns = [
  "ID", 
  "Profile Photo", 
  "First Name", 
  "Last Name", 
  "Contact", 
  "Address", 
  "Email", 
  "Password", 
  "Actions"
];

const UserManagement = () => {
  const renderRow = (user) => (
    <>
      <td>{user.id}</td>
      <td>
        <img src={user.profilePhoto} alt="Profile" className="profile-photo" />
      </td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.contact}</td>
      <td>{user.address.length > 50 ? `${user.address.substring(0, 50)}...` : user.address}</td>
      <td>{user.email}</td>
      <td>{user.password}</td>
      <td className="actions">
        <button className="view-btn"><FaEye /></button>
        <button className="edit-btn"><MdModeEdit /></button>
        <button className="delete-btn"><MdDelete /></button>
      </td>
    </>
  );

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <PaginationTable data={users} columns={columns} renderRow={renderRow} />
    </div>
  );
};

export default UserManagement;
