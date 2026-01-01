import React, { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [AssignTo, setAssignTo] = useState("");
  const [Category, setCategory] = useState("");
  const [task, setTask] = useState([ ]);

  const submitHandler = (e) => {

    
    e.preventDefault();
    setTask(  { taskTitle, taskDescription, taskDate, AssignTo, Category,active:false,newTask:true,failed:false,completed:false });
    console.log(task);
    setAssignTo("");
    setCategory("");
    setTaskDate("");
    setTaskDescription("");
    setTaskTitle("");
    
  };

  return (
    <div className="p-5 bg-[#1C1C1C mt-7 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex width-full flex-wrap  items-start justify-between"
      >
        <div className="width-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5 ">Task Title</h3>
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              placeholder="make"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5 ">Date</h3>
            <input
              required
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              type="date"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5 ">Assign to </h3>
            <input
              required
              type="text"
              value={AssignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              placeholder="employ Name"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5 ">Catagory</h3>
            <input
              required
              type="text"
              value={Category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              placeholder="Design/Dev/etc"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5 ">Description</h3>
          <textarea
            required
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
            columns="50"
            rows="10"
          ></textarea>
          <button className="cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-white text-sm  w-full py-1 px-5 rounded mt-4">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
