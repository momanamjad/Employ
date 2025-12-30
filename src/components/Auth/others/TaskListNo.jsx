import React from "react";

const TaskListNo = ({ data }) => {
  console.log(data);
  return (
    <div className="flex screen justify-between gap-5 ">
      <div className="w-[45%] py-6 px-9 bg-red-400 mt-10 rounded-xl    ">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="w-[45%] py-6 px-9 bg-blue-400 mt-10 rounded-xl    ">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="w-[45%] py-6 px-9 bg-green-400 mt-10 rounded-xl    ">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="w-[45%] py-6 px-9 bg-yellow-400 mt-10 rounded-xl    ">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNo;
