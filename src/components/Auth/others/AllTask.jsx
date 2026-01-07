import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  if (!userData || !userData.employees || userData.employees.length === 0) {
    return <p className="text-white mt-10">No employee data available</p>;
  }

  return (
    <div className="bg-[#1C1C1C] p-5 mt-5 rounded">
      <h2 className="text-xl font-semibold text-white mb-4">All Employees and Tasks</h2>
      <div className="space-y-4">
        {userData.employees.map((employee, idx) => (
          <div key={idx} className="bg-gray-800 p-4 rounded">
            <h3 className="text-lg font-medium text-white">{employee.firstName} ({employee.email})</h3>
            <p className="text-sm text-gray-400">Tasks: {employee.tasks.length}</p>
            <ul className="mt-2 space-y-1">
              {employee.tasks.map((task, taskIdx) => (
                <li key={taskIdx} className="text-sm text-gray-300">
                  - {task.title} ({task.category}) - Status: {task.active ? 'Active' : task.completed ? 'Completed' : task.failed ? 'Failed' : 'New'}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;