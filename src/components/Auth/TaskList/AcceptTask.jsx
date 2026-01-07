import React from "react";

const AcceptTask = ({ data, index, updateTask }) => {
  const handleCompleted = () => {
    updateTask(index, { completed: true, active: false })
  }

  const handleFailed = () => {
    updateTask(index, { failed: true, active: false })
  }

  console.log(data)
  return (
    <div className="shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h2 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h2>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">
        {data.description}
      </p>
      <div className="flex justify-between mt-4">
        <button onClick={handleCompleted} className="bg-green-500 text-white px-2 py-1 rounded text-sm cursor-pointer">
          Mark as completed
        </button>
        <button onClick={handleFailed} className="bg-red-500 text-white px-2 py-1 rounded  text-sm cursor-pointer">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
