"use client";
//this is just the design of the todo you rendered form pagejs
// ITS ALWAYS GOOD TO HAVE YOUR CLIENT SIDE CODE RENDERED FROM YOU COMPONENTS FOLDER SO ILL CHANGE THIS FOR YOU SOON :)

import Todo from "@/components/Todo";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React from "react";

const [formData, setFormData] = useState({
  title: "",
  description: "",
});

useEffect(() => {
  fetchTodos();
}, []);

const [todoData, setTodoData] = useState([]);

const onChangeHandler = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setFormData((form) => ({ ...form, [name]: value }));
};

const onSubmitHandler = async (e) => {
  e.preventDefault();
  try {
    // api code
    const response = await axios.post("/api", formData);
    toast.success(response.data.msg);
    setFormData({
      title: "",
      description: "",
    });
    await fetchTodos();
  } catch (error) {
    toast.error("Error!");
  }
};

const TodoDesign = () => {
  return (
    <div>
      <ToastContainer theme="dark" closeOnClick autoClose="3500" />

      <form
        onSubmit={onSubmitHandler}
        className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 p-2 mx-auto bg-red-500 border rounded-lg hover:bg-red-700 duration-200 ease-in"
      >
        <input
          onChange={onChangeHandler}
          value={formData.title}
          type="text"
          name="title"
          placeholder="Enter Title"
          className="px-3 py-2 border-2 w-full"
        />
        <textarea
          onChange={onChangeHandler}
          value={formData.description}
          name="description"
          placeholder="Enter Description"
          className="px-3 py-2 border-2 w-full"
        ></textarea>
        <button
          type="submit"
          className="bg-orange-600 py-3 px-11 text-white self-center"
        >
          Add ToDo!
        </button>
      </form>
      {/* <ParticlesComponent id="particles" /> */}

      <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-5">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {todoData.map((item, index) => {
              return (
                <Todo
                  key={index}
                  id={index}
                  title={item.title}
                  description={item.description}
                  complete={item.isCompleted}
                  mongoId={item._id}
                  deleteTodo={deleteTodo}
                  completeTodo={completeTodo}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoDesign;
