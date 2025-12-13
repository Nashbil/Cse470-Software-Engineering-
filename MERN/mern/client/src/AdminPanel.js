import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await axios.get('http://localhost:5050/api/admin/requests'); // Update if your backend URL is different
      console.log('Fetched requests:', response.data); // Debugging log
      setRequests(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching requests:', error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:5050/api/admin/requests/${id}`, { status });
      fetchRequests(); // Refresh the list
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Email</th>
            <th>File</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(req => (
            <tr key={req._id}>
              <td>{req.requestID}</td>
              <td>{req.userDetails.name}</td>
              <td>{req.userDetails.email}</td>
              <td>{req.fileRequested}</td>
              <td>{req.status}</td>
              <td>
                <button onClick={() => updateStatus(req._id, 'Approved')}>Approve</button>
                <button onClick={() => updateStatus(req._id, 'Rejected')}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
