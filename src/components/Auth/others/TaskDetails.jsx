import React from 'react';

const TaskDetails = ({ task, empId, taskIdx, employees, onRemove, onReassign, onBack }) => {
  if (!task) {
    return (
      <div className="bg-gray-800 p-5 rounded mt-5">
        <button onClick={onBack} className="bg-gray-600 text-white px-3 py-1 rounded mb-4">Back</button>
        <p className="text-white">Task not found.</p>
      </div>
    );
  }

  const handleReassign = (e) => {
    const newEmpId = e.target.previousElementSibling.value;
    onReassign(empId, taskIdx, newEmpId);
  };

  return (
    <div className="bg-gray-800 p-5 rounded mt-5">
      <button onClick={onBack} className="bg-gray-600 text-white px-3 py-1 rounded cursor-pointer mb-4">Back</button>
      <h3 className="text-xl font-semibold text-white mb-2">{task.title}</h3>
      <p className="text-gray-300 mb-2"><strong>Category:</strong> {task.category}</p>
      <p className="text-gray-300 mb-2"><strong>Date:</strong> {task.date}</p>
      <p className="text-gray-300 mb-2"><strong>Description:</strong> {task.description}</p>
      <p className="text-gray-300 mb-4"><strong>Status:</strong> {task.active ? 'Active' : task.completed ? 'Completed' : task.failed ? 'Failed' : 'New'}</p>
      <div className="flex gap-2">
        <select defaultValue={empId} className="bg-gray-700 text-white p-2 rounded cursor-pointer">
          {employees.map(emp => (
            <option key={emp.id} value={emp.id}>{emp.firstName}</option>
          ))}
        </select>
        <button onClick={handleReassign} className="bg-blue-500 text-white px-3 py-1 rounded cursor-pointer">Reassign</button>
        <button onClick={() => onRemove(empId, taskIdx)} className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer">Remove</button>
      </div>
    </div>
  );
};

export default TaskDetails;