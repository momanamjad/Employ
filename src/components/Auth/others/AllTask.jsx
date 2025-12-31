import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const AllTask = () => {
  const { employees } = useContext(AuthContext);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <div className="bg-[#1C1C1C] p-5 mt-5 rounded relative">

      {/* Header */}
      <div className="bg-red-400 py-2 px-4 mb-2 flex justify-between rounded font-semibold">
        <h2 className="w-1/5">Employee</h2>
        <h5>Total</h5>
        <h5>New</h5>
        <h5>Active</h5>
        <h5>Completed</h5>
        <h5>Failed</h5>
      </div>

      {/* Rows */}
      <div className="overflow-auto h-[80%]">
        {employees.map((emp) => {
          const total = emp.tasks.length;
          const newTasks = emp.tasks.filter(t => t.newTask).length;
          const active = emp.tasks.filter(t => t.statusCode === 1).length;
          const completed = emp.tasks.filter(t => t.statusCode === 3).length;
          const failed = emp.tasks.filter(t => t.statusCode === 4).length;

          return (
            <div
              key={emp.id}
              onClick={() => setSelectedEmployee(emp)}
              className="bg-emerald-600 cursor-pointer hover:bg-emerald-500 py-2 px-4 mb-2 flex justify-between rounded"
            >
              <h2 className="w-1/5">{emp.firstName}</h2>
              <h5>{total}</h5>
              <h5>{newTasks}</h5>
              <h5>{active}</h5>
              <h5>{completed}</h5>
              <h5>{failed}</h5>
            </div>
          );
        })}
      </div>

      {/* ================= MODAL ================= */}
{selectedEmployee && (
  <div
    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    onClick={() => setSelectedEmployee(null)} // 👈 click outside = close
  >
    <div
      className="bg-white w-[600px] p-5 rounded text-black"
      onClick={(e) => e.stopPropagation()} // 👈 prevent close on inner click
    >
      <div className="flex justify-between mb-3">
        <h2 className="text-xl font-bold">
          {selectedEmployee.firstName}'s Analytics
        </h2>
        <button
          onClick={() => setSelectedEmployee(null)}
          className="text-red-600 font-bold text-xl"
        >
          ✕
        </button>
      </div>

      {selectedEmployee.tasks.map((task, i) => (
        <div
          key={i}
          className={`p-3 mb-2 rounded text-white
            ${task.statusCode === 1 && "bg-blue-500"}
            ${task.statusCode === 3 && "bg-green-500"}
            ${task.statusCode === 4 && "bg-red-500"}
          `}
        >
          <h3 className="font-semibold">{task.title}</h3>
          <p className="text-sm">{task.description}</p>
          <span className="text-xs italic">{task.category}</span>
        </div>
      ))}
    </div>
  </div>
)}

    </div>
  );
};

export default AllTask;
