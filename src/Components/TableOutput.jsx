import React from "react";
import { useSelector, useDispatch } from "react-redux";
import EditTask from "./EditTask";

function TableOutput() {
  let tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  let removeTask = (task) => {
    dispatch({ type: "REMOVE_TASK", payload: task });
  };

  if (tasks.length === 0)
    return (
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <h3>No Task to Display</h3>
        </div>
      </div>
    );
  return (
    <div className="container fluid mt-5">
      <div className="row justify-content-center">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Task to be done</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.reverse().map((task, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td className="align-items-center">{task}</td>
                <td>
                  <svg
                    onClick={() => removeTask(task)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                  <EditTask prevTask={task}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableOutput;
