import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [expanded, setExpanded] = useState({});

  const removeTask = (empId, taskIdx) => {
    const updatedEmployees = userData.employees.map(emp => {
      if (emp.id === empId) {
        const updatedTasks = emp.tasks.filter((_, idx) => idx !== taskIdx);
        return { ...emp, tasks: updatedTasks };
      }
      return emp;
    });
    setUserData({ employees: updatedEmployees });
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  const reassignTask = (empId, taskIdx, newEmpId) => {
    if (empId === parseInt(newEmpId)) return;
    let taskToMove;
    const updatedEmployees = userData.employees.map(emp => {
      if (emp.id === empId) {
        const updatedTasks = emp.tasks.filter((task, idx) => {
          if (idx === taskIdx) {
            taskToMove = task;
            return false;
          }
          return true;
        });
        return { ...emp, tasks: updatedTasks };
      }
      if (emp.id === parseInt(newEmpId)) {
        return { ...emp, tasks: [...emp.tasks, taskToMove] };
      }
      return emp;
    });
    setUserData({ employees: updatedEmployees });
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  if (!userData || !userData.employees || userData.employees.length === 0) {
    return <p className="text-white mt-10">No employee data available</p>;
  }

  return (
    <div className="bg-[#1C1C1C] p-5 mt-5 rounded">
      <h2 className="text-xl font-semibold text-white mb-4">All Employees and Tasks</h2>
      <div className="space-y-4">
        {userData.employees.map((employee, idx) => (
          <div key={idx} className="bg-gray-800 p-4 rounded cursor-pointer" onClick={() => setExpanded(prev => ({ ...prev, [employee.id]: !prev[employee.id] }))}>
            <h3 className="text-lg font-medium text-white flex justify-between">
              {employee.firstName} ({employee.email})
              <span>{expanded[employee.id] ? '▼' : '▶'}</span>
            </h3>
            <p className="text-sm text-gray-400">Tasks: {employee.tasks.length}</p>
            {expanded[employee.id] && (
              <ul className="mt-2 space-y-1">
                {employee.tasks.map((task, taskIdx) => (
                  <li key={taskIdx} className="text-sm text-gray-300 flex justify-between items-center">
                    <span>- {task.title} ({task.category}) - Status: {task.active ? 'Active' : task.completed ? 'Completed' : task.failed ? 'Failed' : 'New'}</span>
                    <div className="flex gap-2">
                      <select defaultValue={employee.id} className="bg-gray-700 text-white text-xs p-1 rounded" onClick={(e) => e.stopPropagation()}>
                        {userData.employees.map(emp => (
                          <option key={emp.id} value={emp.id}>{emp.firstName}</option>
                        ))}
                      </select>
                      <button onClick={(e) => {
                        e.stopPropagation();
                        const select = e.target.previousElementSibling;
                        reassignTask(employee.id, taskIdx, select.value);
                      }} className="bg-blue-500 text-white text-xs px-2 py-1 rounded">Reassign</button>
                      <button onClick={(e) => {
                        e.stopPropagation();
                        removeTask(employee.id, taskIdx);
                      }} className="bg-red-500 text-white text-xs px-2 py-1 rounded">Remove</button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;