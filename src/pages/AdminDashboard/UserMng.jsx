import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEye } from 'react-icons/fa';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import user1 from '../../images/user1.jpg';
import PaginationTable from '../../components/Pagination';

const columns = [
  "ID", 
  "Profile Photo", 
  "First Name", 
  "Last Name", 
  "Contact", 
  "Address", 
  "Email", 
  "Actions"
];

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/auth/admin/users');
        setUsers(response.data);
        // console.log(response.data)
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Failed to fetch users');
      }
    };

    fetchUsers();
  }, []);

  const handleView = (id) => {
    navigate(`/profile/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/profile/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/auth/admin/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
      setError('');
    } catch (error) {
      console.error('Error deleting user:', error.response || error.message || error);
      setError('Failed to delete user');
    }
  };

  const renderRow = (user) => (
    <>
      <td>{user.id}</td>
      <td>
        <img src={user.profilePhoto || user1} alt="Profile" className="profile-photo" />
      </td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.contactNumber}</td>
      <td>{user.address?.length > 50 ? `${user.address.substring(0, 50)}...` : user.address}</td>
      <td>{user.email}</td>
      <td className="actions">
        <button className="view-btn" onClick={() => handleView(user.id)}><FaEye /></button>
        {/* <button className="edit-btn" onClick={() => handleEdit(user.id)}><MdModeEdit /></button> */}
        <button className="delete-btn" onClick={() => handleDelete(user.id)}><MdDelete /></button>
      </td>
    </>
  );

  return (
    <div className="user-management">
      <h2>User Management</h2>
      {error && <p className="error">{error}</p>}
      {users.length > 0 ? (
        <PaginationTable data={users} columns={columns} renderRow={renderRow} />
      ) : (
        <p>No users available</p>
      )}
    </div>
  );
};

export default UserManagement;
