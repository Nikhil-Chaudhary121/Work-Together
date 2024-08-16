"use client";

import { FormEventHandler, useState } from "react";

const Modal = ({
  isOpen,
  onClose,
  name,
  description,
  status,
  type,
}: {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  description: string;
  type: "Backend" | "Frontend" | "Other";
  status: "todo" | "progress" | "approval" | "done";
}) => {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const handleSubmit = () => {
    console.log("Input Value:", inputValue);
    console.log("Select Value:", selectValue);

    setInputValue("");
    setSelectValue("");
    onClose();
  };

  const handleCancel = () => {
    setInputValue("");
    setSelectValue("");
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 font-rubik flex items-center justify-center bg-gray-800  bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl mb-4">Update Status</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 mt-1 p-2 w-full">
            <h1 className="w-full ">
              {" "}
              <span className="font-bold">Task Name : </span> {name}
            </h1>
            <h1 className="w-full ">
              {" "}
              <span className="font-bold">Task Description : </span>{" "}
              {description}
            </h1>
            <h1 className="block">
              <span className="font-bold">Task Type : </span> {type}
            </h1>
            <label className="block text-gray-700">
              <span className="font-bold">Update Task Status : </span>
              <select
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
                className="mt-2 p-2 w-full border border-gray-300 rounded"
              >
                <option value="">{status}</option>
                <option value="option1">todo</option>
                <option value="option2">progress</option>
                <option value="option3">approval</option>
                <option value="option4">done</option>
              </select>
            </label>
          </div>
          <div className="flex justify-end mt-2">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Add
            </button>

            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
