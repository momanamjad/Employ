import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  console.log(data);
  return (
    <div
      id="taskList"
      className="h-[55%] overflow-x-auto py-5 w-full flex items-center justify-start gap-5 flex-now mt-10 "
    >
      {data.tasks.map((elem) => {
        if (elem.active) {
          return <AcceptTask />;
        }
        if (elem.newTask) {
          return <NewTask />;
        }
        if (elem.completed) {
          return <CompleteTask />;
        }
        if (elem.failed) {
          return <FailedTask />;
        }
      })}
    </div>
  );
};

export default TaskList;
