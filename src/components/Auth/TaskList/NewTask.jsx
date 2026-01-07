import React from "react";

const NewTask = ({data, index, updateTask}) => {
  const handleAccept = () => {
    updateTask(index, { active: true, newTask: false })
  }

  return (
    <div className="shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h2 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h2>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">
        {data.description}
      </p>
      <div className="mt-4">
        <button onClick={handleAccept} className="bg-blue-500 text-white px-4 py-2 rounded">Accept the Task</button>
      </div>
    </div>
  );
};

export default NewTask;
