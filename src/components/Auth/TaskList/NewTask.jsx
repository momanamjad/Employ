import React from "react";

const NewTask = () => {
  return (
    <div className="shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h2 className="bg-red-600 text-sm px-3 py-1 rounded">High</h2>
        <h4 className="text-sm">20 feb 2020</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">git push daily</h2>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex hic nobis
      </p>
      <div className="mt-4">
        <button>Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;
