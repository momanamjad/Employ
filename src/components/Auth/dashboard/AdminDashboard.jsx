import React from "react";
import Header from "../others/Header";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10">
      <Header />
      <div>
        <form className="flex items-start justify-between">
          <div>
            <h3>Task Title</h3>
            <input type="text" placeholder="make" />
          </div>
          <div>
            <h3>Description</h3>
            <textarea name="" id="" columns="50" rows="10"></textarea>
          </div>
          <div>
            <h3>Date</h3>
            <input type="date" />
          </div>
          <div>
            <h3>Assign to </h3>
            <input type="text" placeholder="employ Name" />
          </div>
          <div>
            <h3>Catagory</h3>
            <input type="text" placeholder="Design/Dev/etc" />
          </div>
          <button>Create Task</button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
