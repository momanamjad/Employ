import React, { useContext } from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';
import { AuthContext } from '../../../context/AuthProvider';

const AdminDashboard = (props) => {
  const [userData] = useContext(AuthContext); // Access for loading check

  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      {userData && userData.employees ? <AllTask /> : <p className="text-white mt-10">Loading employee data...</p>}
    </div>
  );
};

export default AdminDashboard;