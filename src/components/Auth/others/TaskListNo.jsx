import React from "react";

const TaskListNo = ({ data }) => {
  return (
    <div className="flex screen justify-between gap-5 ">
      <div className="w-[45%] py-6 px-9 bg-red-400 mt-10 rounded-xl    ">
        <h2 className="text-3xl font-semibold">
          {data.tasks.filter((task) => task.newTask).length}
        </h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="w-[45%] py-6 px-9 bg-blue-400 mt-10 rounded-xl    ">
        <h2 className="text-3xl font-semibold">
          {data.tasks.filter((task) => task.completed).length}
        </h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="w-[45%] py-6 px-9 bg-green-400 mt-10 rounded-xl    ">
        <h2 className="text-3xl font-semibold">
          {data.tasks.filter((task) => task.active).length}
        </h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="w-[45%] py-6 px-9 bg-yellow-400 mt-10 rounded-xl    ">
        <h2 className="text-3xl font-semibold">
          {data.tasks.filter((task) => task.failed).length}
        </h2>
        <h3 className="text-xl font-medium">Failed Tasks</h3>
      </div>
    </div>
  );
};

export default TaskListNo;
